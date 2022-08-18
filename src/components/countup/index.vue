<!--
  target = 用于计数的 html 元素、input、svg 文本元素或 DOM 元素引用的 id
  startVal = 开始值
  endVal = 结束值
  decimals = （可选）数字中的小数位数，默认为0
  duration = （可选）动画持续时间（以秒为单位），默认为2
  options = （可选，请参阅demo）

切换暂停/恢复： numAnim.pauseResume();
更新结束值和动画：var someValue = 1337; numAnim.update(someValue);
{
    大数字动画
    对于较大的数字，由于 CountUp 持续时间较长，动画似乎会突然停止。解决方案是从 endVal 中减去100，
    然后使用回调来调用 update 方法，
    该方法以相同的持续时间完成动画，差异仅为100，以生成动画:
    var endVal = 9645.72;
    var numAnim = new CountUp("targetElem", 0, endVal - 100, duration/2);
    numAnim.start(function() {
        numAnim.update(endVal);
    });
}

-->
<template>
  <div :id="target"></div>
</template>

<script>

import { CountUp } from 'countup.js';
export default {
  name: "countup",
  watch: {
    startVal: {
      handler(newval, oldval) {
        let _this = this;
        // if(newval == oldval) return
        if (_this.countUp) _this.countUp.update(_this.initstr(newval))
      },
      deep: true
    },
    endVal: {
      handler(newval, oldval) {
        let _this = this;
        if (_this.countUp) _this.countUp.update(_this.initstr(newval))
      },
      deep: true
    },
  },
  props: {
    //div的id id可以自定义class属性
    //必填
    target: {
      default: 'dwiCountUp'
    },
    //开始的数字
    //必填
    startval: {
      default: 0
    },
    //结束的数字
    //必填
    endval: {
      default: 10
    },
    //持续时间。最少是2 单位：秒
    duration: {
      default: 2
    },
    // 默认3位小数
    decimalplaces: {
      default: 2,
    },
    //数字后的文字
    suffix: {
      default: ''
    },
    //数字后的文字
    prefix: {
      default: ''
    }
  },
  components: {

  },
  data() {
    return {
      delay: 100,
      countUp: null
    }
  },
  methods: {
    initstr(val) {
      return parseFloat(val)
    },
    initcoun() {
      let _this = this;
      let endVal2 = _this.initstr(_this.endval);
      let duration2 = _this.initstr(_this.duration);
      let startVal2 = _this.initstr(_this.startval);
      let decimalPlaces2 = _this.initstr(_this.decimalplaces);
      _this.countUp = new CountUp(_this.target, endVal2, {
        startVal: startVal2,
        duration: duration2,
        decimalPlaces: decimalPlaces2,
        separator: ',', //默认分隔符
        suffix: _this.suffix,
        prefix: _this.prefix,
        // startVal?: number, // 从 (0) 开始的数字
        // decimalPlaces?: number, // 小数位数 (0)
        // duration?: number, // 以秒为单位的动画持续时间 (2)
        // useGrouping?: boolean, // 示例：1,000 对 1000（真）
        // useEasing?: boolean, // 示例：1,000 对 1000（真）...
        // smartEasingThreshold?: number,; //如果 useEasing (999)，则平滑缓动高于此的大数
        // smartEasingAmount?: number, // 如果 useEasing (999)，则平滑缓动高于此的大数...
        // separator?: string, // 分组分隔符 (',')
        // decimal?: string, // 十进制 ('.')
        // prefix?: string,// 结果前面的文本
        // suffix?: string, // 文本附加到结果
        // numerals?: string[], // 数字字形替换
      })
      if (!_this.countUp.error) {
        _this.countUp.start();
      } else {
        console.error(_this.countUp.error);
      }
    }
  },
  mounted() {
    let _this = this;
    this.$nextTick(() => {
      _this.initcoun();
    })
    // setTimeout(()=>{
    //   _this.initcoun();
    // },500)
  }
}
</script>

<style lang="less" scoped>
.iCountUp {
  position: absolute;
  top: 3rem;
  right: 16rem;
  font-size: 0.5rem;
}
</style>