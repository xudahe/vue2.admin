<style lang="less">
.draggable {
  z-index: 1000;
  top: 0px;
  right: 0px;
  position: absolute !important;
  right: 0px;
  width: 60%;
  height: 550px;
  overflow: auto;
  overflow-x: hidden;
  border-radius: 1px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 6px 0 rgba(0, 0, 0, 0.19);

  .dialog_title {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background: #f6f8f8;
    border-color: #edf1f2;
    background-image: -webkit-linear-gradient(top, #fff 0, #eee 100%);
    height: 35px;
  }

  .dialog_btn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .dialog_title font {
    font-size: 14px;
    color: #333;
    margin: 7px 0 6px 10px;
    cursor: default;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .gx-scrollbar {
    background: #ffffff;
  }

  .diaglogpanel {
    position: absolute;
    top: 35px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    overflow: auto;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.8);
    /* opacity:0.5; */
  }
}
</style>
<template>
  <div id="dragPanel" class="draggable">
    <div class="dialog_title handle">
      <font>{{ menuname }}</font>
      <div class="dialog_btn">
        <el-button size="small" circle style="margin:5px;" shape="circle" @click="resize()">
          <i class="fa fa-window-minimize" v-if="!MaxSize"></i>
          <i class="fa fa-window-maximize" v-else></i>
        </el-button>
        <el-button size="small" circle style="margin:5px;" shape="circle" @click="close()">
          <i class="fa fa-times"></i>
        </el-button>
      </div>
    </div>
    <div class="diaglogpanel gx-scrollbar">
      <component :is="this.$store.state.drag_com" :ref="this.$store.state.drag_ref"></component>
    </div>
  </div>
</template>
<script>


export default {
  components: {

  },
  data() {
    return {
      menuname: "",
      MaxSize: true,
      drag_com: "",
      drag_ref: "",
    };
  },
  methods: {
    close() {
      this.$parent.showDialog = false;

      var dragPanel = document.getElementById("dragPanel");
      dragPanel.style.top = "100px";
      dragPanel.style.width = "60%";
      dragPanel.style.height = "400px";

      this.$store.state.drag_com = "";
      this.$store.state.drag_ref = "";
    },
    resize() {
      var dragPanel = document.getElementById("dragPanel");
      let panelname = this.$store.state.drag_com;
      dragPanel.style.top = "100px";


        if (dragPanel.style.height == "35px") {
          dragPanel.style.height = "50%";
          dragPanel.style.width = "40%";
          this.MaxSize = false;
        } else {
          dragPanel.style.height = "35px";
          dragPanel.style.width = "40%";
          this.MaxSize = true;
        }
    },
    retresize() {
      var dragPanel = document.getElementById("dragPanel");
      dragPanel.style.top = "100px";
      dragPanel.style.height = "80%";
      dragPanel.style.width = "60%";
    }
  },
  mounted() {
    var elem = document.querySelector(".draggable");
    var draggie = new Draggabilly(elem, {
      containment: true,
      handle: ".handle"
    });
  }
};
</script>