<template>
  <el-dialog :visible.sync="dialogVisible" width="95%" append-to-body :fullscreen="dialogFull">
    <div class="error-box-title" slot="title">
      <span v-for="(item, index) in urls" :key="index">{{ item.title }}</span>
    </div>
    <iframe :src="url" border="0" :style="{ width: '100%', height: '100%' }" frameborder="0" id="mainiframe"></iframe>
  </el-dialog>
</template>

<script>

export default {
  name: "weather-log",
  data() {
    return {
      dialogVisible: false,
      dialogFull: true, //全屏
      url: "http://typhoon.zjwater.gov.cn/default.aspx",
      urls: [
        {
          title: '台风信息', url: "http://typhoon.zjwater.gov.cn/default.aspx",
        }
      ],
    };
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
.el-dialog__wrapper {
  /deep/ .el-dialog__body {
    height: calc(100% - 40px) !important;
    padding: 10px !important;
  }
}
</style>