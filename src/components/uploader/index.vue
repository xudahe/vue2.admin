<template>
  <div id="global-uploader">

    <!-- 上传 -->
    <uploader ref="uploader" :options="options" :file-status-text="statusText" :autoStart="false" :key="uploader_key"
      @file-added="onFileAdded" @file-success="onFileSuccess" @file-progress="onFileProgress" @file-error="onFileError"
      class="uploader-app">
      <uploader-unsupport></uploader-unsupport>

      <uploader-btn id="global-uploader-btn" :attrs="attrs" ref="uploadBtn">上传文件</uploader-btn>
      <!-- <uploader-btn  :directory="true" ref="uploadBtn">上传文件夹</uploader-btn> -->
      <uploader-list v-show="panelShow">
        <div class="file-panel" slot-scope="props" :class="{ 'collapse': collapse }">
          <div class="file-title">
            <h2>文件列表</h2>
            <div class="operate">
              <el-button @click="fileListShow" type="text" :title="collapse ? '展开' : '折叠'">
                <i :class="collapse ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"></i>
              </el-button>
              <el-button @click="close" type="text" title="关闭">
                <i class="fa fa-close" aria-hidden="true"></i>
              </el-button>
            </div>
          </div>

          <ul class="file-list">
            <li v-for="file in props.fileList" :key="file.id">
              <uploader-file :class="'file_' + file.id" ref="files" :file="file" :list="true"></uploader-file>
            </li>
            <div class="no-file" v-if="!props.fileList.length"><i class="iconfont icon-empty-file"></i> 暂无待上传文件</div>
          </ul>
        </div>
      </uploader-list>

    </uploader>

  </div>
</template>

<script>
/**
 *   全局上传插件
 *   调用方法：bus.$emit('openUploader', {}) 打开文件选择框，参数为需要传递的额外参数
 *   监听函数：bus.$on('fileAdded', fn); 文件选择后的回调
 *            bus.$on('fileSuccess', fn); 文件上传成功的回调
 */
import bus from '../../eventBus.js';
import SparkMD5 from 'spark-md5'; //加密工具

var ACCEPT_CONFIG = {
  image: ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.svg'], //图片
  video: ['.mp4', '.rmvb', '.mkv', '.wmv', '.flv'], //视频
  document: ['.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.pdf', '.txt', '.tif', '.tiff'], //文档
  audio: ['.mp3'], //音频
  folder: ['.zip', '.rar', '.7z'],
  unknown: ['.exe'], //未知
  getAll() {
    return [...this.image, ...this.video, ...this.document, ...this.audio, ...this.folder, ...this.unknown]
  },
};

export default {
  name: "vUploader",
  data() {
    // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js

    return {
      //这个用来刷新组件--解决不刷新页面连续上传的缓存上传数据（注：每次上传时，强制这个值进行更改---根据自己的实际情况重新赋值）
      uploader_key: new Date().getTime(),
      // 组件实例化时传入的配置项
      options: {
        // target: AppConfig.baseUrl_Pro + '/api/Uploader/SimpleUploader',
        target: '/api/Uploader/SimpleUploader',
        chunkSize: '2048000', //分块大小
        fileParameterName: 'file', //上传文件时文件的参数名，默认 file
        simultaneousUploads: 3, //并发上传数
        maxChunkRetries: 3, //最大自动失败重试上传次数
        testChunks: true,   //是否开启服务器分片校验
        // 服务器分片校验函数，秒传及断点续传基础
        checkChunkUploadedByResponse: function (chunk, message) {
          let objMessage = JSON.parse(message);
          if (objMessage.skipUpload) { //skipUpload表示文件已存在，跳过
            return true;
          }

          //objMessage.uploaded = [2, 3, 4]
          return (objMessage.response || []).indexOf(chunk.offset + 1) >= 0
        },
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        },
        query: function (e) {
          return {
            fileName: e.relativePath,
            size: e.size
          }
        },
        parseTimeRemaining: function (timeRemaining, parsedTimeRemaining) {
          // timeRemaining{Number}, 剩余时间，秒为单位
          // parsedTimeRemaining{String}, 默认展示的剩余时间内容
          return parsedTimeRemaining
            .replace(/\syears?/, '年')
            .replace(/\days?/, '天')
            .replace(/\shours?/, '小时')
            .replace(/\sminutes?/, '分钟')
            .replace(/\sseconds?/, '秒')
        }
      },
      statusText: {
        success: '上传成功',
        error: '上传失败',
        uploading: '上传中',
        paused: '暂停中',
        waiting: '等待中'
      },
      attrs: {
        accept: ACCEPT_CONFIG.getAll()
      },
      panelShow: false,   //选择文件后，展示上传panel
      collapse: false,
    }
  },
  mounted() {
    bus.$off('openUploader').$on('openUploader', query => {
      this.params = query || {};
      if (this.$refs.uploadBtn) {
        $('#global-uploader-btn').click();
      }
    });
  },
  computed: {
    //获取Uploader实例
    uploader() {
      return this.$refs.uploader.uploader;
    }
  },
  methods: {
    //文件上传到服务器前操作，可用校验等
    onFileAdded(file) {
      this.panelShow = true;
      this.computeMD5(file);
      bus.$emit('fileAdded');
    },
    //上传进度回调
    onFileProgress(rootFile, file, chunk) {
      console.log(`上传中 ${file.name}，chunk：${chunk.startByte / 1024 / 1024} ~ ${chunk.endByte / 1024 / 1024}`)
    },
    //所有切片上传完毕执行
    onFileSuccess(rootFile, file, response, chunk) {
      let res = JSON.parse(response);

      // 服务器自定义的错误（即虽返回200，但是是错误的情况），这种错误是Uploader无法拦截的
      if (!res.success) {
        this.$message({ message: res.message, type: 'error' });
        // 文件状态设为“失败”
        this.statusSet(file.id, 'failed');
        return
      }

      // 如果服务端返回需要合并,需要与后端商量好返回'needMerge'
      if (res.response.needMerge) {
        // 文件状态设为“合并中”
        this.statusSet(file.id, 'merging');

        this.$ajax(this.$apiSet.fileMerge, {
          tempPath: res.response.tempPath,
          fileName: file.name,
          ...this.params,
        }).then(res => {
          if (!res.data.success) {
            this.$errorMsg(res.data.message)
          } else {
            // 文件合并成功
            bus.$emit('fileSuccess');
            this.statusRemove(file.id);
          }
        }).catch(err => { })

      } else {
        // 不需要合并
        bus.$emit('fileSuccess');
        console.log('上传成功');
      }
    },
    //上传错误监听
    onFileError(rootFile, file, response, chunk) {
      this.$message({
        message: response,
        type: 'error'
      })
    },
    /**
     * 计算md5，实现断点续传及秒传
     * @param file
     */
    computeMD5(file) {
      let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
        currentChunk = 0, //当前切块序号
        chunkSize = 10 * 1024 * 1000, //切片大小
        chunks = Math.ceil(file.size / chunkSize), //总切片数
        spark = new SparkMD5.ArrayBuffer(), //MD5加密
        fileReader = new FileReader(),
        time = new Date().getTime();

      this.statusSet(file.id, 'md5');// 文件状态设为"计算MD5"
      file.pause();//暂停文件
      loadNext();
      //通过H5的FileReader接口读取文件
      file.cmd5 = true;
      fileReader.onload = (e => {
        spark.append(e.target.result);
        if (currentChunk < chunks) {
          currentChunk++;
          loadNext();
          // 实时展示MD5的计算进度
          this.$nextTick(() => {
            $(`.myStatus_${file.id}`).text('校验MD5 ' + ((currentChunk / chunks) * 100).toFixed(0) + '%')
          })
        } else {
          let md5 = spark.end();
          this.computeMD5Success(md5, file);
          console.log(`MD5计算完毕：${file.name} \nMD5：${md5} \n分片：${chunks} 大小:${file.size} 用时：${new Date().getTime() - time} ms`);
          spark.destroy(); //释放缓存
        }
      });
      fileReader.onerror = function () {
        this.error(`文件${file.name}读取出错，请检查该文件`)
        file.cancel(); //取消上传且从文件列表中移除
      };
      function loadNext() {
        let start = currentChunk * chunkSize;
        let end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;
        fileReader.readAsArrayBuffer(blobSlice.call(file.file, start, end));
      }
    },
    computeMD5Success(md5, file) {
      // 将自定义参数直接加载uploader实例的opts上
      Object.assign(this.uploader.opts, {
        query: {
          ...this.params,
        }
      })
      file.uniqueIdentifier = md5; //代表文件唯一标识，把计算出来的MD5赋值给这个属性 
      file.cmd5 = false; //取消计算md5状态
      file.resume(); //继续文件上传
      this.statusRemove(file.id);
    },
    fileListShow() {
      let $list = $('#global-uploader .file-list');
      if ($list.is(':visible')) {
        $list.slideUp();
        this.collapse = true;
      } else {
        $list.slideDown();
        this.collapse = false;
      }
    },
    close() {
      this.uploader.cancel();
      this.panelShow = false;
    },
    /**
     * 新增的自定义的状态: 'md5'、'transcoding'、'failed'
     * 当自定义状态开始时，要手动调一下statusSet方法，生成一个p标签盖在原本的状态上面
     * @param id
     * @param status
     */
    statusSet(id, status) {
      let statusMap = {
        md5: {
          text: '校验MD5',
          bgc: '#fff'
        },
        merging: {
          text: '合并中',
          bgc: '#e2eeff'
        },
        transcoding: {
          text: '转码中',
          bgc: '#e2eeff'
        },
        failed: {
          text: '上传失败',
          bgc: '#e2eeff'
        }
      }
      this.$nextTick(() => {
        $(`<p class="myStatus_${id}"></p>`).appendTo(`.file_${id} .uploader-file-status`).css({
          'position': 'absolute',
          'top': '0',
          'left': '0',
          'right': '0',
          'bottom': '0',
          'zIndex': '1',
          'backgroundColor': statusMap[status].bgc
        }).text(statusMap[status].text);
      })
    },
    //当自定义状态结束时，还要手动调用statusRemove移除该标签
    statusRemove(id) {
      this.$nextTick(() => {
        $(`.myStatus_${id}`).remove();
      })
    },
    error(msg) {
      this.$notify({
        title: '错误',
        message: msg,
        type: 'error',
        duration: 2000
      })
    }
  },
  watch: {},
  components: {}
}
</script>

<style lang="less">
#global-uploader {
  position: fixed;
  z-index: 20;
  right: 10px;
  bottom: 10px;

  .uploader-app {
    width: 520px;
  }

  .file-panel {
    background-color: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 7px 7px 0 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    .file-title {
      display: flex;
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      padding: 0 15px;
      border-bottom: 1px solid #ddd;

      .operate {
        flex: 1;
        text-align: right;
      }
    }

    .file-list {
      position: relative;
      max-height: 240px;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #fff;

      >li {
        background-color: #fff;
      }
    }

    &.collapse {
      .file-title {
        background-color: #e7ecf2;
      }
    }
  }

  .no-file {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
  }

  // /deep/.uploader-file-icon {
  //   &:before {
  //     content: "" !important;
  //   }
  //   &[icon="image"] {
  //     background: url(./images/image-icon.png);
  //   }
  //   &[icon="video"] {
  //     background: url(./images/video-icon.png);
  //   }
  //   &[icon="document"] {
  //     background: url(./images/text-icon.png);
  //   }
  // }
  /deep/.uploader-file-actions>span {
    margin-right: 6px;
  }
}

/* 隐藏上传按钮 */
#global-uploader-btn {
  position: absolute;
  clip: rect(0, 0, 0, 0); // clip 属性剪裁绝对定位元素
}
</style>