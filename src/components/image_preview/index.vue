<template>
  <el-dialog :visible.sync="dialogVisible" :width="$defaultConfig.previewImageSize" :before-close="handleClose"
    append-to-body destroy-on-close>
    <div ref="box" class="box" v-loading="loading">
      <img :src="imageUrl" />
    </div>
  </el-dialog>
</template>

<script>
/**
 * @description 简单的图片预览组件
 * @description 使用方法：  	<ImagePreview :show-modal.sync="isShow" :url="url" />
 */
export default {
  name: "ImagePreview",
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dialogVisible: false,
      loading: false,
      image: {}
    };
  },
  computed: {
    imageUrl() {
      return this.url;
    }
  },
  watch: {
    showModal(val) {
      if (val) {
        this.loading = true;
        this.image.src = this.imageUrl;
        this.image.onload = () => {
          this.loading = false;
        };
      }
      this.dialogVisible = this.showModal;
    }
  },
  created() {
    this.image = new Image();
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
      this.$emit("update:showModal", false);
    }
  }
};
</script>

<style lang="less" scoped>
.el-dialog__wrapper {

  /deep/.el-dialog__headerbtn {
    z-index: 1;
  }

  /deep/.el-dialog__header {
    padding: 0;
  }

  /deep/.el-dialog__body {
    padding: 0;
  }

  .box {
    position: relative;
    min-height: 100px;
  }

  img {
    vertical-align: middle;
    width: 100%;
  }
}
</style>