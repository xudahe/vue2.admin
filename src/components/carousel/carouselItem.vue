<template>
  <div id="swiper" @mouseover="stopAuto" @mouseout="autoPlay">
    <div class="swiper-box" :style="{width:allCount,'-webkit-transition':transitionConfig,'-webkit-transform':slateX}" ref='swiper'>
      <carousel-item :img="imgList[imgList.length-1].img" :imgWidth="-imgWidth" v-if="loop" />
      <carousel-item v-for="(item,index)  in imgList" :key="index" :img="item.img" :imgWidth="imgWidth*index"></carousel-item>
      <carousel-item :img="imgList[0].img" :imgWidth="imgWidth*imgList.length" v-if="loop"></carousel-item>
    </div>
    <div class='swiper-font swiper-left' @click="toLeft">
      <i class="el-icon-arrow-left" />
    </div>
    <div class='swiper-font swiper-right' @click='toRight'>
      <i class="el-icon-arrow-right" />
    </div>
    <div class="swiper-dots" v-if="dots">
      <button v-for="(item,index) in imgList.length" :key="index" :class="{actives:index==dotsIndex}" @click="toDots(index)">{{item}}</button>
    </div>
  </div>
</template>

<script>
import CarouselItem from './carouselItem'
export default {
  name: 'swiper',
  props: {
    // 图片宽
    imgWidth: {
      type: Number,
      default: 600
    },
    // 图片地址
    imgList: {
      type: Array,
      default: []
    },
    // 指示器
    dots: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: Boolean,
      default: true
    },
    // 初始播放位置
    initIndex: {
      type: Number,
      default: 0
    },
    // 是否循环
    loop: {
      type: Boolean,
      default: true
    },
    // 持续时间
    duration: {
      type: Number,
      default: 1
    },
    // 自动播放
    auto: {
      type: Boolean,
      default: true
    },
    // 自动播放时间间隔
    autoTime: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      imgIndex: 0,
      durationTime: 0.2,
      dotsIndex: 0,
      autoer: null,
    }
  },
  components: {
    'CarouselItem': CarouselItem
  },
  computed: {
    allCount() {
      return (this.imgList.length * this.imgWidth) + 'px';
    },
    slateX() {
      return 'translate3d(' + (-this.imgIndex * this.imgWidth) + 'px,0,0)'
    },
    transitionConfig() {
      return 'all ' + this.durationTime + 's';
    },
  },
  methods: {
    toLeft() {
      if (this.loop) {
        this.imgIndex--;
        this.dotsIndex--;
        if (this.dotsIndex <= -1) this.dotsIndex = this.imgList.length - 1;
        if (this.imgIndex <= -2) this.loopFn('left');
      }
      else {
        if (this.imgIndex == 0) return this.dotsIndex = this.imgIndex = this.imgList.length - 1;
        this.imgIndex--;
        this.dotsIndex--;
      }
    },
    toRight() {
      if (this.loop) {
        this.imgIndex++;
        this.dotsIndex++;
        if (this.dotsIndex == this.imgList.length) this.dotsIndex = 0;
        if (this.imgIndex == this.imgList.length + 1) this.loopFn('right');
      }
      else {
        this.imgIndex++;
        this.dotsIndex++;
        if (this.imgIndex > this.imgList.length - 1) return this.dotsIndex = this.imgIndex = 0;
      }
    },
    loopFn(type) {
      const dur = this.durationTime;
      this.durationTime = 0;

      this.imgIndex = type == 'right' ? 0 : this.imgList.length - 1;

      setTimeout(() => {
        this.$nextTick(function () {
          this.durationTime = dur;

          if (type == 'right') this.imgIndex++;
          else this.imgIndex--;
        })
      }, 30)
    },
    toDots(index) {
      this.dotsIndex = this.imgIndex = index;
    },
    autoPlay() {
      if (this.auto) {
        clearInterval(this.autoer);
        this.autoer = setInterval(() => {
          this.toRight();
        }, this.autoTime)
      }
    },
    stopAuto() {
      if (this.auto) return clearInterval(this.autoer);
    }
  },
  mounted() {
  },
  created() {
    this.imgIndex = this.dotsIndex = this.initIndex;

    this.durationTime = this.duration;

    if (this.auto) this.autoPlay();
  },
  destroyed() {
    clearInterval(this.autoer)
  },
  beforeDestroy() {
    clearInterval(this.autoer);
  },

}
</script>

<style lang="less">
#swiper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  background: #fff;

  .swiper-font {
    position: absolute;
    top: 50%;
    display: inline-block;
    transform: translateY(-50%);
    background: transparent;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
  }
  .swiper-font:hover {
    background: rgba(51, 50, 50, 0.5);
  }
  .swiper-left {
    left: 0;
    padding: 5px 6px 5px 5px;
    left: 2px;
  }
  .swiper-right {
    right: 0;
    padding: 5px 5px 5px 6px;
    right: 2px;
  }
  .swiper-dots {
    position: absolute;
    bottom: 20px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }
  .swiper-dots button {
    width: 20px;
    height: 20px;
    background: rgba(127, 124, 124, 0.5);
    display: inline-block;
    margin: 0 10px;
    border-radius: 50%;
    color: #000;
    font-weight: normal;
    border: none;
    outline: none;
    transition: all 0.2s;
    cursor: pointer;
  }
  .swiper-dots button:hover,
  .swiper-dots button.actives {
    background: rgba(191, 205, 218, 0.8);
    color: #fff;
  }
}
</style>
