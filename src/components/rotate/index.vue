<!--可拖拽旋转的3D图片墙DEMO-->
<template>
  <div class="jieruwang">
    <div class='pic' id='pic' :style="{ '-webkit-transform': picLate, 'transform': picLate }">
      <img v-for="(item, idx) in imgList" :key='item + idx' :src="item.imgUrl"
        :style="{ '-webkit-transform': 'rotateY(' + idx * deg + 'deg) translateZ(300px)', 'transform': 'rotateY(' + idx * deg + 'deg) translateZ(300px)' }"
        @mousedown.prevent @mouseup.prevent @mousemove.prevent />
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jieruwang',
  components: {},
  data() {
    return {
      container_dom: null,
      imgList: [
        { imgUrl: '' },
        { imgUrl: '' },
        { imgUrl: '' },
        { imgUrl: '' },
        { imgUrl: '' },
        { imgUrl: '' },
        { imgUrl: '' },
        { imgUrl: '' },
      ],

      mouseIsDown: false,
      deg: 0,
      roY: 0,
      roX: -10,
      xN: 0,
      yN: 0,
      play: null,

      x_: 0,
      y_: 0,

    }
  },
  created() {
    this.deg = 360 / this.imgList.length; //360/imgList 和角度有关系
  },
  computed: {
    picLate() {
      // 改变css动画transform样式  值为…………角度是变量roY,roX的
      // return 'perspective(800px) rotateX(' + this.roX + 'deg) rotateY(' + this.roY + 'deg)';
      return 'perspective(800px) rotateY(' + this.roY + 'deg)';
    },
  },
  beforeDestroy() {
    this.container_dom.removeEventListener('mousedown', this.handleMouseDown.bind(this));
    this.container_dom.removeEventListener('mousemove', this.handleMouseMove.bind(this));
    this.container_dom.removeEventListener('mouseup', this.handleMouseUp.bind(this));
    this.container_dom.removeEventListener('mouseleave', this.handleMouseUp.bind(this));
    this.container_dom.removeEventListener('touchstart', this.handleMouseDown.bind(this));
    this.container_dom.removeEventListener('touchend', this.handleMouseUp.bind(this));
    this.container_dom.removeEventListener('touchcancel', this.handleMouseUp.bind(this));
    this.container_dom.removeEventListener('touchmove', this.handleMouseMove.bind(this));

  },
  mounted() {
    this.$nextTick(() => {
      // this.container_dom = document.getElementById('pic');
      this.container_dom = document.documentElement;
      this.container_dom.addEventListener('mousedown', this.handleMouseDown.bind(this));//按下
      this.container_dom.addEventListener('mousemove', this.handleMouseMove.bind(this));//移动
      this.container_dom.addEventListener('mouseup', this.handleMouseUp.bind(this)); //抬起
      this.container_dom.addEventListener('mouseleave', this.handleMouseUp.bind(this)); //只有在鼠标指针离开被选元素时，才会触发
      this.container_dom.addEventListener('touchstart', this.handleMouseDown.bind(this));
      this.container_dom.addEventListener('touchend', this.handleMouseUp.bind(this));
      this.container_dom.addEventListener('touchcancel', this.handleMouseUp.bind(this));
      this.container_dom.addEventListener('touchmove', this.handleMouseMove.bind(this));
    })
  },

  methods: {
    handleMouseDown(ev) {
      this.mouseIsDown = true;

      console.log('鼠标按下', this.mouseIsDown);

      this.x_ = ev.clientX; //获取当前鼠标相对于浏览器页面（或客户区）的  x  方向的位置 保存在变量 x_
      this.y_ = ev.clientY; //………………y方向的位置  保存在变量y_

      clearInterval(this.play); //关闭计时器(play)
    },
    handleMouseMove(ev) {
      if (!this.mouseIsDown) return;

      // console.log('鼠标移动', this.mouseIsDown);

      var x = ev.clientX; //获取当前鼠标相对于浏览器页面（或客户区）的  x  方向的位置    保存在变量 x
      var y = ev.clientY; //………………y方向的位置   保存在变量y

      this.xN = x - this.x_; //计算鼠标在当前元素内 相对 上次鼠标按下时的 x轴距离  并保存在变量
      this.yN = y - this.y_; //计算鼠标在当前元素内 相对 上次鼠标按下时的 y轴距离  并保存在变量

      this.roY += this.xN * 0.2; //按照比例换算  并在变量基础上增加
      this.roX -= this.yN * 0.1; //按照比例换算  并在变量基础上增加

      this.x_ = ev.clientX; //并将鼠标按下的位置设置成当前移动到的位置
      this.y_ = ev.clientY; //并将鼠标按下的位置设置成当前移动到的位置
    },
    handleMouseUp(ev) {
      this.mouseIsDown = false;

      console.log('鼠标松开', this.mouseIsDown);

      let _this = this;

      // 移除 container_dom 元素的 mousemove（鼠标在当前元素内移动的事件）
      _this.container_dom.removeEventListener('mousemove', this.handleMouseMove.bind(this));

      if (!this.$isNull(_this.play)) {
        clearInterval(_this.play);
      }
      //开始周期性计时器，每30毫秒触发一次
      _this.play = setInterval(function () {

        _this.xN *= 0.95; //按照比例换算 
        _this.yN *= 0.95 //按照比例换算 

        if (Math.abs(_this.xN) < 1 && Math.abs(_this.yN) < 1) {
          //判断  (xN的绝对值<= 1)而且 yN的绝对值也要<= 1)的时候就执行下面的语句
          clearInterval(_this.play);
        }

        _this.roY += _this.xN * 0.2; //按照比例换算  并在变量基础上增加
        _this.roX -= _this.yN * 0.1; //按照比例换算  并在变量基础上增加

      }, 30);
    },
  },

}
</script>
<style lang="less" scoped>
.jieruwang {
  width: 99%;
  height: 100%;
  overflow: hidden;

  .pic {
    width: 120px;
    height: 180px;
    margin: 150px auto 0;
    position: relative;

    /*transform 旋转元素*/
    transform-style: preserve-3d;
    // transform: perspective(800px) rotateX(-10deg) rotateY(0deg);
  }

  .pic img {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #fff;

    /*倒影的设置*/
    -webkit-box-reflect: below 10px -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%);
  }

  .pic p {
    width: 1200px;
    height: 1200px;
    background: -webkit-radial-gradient(center center, 600px 600px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0));
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: -600px;
    margin-left: -600px;
    border-radius: 600px;
    transform: rotateX(90deg);
  }
}
</style>

