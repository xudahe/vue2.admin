<!-- 首页面 -->
<template>
  <div class="homepage" style="width: 100%;height: calc(100% - 0.6rem);">
    <!-- <marquee :width="wit" direction="left" align="middle" class="cementDiv">
      {{date}} 多云 27℃ 西北风2到3级!
    </marquee>
    <div class="warnDiv" style="height: 18px;overflow: hidden;">
      <div style="position: relative;" :style="{top: noticeTop + 'px'}" :class="{transitionTop: isActive}">
        <div :id="'Pro'+ind" v-for="(item,ind) in liquidWarn" :key="ind" class="botDiv" :style="{cursor: 'pointer'}">
          <div v-html="item" style="line-height: 18px;"></div>
        </div>
      </div>
    </div> -->
    <div id="homePage_Div" style="width: 100%;height: 100%;">
      <!-- 中间主体部分 -->
      <div class="homePageDiv" style="height: 100%;position: relative;overflow-y: hidden;width: 100%;">
        <Carousel v-model="overviewPage">
          <CarouselItem :key="inde" v-for="(item, inde) in maxPage">
            <component :is="item.pageName"></component>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  </div>
</template>
<script>

import carouselPage1 from "../components/publics/carouselPage1.vue";
import carouselPage2 from "../components/publics/carouselPage2.vue";
import carouselPage3 from "../components/publics/carouselPage3.vue";

export default {
  components: {
    carouselPage1,
    carouselPage2,
    carouselPage3,
  },
  data() {
    return {
      overviewPage: 0,
      maxPage: [
        { id: 1, pageName: "carouselPage1" },
        { id: 2, pageName: "carouselPage2" },
        { id: 3, pageName: "carouselPage3" },
      ],

      time: null,

      liquidWarn: [],

      noticeTop: 0, // 公告top值
      isActive: true, // 是否显示transitionTop动画
      wit: 0
    };
  },
  methods: {
    getWarnData() {
      let _this = this;

      for (let i = 0; i < 5; i++) {
        this.liquidWarn.push("<div>天气预报：<span class='liquidWarnRoad'>2020-08-18 多云 27℃ 西北风2到3级!</span></div>")
      }
      let index = 1;
      let list = JSON.parse(JSON.stringify(_this.liquidWarn)); //JSON.parse(JSON.stringify(obj))一般用来深拷贝深

      const timer = setInterval(() => {

        if ((index - 1) == _this.liquidWarn.length) {
          index = 1;
        }
        let dom = document.getElementsByClassName('botDiv');
        _this.liquidWarn.push(list[(index - 1)]);

        _this.isActive = true;
        _this.noticeTop = -18;

        setTimeout(function () {
          _this.isActive = false;
          _this.noticeTop = 0;
          _this.liquidWarn.splice(0, 1);
        }, 2500)
        index++;

      }, 5000);

      // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer);
      })
    }
  },
  mounted() {
    var _this = this;

    // this.$nextTick(() => {
    //   this.getWarnData();
    // })
    let time = new Date();
    // this.date = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + ' ' + time.getHours() + '时'
  },
  created() {
  }
};
</script>
<style >
.UnitFrame {
  padding: 0 0.05rem 0.05rem 0.05rem;
}

.UnitDiv {
  position: relative;
  height: 100%;
}

/* 高度25% */
.UnitDiv_bg25 {
  height: 100%;
  background: url("../../../assets/static/img/newhome/04/6.png") no-repeat;
  background-size: 100% 100%;
}

/* 高度50% */
.UnitDiv_bg50 {
  height: 100%;
  background: url("../../../assets/static/img/newhome/04/3.png") no-repeat;
  background-size: 100% 100%;
}
</style>

<style lang="less" scoped>
@deep: ~'>>>'; //深度选择器

@{deep}.ivu-carousel {
  height: 100% !important;
  width: 100% !important;
}

@{deep}.ivu-carousel-list {
  height: 100% !important;
}

@{deep}.ivu-carousel-track {
  height: 100% !important;
}

@{deep}.ivu-carousel-arrow {
  background-color: #2851a2 !important;
}

@{deep}.ivu-carousel-arrow :hover {
  background-color: #2851a2 !important;
}

@{deep}.ivu-carousel-item {
  height: 100% !important;
}

.homepage {
  position: relative;

  .cementDiv {
    position: absolute;
    color: #ffde76;
    top: -0.15rem;
    left: 0.1rem;
    font-weight: bold;
    font-size: 0.12rem;
  }

  .warnDiv {
    position: absolute;
    color: #ea4808;
    top: -0.15rem;
    right: 0.1rem;
    font-weight: bold;
    font-size: 0.12rem;
  }

  .liquidWarnRoad {
    color: #fced32;
  }
}
</style>
