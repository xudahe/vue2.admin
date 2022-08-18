<!--左侧详情页-->
<style lang="less" scoped>
#overview_left {
  .leftBg {
    width: 100%;
    height: calc(~"100% / 2 - 0.1rem");
    margin-bottom: 0.1rem;
  }
}
</style>

<template>
  <div id="waterStationLeft" style="width: 100%;height: 100%;" class="fade-in-left1">
    <div class="leftBg leftbg1">
      <div class="homeTitle">XXXXX</div>
      <div style="height: calc(100% - 0.3rem);">

      </div>
    </div>
    <div class="leftBg leftbg2">
      <div class="homeTitle">XXXXX</div>
      <div style="height: calc(100% - 0.3rem);">
        <div style="text-align: center;width: 100%;">
          <Carousel style="height:100%;" arrow="always" dots="none" v-if="imglist.length > 0">
            <CarouselItem v-for="(item, index) in imglist" :key="index" style="height:100%;">
              <div style="width:70%;height:100%;text-align:center;overflow: hidden; display: inline-block;">
                <img :src="item" alt="" style="width: auto;height: 100%;" v-viewer>
              </div>
            </CarouselItem>
          </Carousel>
          <!-- <img :src="imgurl" alt="" style="width: 90%;height: 100%" v-else v-viewer> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "../../../../eventBus.js";

export default {
  components: {},
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
      imglist: []
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