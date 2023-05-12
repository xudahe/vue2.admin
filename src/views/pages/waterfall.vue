<template>
  <waterfall></waterfall>
</template>
<script>
import waterfall from "../../components/waterfall/index1.vue";

export default {
  name: "t-waterfall",
  components: { waterfall },
  data() {
    return {
      imgArr: [
        // require("@/assets/image/slide/img.jpg"),
        // require("@/assets/image/slide/img1.jpg"),
      ],
      imgCount: 0
    };
  },
  mounted() {
    // this.loading();
  },
  methods: {
    //预加载图片
    loading() {
      var imgArr = this.imgArr;
      var imgCount = this.imgCount;
      for (let img of imgArr) {
        let imgage = new Image();
        imgage.onload = () => {
          imgage.src = img;
          imgCount++;
          this.imgCount = parseInt((imgCount / imgArr.length) * 100); //// 计算图片加载的百分数
        };
      }
    }
  }
};
</script>

<style scoped></style>
