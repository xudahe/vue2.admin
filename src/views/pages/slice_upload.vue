<template>
  <section>
    <el-tabs tab-position="top">
      <el-tab-pane label="上传1">
        <input type="file" @change="handleFileChange" />
        <el-button @click="handleUpload"> 上传 </el-button>

        <div style="width: 350px">
          总进度：
          <el-progress :percentage="tempPercent"></el-progress>
          切片进度：
          <div v-for="item in fileObj.chunkList" :key="item">
            <span>{{ item.chunkName }}：</span>
            <el-progress :percentage="item.percent"></el-progress>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="上传2">
        <el-button @click="uploadClick">simple-uploader上传</el-button>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>

/**
 * https://mp.weixin.qq.com/s/CYVNktlftsS9dSvsMDt5Bw
 */

import axios from 'axios';
import bus from '../../eventBus.js'

export default {
  name: "slice_upload",
  components: {
  },
  data() {
    return {
      fileObj: {
        file: null,
        chunkList: []
      }
    }
  },
  watch: {
    totalPercent(newVal) {
      if (newVal > this.tempPercent) this.tempPercent = newVal
    }
  },
  computed: {
    totalPercent() {
      const fileObj = this.fileObj;
      if (fileObj.chunkList.length === 0) return 0;
      const loaded = fileObj.chunkList
        .map(({ size, percent }) => size * percent)
        .reduce((pre, next) => pre + next);
      return parseInt((loaded / fileObj.file.size).toFixed(2));
    },
  },
  mounted() {
    // 文件选择后的回调
    bus.$on('fileAdded', () => { });
    // 文件上传成功的回调
    bus.$on('fileSuccess', () => { });
  },
  methods: {
    uploadClick() {
      // 打开文件选择框
      bus.$emit('openUploader', {})
    },
    axiosRequest({
      url,
      method = "post",
      data,
      headers = {},
      onUploadProgress = (e) => e, // 进度回调
    }) {
      return new Promise((resolve, reject) => {
        axios[method](url, data, {
          headers,
          onUploadProgress, // 传入监听进度回调
        })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    handleFileChange(e) {
      const [file] = e.target.files
      if (!file) return
      this.fileObj.file = file
    },
    async handleUpload() {
      const fileObj = this.fileObj
      if (!fileObj.file) return

      const chunkList = this.createChunk(fileObj.file)
      console.log(chunkList) // 看看chunkList长什么样子
      this.fileObj.chunkList = chunkList.map(({ file }, index) => ({
        file,
        size: file.size,
        percent: 0,
        chunkName: `${fileObj.file.name}-${index}`,
        fileName: fileObj.file.name,
        index,
      }));
      this.uploadChunks(); // 执行上传切片的操作
    },
    //对文件进行切片，每个切片5M
    createChunk(file, size = 5 * 1024 * 1024) {
      const chunkList = []
      let cur = 0
      while (cur < file.size) {
        // 使用slice方法切片
        chunkList.push({ file: file.slice(cur, cur + size) })
        cur += size
      }
      return chunkList
    },
    async uploadChunks() {
      const requestList = this.fileObj.chunkList
        .map(({ file, fileName, index, chunkName }) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("fileName", fileName);
          formData.append("chunkName", chunkName);
          return { formData, index };
        })
        .map(({ formData, index }) =>
          this.axiosRequest({
            url: "http://localhost:1081/api/File/fileUpload",
            data: formData,
            onUploadProgress: this.createProgressHandler(
              this.fileObj.chunkList[index]
            ), // 传入监听上传进度回调
          })
        );
      await Promise.all(requestList); // 使用Promise.

      // this.mergeChunks()  //保存好所有切片后，让后端合并这些切片
    },
    createProgressHandler(item) {
      return (e) => {
        // 设置每一个切片的进度百分比
        item.percent = parseInt(String((e.loaded / e.total) * 100));
      };
    },
    //切片文件合并
    mergeChunks(size = 5 * 1024 * 1024) {
      //   this.axiosRequest({
      //     url: "http://localhost:1081/merge",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     data: JSON.stringify({
      //       size,
      //       fileName: this.fileObj.file.name
      //     }),
      //   });
    },
  },
}
</script>

<style lang="less">
</style>