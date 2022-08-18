<template>
  <div class="homepageDiv" style="width: 100%;height: 100%;">
    <div id="homePage_Div" style="width: 19.2rem;height: 100%;">
      <div class="homePageDiv" style="width: 100%;height: 100%;">
        <div style="height: 100%;">
          <div id="circleLeft" style="height: 100%;width: 4.22rem;float: left;position:absolute;z-index: 1;" class="fade-in-right">
            <homeLeft ref="homeLeft"></homeLeft>
          </div>
          <div id="circleMiddle" style="height: 100%;width: 10.76rem;float: left;position:absolute;z-index: 0;left: 4.22rem;">
            <div style="height: calc(21% + 39% + 0.16rem + 0.24rem + 0.24rem);marginTop:0" class="scale-in">
              <homeMiddleTop ref="homeMiddleTop"></homeMiddleTop>
            </div>
            <div id="circleMiddleBot" style="height: calc(100% - (21% + 39% + 0.16rem + 0.24rem + 0.24rem + 0.16rem));" class="fade-in-up">
              <homeMiddleBot ref="homeMiddleBot"></homeMiddleBot>
            </div>
          </div>
          <div style="height: 100%;width: 4.22rem;float: left;position:absolute;z-index: 1;right: 0;" class="fade-in-left">
            <div id="circleRight" style="height: 100%;width: 100%;">
              <homeRight ref="homeRight"></homeRight>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeLeft from "./homeLeft.vue";
import homeMiddleBot from "./homeMiddleBot.vue";
import homeMiddleTop from "./homeMiddleTop.vue";
import homeRight from "./homeRight.vue";
export default {
  name: "homepage",
  components: {
    homeLeft,
    homeMiddleBot,
    homeMiddleTop,
    homeRight,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() { },
  beforeDestroy() { },
};
</script>

<style lang="less">
.homeTitle {
  font-size: 0.14rem;
  color: #ffffff;
  padding: 0.03rem 0.1rem;
  float: none;
  background-image: url(../../../../assets/static/img/newhome/01/bg_侧边标题.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
