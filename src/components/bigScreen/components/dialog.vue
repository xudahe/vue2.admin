<template>
  <div v-show="show" class="xa-popup dialog">
    <div class="layer"></div>
    <div ref="popup" class="popup">
      <div ref="title" :class="title.className || 'xa-bg-eee'" class="title">
        <div class="name">{{ title.text || title }}</div>
        <div size="small" @click="close" class="close"></div>
        <div icon="android-done" circle size="small" @click="changemax(false)" class="close closemin" style="right:35px" v-show="bodyshow"></div>
        <div icon="android-done" circle size="small" @click="changemax(true)" class="close closemax" style="right:35px" v-show="!bodyshow"></div>
      </div>
      <div ref="main" class="main" v-show="bodyshow">
        <slot></slot>
      </div>
      <div v-show="buttons.length" class="buttons">
        <div v-for="btn in buttons" @click="setEvent(btn)" :class="btn.className" class="button" :key="btn.text">{{ btn.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>

var drag = (dragBox, moveBox = dragBox) => {
  var mapview = document.getElementById("appMenu1");
  dragBox.onmousedown = e => {
    var disX = e.clientX - moveBox.offsetLeft + mapview.offsetLeft;
    var disY = e.clientY - moveBox.offsetTop + mapview.offsetTop;
    document.onmousemove = e => {
      e.preventDefault();
      var l = e.clientX - disX;
      var t = e.clientY - disY;

      var x = mapview.clientWidth - moveBox.offsetWidth;
      var y = mapview.clientHeight - moveBox.offsetHeight;
      l = l < 0 ? 0 : l > x ? x : l;
      t = t < 0 ? 0 : t > y ? y : t;
      moveBox.style.left = l + mapview.offsetLeft + "px";
      moveBox.style.top = t + mapview.offsetTop + "px";
      return false;
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
      return false;
    };
    return false;
  };
  var x = mapview.clientWidth - moveBox.offsetWidth + mapview.offsetLeft;
  var y = mapview.offsetTop;
  moveBox.style.left = x + "px";
  moveBox.style.top = y + "px";
};
export default {
  data() {
    return {
      isshow: false
    };
  },
  methods: {
    // ????????????????????????
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

    retresizeNew() {
      let _this = this;
      this.$nextTick(() => {
        _this.$refs.popup.style.left = "13.5rem";
        _this.$refs.popup.style.top = "1.0rem";
      });
    },

    setEvent(btn) {
      this.$emit(btn.clickEvent);
      this.$emit("onbtnclick", btn);
    },
    close() {
      this.$emit("input", false);
      if (this.$parent.videourl) {
        this.$parent.videourl = "";
      }
    },
    changemax(val) {
      this.$parent.dialog.bodyshow = val;
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
.name {
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
  /* height: 290px; */
  /* background: #fff; */
  background-color: #045a7a !important;
  z-index: 1001;
  position: fixed;
  left: 15%;
  top: 15%;
  box-shadow: 0 0 10px #888;
  border-radius: 5px;
  /* max-width: 520px;  */
  /* overflow: hidden; */
}

.xa-popup .popup > .title {
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 12px;
  cursor: move;
  position: relative;
  background: #0c7ba3;
}

.xa-popup .popup > .title > .close {
  height: 35px;
  width: 35px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  font-size: 30px;
}

.xa-popup .popup > .title > .close:after {
  content: "??";
  display: block;
}

.xa-popup .popup > .title > .closemin:after {
  content: "-";
  display: block;
  line-height: 30px;
}

.xa-popup .popup > .title > .closemax:after {
  content: "???";
  display: block;
  line-height: 30px;
}

.xa-popup .popup > .title > .close:hover {
  /* background: rgba(255, 255, 255, 0.1); */
  /* background-color: rgba(23, 75, 160, 0.7); */
  background-color: rgba(0, 144, 146, 0.85) !important;
}

.xa-popup .popup > .main {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 600px;
  min-height: 80px;
}

.xa-popup .popup > .buttons {
  display: flex;
  justify-content: center;
  padding: 10px 10px;
  box-shadow: 0 0 6px #ccc;
}

.xa-popup .popup > .buttons .button {
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

/* theme??? */
.xa-bg-eee {
  background: #eee;
  color: #333;
}

.xa-bg-red,
.xa-bg-red-click {
  background-color: #f33a3a;
  color: white;
}

.xa-bg-orange,
.xa-bg-orange-click {
  background-color: #fa9e3b;
  color: white;
}

.xa-bg-yellow,
.xa-bg-yellow-click {
  background-color: #fff600;
  color: white;
}

.xa-bg-green,
.xa-bg-green-click {
  background-color: #009000;
  color: white;
}

.xa-bg-blue,
.xa-bg-blue-click {
  /* background: linear-gradient(white, #f4f4f4); */
  /* color: #333; */
  background: transparent;
  color: #fff;
  /* border-bottom: 2px #e4e4e4 solid; */
  border-bottom: 1px #0f7499 solid;
}

.xa-bg-gray,
.xa-bg-gray-click {
  background-color: #bcbcbc;
}

.xa-bg-white,
.xa-bg-white-click {
  background-color: white;
  color: #333;
}

.xa-bg-black,
.xa-bg-black-click {
  background-color: black;
  color: white;
}

.xa-bg-red-click:hover {
  background-color: #ef4f4f;
}

.xa-bg-orange-click:hover {
  background-color: #faae4b;
}

.xa-bg-yellow-click:hover {
  background-color: #ffff00;
}

.xa-bg-green-click:hover {
  background-color: #009900;
}

.xa-bg-blue-click:hover {
  background-color: #007ae2;
}

.xa-bg-gray-click:hover {
  background-color: #bcb6bc;
}

.xa-bg-white-click:hover {
  background-color: #f2f2f2;
}

.xa-bg-black-click:hover {
  background-color: #333;
}

.xa-click:hover {
  background: #f2f2f2;
}
</style>