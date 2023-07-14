<template>
  <div class="picture card_css">
    <el-card class="box-card" shadow="hover">
      <!--工具条-->
      <v-header icon="md-podium" text="图片列表">
        <div slot="content"></div>
        <div style="text-align: right;">
          <el-upload ref="upload" class="upload-demo" :action="photourl + '/api/File/imgUpload'" multiple
            :show-file-list="false" :on-change="handleChange" :before-upload="onBeforeUpload" :on-success="handleSuccess">
            <el-button size="small" type="primary">上传图片</el-button>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
        </div>
      </v-header>

      <!--列表-->
      <e-table :table-data="tableData" :loading="loading" :table-label="tableLabel" :table-option="tableOption"
        :now-page="nowPage" :now-size="nowSize" @handleButton="handleButton"
        @handleSelectionChange="handleSelectionChange"></e-table>
    </el-card>

  </div>
</template>

<script>

export default {
  name: 'picture_manager',
  data() {
    return {
      photourl: website.baseUrl_Pro,
      loading: false, //加载中
      filters: {
        name: ""
      },
      tableData: [
        {
          name: '123', size: 123, image: [
            require("@/assets/image/slide/img.jpg"),
            require("@/assets/image/slide/img1.jpg"),
            require("@/assets/image/slide/img2.jpg"),
          ], createTime: new Date(),
        }
      ],
      tableLabel: [
        { label: '图片名称', param: 'name' },
        { label: '图片大小', param: 'size' },
        { label: '图片信息', param: 'image' },
        {
          label: '上传时间', param: 'createTime', sortable: true, width: '160',
          formatter: row => {
            return this.$formatDate(new Date(this.$isNull(row.modifyTime) ? row.createTime : row.modifyTime), true);
          }
        },
      ],
      tableOption: {},

      nowPage: 1, // 当前页数
      nowSize: 15, // 当前页条数

      sels: {}, //列表选中列
    }
  },
  methods: {
    onBeforeUpload(file) {
      this.$Loading.start();
      var allowType = "image/jpg，image/png，image/jpeg，image/gif";

      const isJPG = allowType.indexOf(file.type) != -1;
      const isLt4M = file.size / 1024 / 1024 < 4;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt4M) {
        this.$message.error('上传头像图片大小不能超过 4MB!');
      }
      return isJPG && isLt4M;
    },
    handleChange(file, fileList) {
      this.$Loading.finish();
      console.log(file)
    },
    handleSuccess(response, file, fileList) {
      this.$refs.upload.clearFiles();

      for (let i = 0; i < fileList.length; i++) {
        if (fileList[i].status == 'success') {
          this.tableData.push({
            name: fileList[i].name,
            size: fileList[i].size / 1024 / 1024 + 'MB',
            url: fileList[i].response.response
          })
        }
      }
    },
  },

};

//-------------------------------iview table 显示多张图片-------------------------------------
// {
//   title: '图片',
//   align: "center",
//   minWidth: 100,
//   render: (h, params) => {
//     let devicesArr = [];
//     let devicesArr1 = [];
//     let photos = [];

//     if (params.row.imgurl != "") {
//       let list = params.row.imgurl.split(',');
//       for (let i = 0; i < list.length; i++) {
//         let url = mapconfig.webservices + 'LYG/' + list[i];
//         photos.push(url);
//         devicesArr1.push(
//           h('img', {
//             attrs: {
//               src: url,
//               style: 'width: 30px;margin-right:5px;	cursor:pointer;margin-top: 10px;' + (i == 0 ? '' : 'display: none;'),
//             },
//           })
//         )
//       }
//       devicesArr.push(
//         h('viewer', {
//           props: {
//             images: photos
//           }
//         }, [devicesArr1]
//         )
//       );
//     }
//     return h('div', devicesArr);
//   }
// },
</script>

<style scoped>
.picture {
  height: 100%;
  width: 100%;
}
</style>

