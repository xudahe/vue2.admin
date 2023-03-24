<template>
  <div class="swiper-item" :style="{ '-webkit-transform': imgLateX, width: imgWidth + 'px', height: imgHeight + 'px' }">
    <img :src="img" />
  </div>
</template>

<script>
export default {
  name: "swiper-item",
  props: {
    img: {
      type: String
    },
    imgWidth: {
      type: Number,
      default: 0
    },
    imgHeight: {
      type: Number,
      default: 0
    },
    tranWidth: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {};
  },
  computed: {
    imgLateX() {
      return "translate3d(" + this.tranWidth + "px,0,0)";
    }
  }
};
</script>

<style lang="css">
.swiper-item {
  position: absolute;
  top: 0;
  left: 0;
}

.swiper-item img {
  width: 100%;
  height: 100%;
}
</style>
