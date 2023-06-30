<template>
  <div id="slide" style="margin-top:10px;">
    <el-button @click.native="showCilck">弹出框</el-button>
    <Vcode :show="isShow" :canvasWidth="400" :canvasHeight="250" :puzzleScale="1" :sliderSize="40" :range="10"
      :imgs="imgs" successText="验证成功！" failText="验证失败，请重试！" sliderText="拖动滑块验证" @success="onSuccess" @fail="onFail"
      @close="onClose" />
  </div>
</template>

<script>

/**
 * https://blog.csdn.net/qq_45268602/article/details/123783004
 * 
 * https://gitcode.net/mirrors/javaLuo/vue-puzzle-vcode
 */

import Vcode from "vue-puzzle-vcode";
export default {
  components: { Vcode },
  data() {
    return {
      isShow: false,
      imgs: [
        require("@/assets/image/slide/img.jpg"),
        require("@/assets/image/slide/img1.jpg"),
        require("@/assets/image/slide/img2.jpg"),
        require("@/assets/image/slide/img3.jpg"),
        require("@/assets/image/slide/img4.jpg"),
        require("@/assets/image/slide/img5.jpg")
      ], //自定义背景图
    };
  },
  methods: {
    showCilck() {
      this.isShow = true;
    },
    onSuccess(value) {
      this.isShow = false;
    },
    onFail(value) {
      this.isShow = true;
    },
    onClose(value) {
      this.isShow = false;
    },

  }
};
</script>

<style></style>
