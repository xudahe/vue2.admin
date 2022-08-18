<!--右侧详情页-->
<style lang="less" scoped>
</style>

<template>
  <div id="waterStationRight" style="width: 100%;height: 100%;" class="fade-in-left1">
    <water_right></water_right>
  </div>
</template>
<script>
import bus from "../../../../eventBus.js";
import water_right from "../test/water_right.vue"

export default {
  components: {
    water_right
  },
  props: {
    detailData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    let _this = this;

  },
  methods: {
  },
  beforeDestroy() {
  },
}
</script>