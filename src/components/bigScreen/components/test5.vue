<template>
  <div style="height:100%;width:100%;" class="test4 bgActive collapse simple_page form">
    <div style="padding: 0.05rem;height: 100%;">

      <Form :label-width="80">
        <div class="form-content">
          <Row>
            <Col span="16">
            <span>资源列表</span>
            </Col>
            <Col span="8">
            <a style="color: #495060;">十字丝</a>
            <i-switch v-model="this.$store.getters.ishowsz" @on-change="changeSwitch" size="small" style="margin-left: 10px;margin-top: -7px;"></i-switch>
            </Col>
          </Row>
          <splitLayer ref="LayerList" />
          <HR style="margin-top: 10px" />
          <div class="overlist" :style="{'max-height':maxheight+'px'}">
            <template v-for="(item,index) in items" style="border-bottom: 10px solid black;">
              <div class="divcss">
                <span style="float: left;position: relative;left: 10px;line-height: 35px;">
                  <span style="position: absolute;left: 8px;top: 1px;color: white;font-size: 12px;font-weight: bold;">{{index+1}}</span>
                  <Icon type="ios-desktop" size="25" color="#4848ce" style="line-height: 35px;"></Icon>
                </span>
                <span style="line-height: 35px;">{{item.servicename}}</span>
                <Button size="small" style="float:right;cursor:pointer;margin-top:5px" shape="circle" type="error" @click.native="removelayer(index)">
                  <Icon type="md-close"></Icon>
                </Button>
              </div>
            </template>
          </div>
          <HR style="margin-top: 10px" />
          <Row style="height: 96px;">
            <div v-show="items.length<2" style="padding: 10px;border: 1px dashed #c9cbcc;margin: 10px;width: 96px;background-color: #f2f9fb;">
              <div style="width: 74px;height: 50px;border: 2px solid #186fdc;border-radius: 5px;">
                <div style="text-align:center;width: 70px;height: 46px;float: left;">
                  <span style="line-height: 46px;color: #186fdc;">1</span>
                </div>
              </div>
            </div>
            <div v-show="items.length==2" style="padding: 10px;border: 1px dashed #c9cbcc;margin: 10px;width: 96px;background-color: #f2f9fb;">
              <div style="width: 74px;height: 50px;border: 2px solid #186fdc;border-radius: 5px;">
                <div style="text-align:center;width: 35px;height: 46px;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 46px;color: #186fdc;">1</span>
                </div>
                <div style="text-align:center;width: 35px;height: 46px;float: left;">
                  <span style="line-height: 46px;color: #186fdc;">2</span>
                </div>
              </div>
            </div>
            <div v-show="items.length==3" style="padding: 10px;border: 1px dashed #c9cbcc;margin: 10px;width: 96px;background-color: #f2f9fb;">
              <div style="width: 74px;height: 50px;border: 2px solid #186fdc;border-radius: 5px;">
                <div style="text-align:center;width: 35px;height: 46px;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 46px;color: #186fdc;">1</span>
                </div>
                <div style="text-align:center;width: 35px;height: 23px;border-bottom: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">2</span>
                </div>
                <div style="text-align:center;width: 35px;height: 23px;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">3</span>
                </div>
              </div>
            </div>
            <div v-show="items.length==4" style="padding: 10px;border: 1px dashed #c9cbcc;margin: 10px;width: 96px;background-color: #f2f9fb;">
              <div style="width: 74px;height: 50px;border: 2px solid #186fdc;border-radius: 5px;">
                <div style="text-align:center;width: 35px;height: 23px;border-bottom: 2px solid #a6c8ea;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">1</span>
                </div>
                <div style="text-align:center;width: 35px;height: 23px;border-bottom: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">2</span>
                </div>
                <div style="text-align:center;width: 35px;height: 23px;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">4</span>
                </div>
                <div style="text-align:center;width: 35px;height: 23px;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">3</span>
                </div>
              </div>
            </div>
            <div v-show="items.length==5" style="padding: 10px;border: 1px dashed #c9cbcc;margin: 10px;width: 96px;background-color: #f2f9fb;">
              <div style="width: 74px;height: 50px;border: 2px solid #186fdc;border-radius: 5px;">
                <div style="text-align:center;width: 23px;height: 46px;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 46px;color: #186fdc;">1</span>
                </div>
                <div style="text-align:center;width: 24px;height: 23px;border-bottom: 2px solid #a6c8ea;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">2</span>
                </div>
                <div style="text-align:center;width: 23px;height: 23px;border-bottom: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">3</span>
                </div>
                <div style="text-align:center;width: 24px;height: 23px;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">5</span>
                </div>
                <div style="text-align:center;width: 23px;height: 23px;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">4</span>
                </div>
              </div>
            </div>
            <div v-show="items.length==6" style="padding: 10px;border: 1px dashed #c9cbcc;margin: 10px;width: 96px;background-color: #f2f9fb;">
              <div style="width: 74px;height: 50px;border: 2px solid #186fdc;border-radius: 5px;">
                <div style="text-align:center;width: 23px;height: 23px;border-bottom: 2px solid #a6c8ea;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">1</span>
                </div>
                <div style="text-align:center;width: 23.5px;height: 23px;border-bottom: 2px solid #a6c8ea;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">2</span>
                </div>
                <div style="text-align:center;width: 23px;height: 23px;border-bottom: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">3</span>
                </div>
                <div style="text-align:center;width: 23px;height: 23px;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">6</span>
                </div>
                <div style="text-align:center;width: 23.5px;height: 23px;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">5</span>
                </div>
                <div style="text-align:center;width: 23px;height: 23px;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">4</span>
                </div>
              </div>
            </div>
            <div v-show="items.length==7" style="padding: 10px;border: 1px dashed #c9cbcc;margin: 10px;width: 96px;background-color: #f2f9fb;">
              <div style="width: 74px;height: 50px;border: 2px solid #186fdc;border-radius: 5px;">
                <div style="text-align:center;width: 24px;height: 46px;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 46px;color: #186fdc;">1</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;border-bottom: 2px solid #a6c8ea;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">2</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;border-bottom: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">3</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;border-bottom: 2px solid #a6c8ea;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">4</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;border-bottom: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">5</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">6</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">7</span>
                </div>
              </div>
            </div>
            <div v-show="items.length==8" style="padding: 10px;border: 1px dashed #c9cbcc;margin: 10px;width: 96px;background-color: #f2f9fb;">
              <div style="width: 74px;height: 50px;border: 2px solid #186fdc;border-radius: 5px;">
                <div style="text-align:center;width: 24px;height: 23px;border-bottom: 2px solid #a6c8ea;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 23px;color: #186fdc;">1</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;border-bottom: 2px solid #a6c8ea;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">2</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;border-bottom: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">3</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;border-bottom: 2px solid #a6c8ea;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">4</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;border-bottom: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">5</span>
                </div>
                <div style="text-align:center;width: 24px;height: 23px;border-right: 2px solid #a6c8ea;float: left;margin-top: -8px;">
                  <span style="line-height: 23px;color: #186fdc;">8</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">6</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">7</span>
                </div>
              </div>
            </div>
            <div v-show="items.length==9" style="padding: 10px;border: 1px dashed #c9cbcc;margin: 10px;width: 96px;background-color: #f2f9fb;">
              <div style="width: 74px;height: 50px;border: 2px solid #186fdc;border-radius: 5px;">
                <div style="text-align:center;width: 23.5px;height: 15.3px;border-bottom: 2px solid #a6c8ea;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">1</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;border-bottom: 2px solid #a6c8ea;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">2</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;border-bottom: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">3</span>
                </div>
                <div style="text-align:center;width: 23.5px;height: 15.3px;border-bottom: 2px solid #a6c8ea;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">4</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;border-bottom: 2px solid #a6c8ea;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">5</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;border-bottom: 2px solid #a6c8ea;border-bottom: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">6</span>
                </div>
                <div style="text-align:center;width: 23.5px;height: 15.3px;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">7</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;border-right: 2px solid #a6c8ea;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">8</span>
                </div>
                <div style="text-align:center;width: 23px;height: 15.3px;float: left;">
                  <span style="line-height: 15.3px;color: #186fdc;">9</span>
                </div>
              </div>
            </div>
            <span style="position: relative;top: -75px;left: 210px;font-weight: bolder;color:red;">提示：最多9个分屏</span>
            <Row style="float: right;position: relative;top: -50px;">
              <Button @click="Splitscreen" :disabled="issplit" style="margin-top: 10px;margin-left: 25px;color: #186fdc;font-weight: bolder;">开始分屏</Button>
              <Button @click="Reset" :disabled="!issplit" style="margin-top:10px;color: #186fdc;font-weight: bolder;">退出</Button>
            </Row>
          </Row>
        </div>
      </Form>

    </div>
  </div>
</template>

<script>

import bus from "../../../eventBus.js";
import { MapControl } from "../../arcgis_map/js/MapControl.js";
import splitLayer from "../../arcgis_map/split/splitLayer";

export default {
  components: {
    splitLayer
  },
  data() {
    return {
      issplit: false, //是否已经分屏
      items: [],
      rows: {
        title: "影像图",
        layername: "yxt"
      }, //单项添加

    };
  },
  methods: {
    changeSwitch(value) {
      this.$store.dispatch('ishowsz', value);
    },
    Splitscreen() {
      if (this.items.length < 2 || this.items.length > 9) {
        this.$Message.error("不能满足分屏要求");
        return;
      }
      this.issplit = true;

      let mapbox = [];
      let layeritem = {};
      for (let i = 0; i < this.items.length; i++) {
        let name = "mapbox" + i;
        layeritem[name] = [this.items[i]];
        mapbox.push(name);
      }

      this.$store.dispatch('mapitems', mapbox);
      this.$store.dispatch('mapitemsload', layeritem);
      this.$store.dispatch('mapitemslayers', this.items);
    },
    removelayer(index) {
      this.items.splice(index, 1);
    },
    addlayer(value) {
      let length = this.items.length;
      if (length == 9) {
        this.$Message.error("最多不能超过9个");
        return;
      }
      this.items.push(value);
    },
    //重置
    Reset() {
      this.issplit = false;
      this.items = [];
      this.$store.dispatch('mapitems', []);
      this.$store.dispatch('mapitemsload', {});
      this.$store.dispatch('mapitemslayers', []);
      this.$refs.LayerList.isreset = true;
      MapControl.setMapClear();
    },
  },
  mounted() {

  },
  beforeDestroy() {
    if (this.issplit) this.Reset();
  }
};
</script>

<style lang="less" scoped>
.radio {
  height: 30px;
}

.gotime {
  border: 1px solid #eee;
  // margin-top: 10px;
  padding: 5px;
  max-height: 300px;
  min-height: 100px;
  overflow: auto;
  overflow-x: hidden;
  .treeHome {
    background-color: #ffffff;
  }
}
.border {
  border: 1px solid #eee;
  // margin-top: 10px;
  padding: 5px;
  .treeHome {
    background-color: #ffffff;
  }
}
.treebox {
  border: 2px solid #eee;
  border-radius: 1px;
  transition: all 0.2s ease-in-out;
  overflow: auto;
  height: 250px !important;
}
.ivu-upload-list {
  margin-top: 0px !important;
}
.ivu-table-expanded-cell {
  padding: 0px 0px !important;
}
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.spin {
  height: 100%;
  width: 100%;
  margin: 80% auto;
}
.ivu-spin {
  padding-left: 46%;
}
.form-content {
  padding: 7px !important;
}
.group {
  border: 1px solid #eee;
  padding: 5px;
  margin-bottom: 5px;
}

.divcss {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  border: 1px dashed #2d8cf0;
  height: 35px;
  background-color: #e3eaf9;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
}
.aaa {
  position: absolute;
  border: 1px solid red;
  left: 5px;
  top: 2px;
  width: 10px;
}
.overlist {
  overflow: auto;
}
</style>