<template>
  <div v-show="show" class="xa-popup">
    <div class="layer"></div>
    <div ref="popup" class="popup">
      <div ref="title" :class="title.className || 'xa-bg-eee'" class="title">
        <div class="name">{{ title.text || title }}</div>
        <div size="small" @click="close" class="close"></div>
        <div icon="android-done" circle size="small" @click="changemax(false)" class="close closemin" style="right:35px"
          v-show="bodyshow"></div>
        <div icon="android-done" circle size="small" @click="changemax(true)" class="close closemax" style="right:35px"
          v-show="!bodyshow"></div>
      </div>
      <div ref="main" class="main" v-show="bodyshow">
        <slot></slot>
      </div>
      <div v-show="buttons.length" class="buttons">
        <div v-for="btn in buttons" @click="setEvent(btn)" :class="btn.className" class="button" :key="btn.text">{{
          btn.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>

var drag = (dragBox, moveBox = dragBox) => {
  var domview = document.getElementById("app"); //界面窗口id
  dragBox.onmousedown = e => {
    var disX = e.clientX - moveBox.offsetLeft + domview.offsetLeft;
    var disY = e.clientY - moveBox.offsetTop + domview.offsetTop;
    document.onmousemove = e => {
      e.preventDefault();
      var l = e.clientX - disX;
      var t = e.clientY - disY;

      var x = domview.clientWidth - moveBox.offsetWidth;
      var y = domview.clientHeight - moveBox.offsetHeight;
      l = l < 0 ? 0 : l > x ? x : l;
      t = t < 0 ? 0 : t > y ? y : t;
      moveBox.style.left = l + domview.offsetLeft + "px";
      moveBox.style.top = t + domview.offsetTop + "px";
      return false;
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
      return false;
    };
    return false;
  };
  var x = domview.clientWidth - moveBox.offsetWidth + domview.offsetLeft;
  var y = domview.offsetTop;
  moveBox.style.left = x + "px";
  moveBox.style.top = y + "px";
};
export default {
  name: "v-dialog",
  data() {
    return {
      isshow: false
    };
  },
  methods: {
    // 弹框适配屏幕居中
    autosize() {
      this.$nextTick(() => {
        var dom = this.$refs.popup;
        var CHeight = document.documentElement.clientHeight;
        var CWidth = document.documentElement.clientWidth;
        var PHeight = dom.offsetHeight;
        var PWidth = dom.offsetWidth;
        this.$refs.main.style.maxHeight = CHeight - 100 + "px";
        dom.style.top = "50px";
        dom.style.left = "100px";
      });
    },
    retresize() {
      this.$nextTick(() => {
        this.$refs.popup.style.left = "300px";
        this.$refs.popup.style.top = "50px";
      });
    },
    retresize_flood() {
      this.$nextTick(() => {
        this.$refs.popup.style.left = "300px";
        this.$refs.popup.style.top = "50px";
      });
    },
    setEvent(btn) {
      this.$emit(btn.clickEvent);
      this.$emit("onbtnclick", btn);
    },
    close() {
      this.$emit("input", false);
    },
    changemax(val) {
      this.bodyshow = val;
    }
  },
  props: {
    title: {
      default: ""
    },
    value: {
      type: Boolean,
      default: false
    },
    buttons: {
      type: Array,
      default() {
        return [];
      }
    },
    bodyshow: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    show() {
      return this.value;
    }
  },
  mounted() {
    var that = this;

    this.$nextTick(() => {
      drag(this.$refs.title, this.$refs.popup);
    });
  },
  created() {

  },
};
</script>

<style scoped>
.xa-popup .popup>.title>.name {
  text-align: left;
  margin-left: 10px;
  line-height: 35px;
  font-size: 0.16rem;
}

.xa-popup .layer {
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 100;
}

.xa-popup .popup {
  min-width: 300px;
  z-index: 1001;
  position: fixed;
  left: 15%;
  top: 15%;
  box-shadow: 0 0 10px #888;
  border-radius: 5px;
}

.xa-popup .popup>.title {
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 12px;
  cursor: move;
  position: relative;
}

.xa-popup .popup>.title>.close {
  height: 35px;
  width: 35px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  font-size: 30px;
}

.xa-popup .popup>.title>.close:after {
  content: "×";
  display: block;
}

.xa-popup .popup>.title>.closemin:after {
  content: "-";
  display: block;
  line-height: 30px;
}

.xa-popup .popup>.title>.closemax:after {
  content: "□";
  display: block;
  line-height: 30px;
}

.xa-popup .popup>.title>.close:hover {
  background-color: rgba(0, 120, 189, 0.85) !important;
}

.xa-popup .popup>.main {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 600px;

  content: '';
  background-color: rgba(230, 230, 230, 0.5);
  backdrop-filter: blur(5px);
}

.xa-popup .popup>.buttons {
  display: flex;
  justify-content: s center;
  padding: 10px 10px;
  box-shadow: 0 0 6px #ccc;
}

.xa-popup .popup>.buttons .button {
  flex: 1;
  max-width: 170px;
  text-align: center;
  cursor: pointer;
  height: 36px;
  line-height: 36px;
  box-shadow: 0 0 1px #ccc;
  margin: 0 10px;
  border-radius: 5px;
}

/* theme库 */
.xa-bg-eee {
  background: #eee;
  color: #333;
}

.xa-bg-red {
  background-color: #f33a3a;
  color: white;
}

.xa-bg-orange {
  background-color: #fa9e3b;
  color: white;
}

.xa-bg-yellow {
  background-color: #fff600;
  color: white;
}

.xa-bg-green {
  background-color: #009000;
  color: white;
}

.xa-bg-blue {
  background-color: #3379eb;
  color: #fff;
}

.xa-bg-gray {
  background-color: #bcbcbc;
}

.xa-bg-white {
  background-color: white;
  color: #333;
}

.xa-bg-black {
  background-color: black;
  color: white;
}
</style>