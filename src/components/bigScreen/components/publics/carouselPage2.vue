<template>
  <div class="middlePageDiv" style="width: 100%;height: 100%;">
    <!-- 左侧 -->
    <div id="circleLeft" style="height: 100%;width: 25%;float: left;" class="fade-in-right2">
      <div class="UnitFrame fade-in-right1" style="height: 33.3%;float: left;width: 100%;">
        <div class="divTitle" style="position: relative;">
          <div class="UnitTitle"> 资产统计</div>
          <div style="position: absolute;right: 0.0rem;top: 0.0rem;">
            <ButtonGroup shape="circle" size="small" style="float: right;">
              <Button style="padding: 0px 5px 0px;background-color: #096993;border-color: #096993;color: #fff;" title="日累计流量">时</Button>
              <Button style="padding: 0px 5px 0px;background-color: #096993;border-color: #096993;color: #fff;" title="小时累计流量">日</Button>
            </ButtonGroup>
          </div>
        </div>
        <div id="content" style="width: 100%;height: calc(100% - 0.25rem);"></div>
      </div>
      <div class="UnitFrame fade-in-right1" style="height: 33.3%;float: left;width: 100%;animation-delay: 0.2s;">
        <div class="divTitle" style="position: relative;">
          <div class="UnitTitle">资产统计 </div>
        </div>
        <div id="content" style="width: 100%;height: calc(100% - 0.25rem);"></div>
      </div>
      <div class="UnitFrame fade-in-right1" style="height: 33.3%;float: left;width: 100%;animation-delay: 0.4s;">
        <div class="divTitle" style="position: relative;">
          <div class="UnitTitle"> 资产统计</div>
        </div>
        <div id="content" style="width: 100%;height: calc(100% - 0.25rem);"></div>
      </div>
    </div>
    <!-- 中间 -->
    <div id="circleMiddle" style="height: 100%;width: 50%;float: left;">
      <!-- <middle></middle> -->
    </div>
    <!-- 右侧 -->
    <div id="circleRight" style="height: 100%;width: 25%;float: left;" class="fade-in-left2">
      <div class="UnitFrame fade-in-left1" style="height: 33.3%;float: left;width: 100%;">
        <div class="divTitle" style="position: relative;">
          <div class="UnitTitle">资产统计 </div>
        </div>
        <div id="content" style="width: 100%;height: calc(100% - 0.25rem);"></div>
      </div>
      <div class="UnitFrame fade-in-left1" style="height: 33.3%;float: left;width: 100%;animation-delay: 0.2s;">
        <div class="divTitle" style="position: relative;">
          <div class="UnitTitle">资产统计</div>
        </div>
        <div id="content" style="width: 100%;height: calc(100% - 0.25rem);"></div>
      </div>
      <div class="UnitFrame fade-in-left1" style="height: 33.3%;float: left;width: 100%;animation-delay: 0.4s;">
        <div class="divTitle" style="position: relative;">
          <div class="UnitTitle">资产统计</div>
        </div>
        <div id="content" style="width: 100%;height: calc(100% - 0.25rem);"></div>
      </div>
    </div>
  </div>
</template>
<script>

import middle from "../carouselPage2/middle";

export default {
  name: "carouselPage2",
  components: { middle },
  data() {
    return {
      time: null
    };
  },
  methods: {},
  mounted() {
    var _this = this;
  },
  beforeDestroy() { }
};
</script>

<style lang="less" scoped>
.middlePageDiv {
  .UnitTitle {
    font-size: 0.14rem;
    color: #ffffff;
    padding: 0.03rem 0.1rem;
    float: none;
    background-image: url(../../../../assets/static/img/newhome/01/bg_侧边标题.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
</style>
