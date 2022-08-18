<template>
  <div style="height:100%;width:100%;" class="test3 bgActive collapse simple_page">
    <div style="padding: 0.05rem;height: 100%;">

      <div class="mulist" style="padding-bottom: 0.05rem;">
        <template v-for="(item, key, index) in monitypes">
          <div :key='index' :class="currentmtype == key ? 'selectedwaters' : 'unselectedwaters'"
            @click='selecttype(key, item)'>
            <a :class="currentmtype == key ? 'selectedA' : 'selectedB'" style="display: block;">{{ item.name }}</a>
          </div>
        </template>
      </div>

      <div style="overflow: auto;height: calc(100% - 0.65rem);" class="borderdiv">
        <div :class="index == selectId ? 'bgActiveT' : 'bgActiveF bgActive'"
          style="padding:0.05rem;margin-bottom: 0.05rem;cursor:pointer;position: relative;" @click="goto(item, index)"
          v-for="(item, index) in tableList" :key="index" :id="index">
          <div style="display: inline-block;width:100%; height: 0.2rem;">
            <div class="row at-row no-gutter" style="width: 32px;float: left;position: relative;">
              <div class="circle" />
              <label
                style="font-size: 0.12rem;position: absolute; top:0%;left:20%; color:white; white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
                v-if="index + 1 == 10">{{ index + 1 }}</label>
              <label
                style="font-size: 0.12rem;position: absolute; top:0%;left: 32%; color:white; white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
                v-else>{{ index + 1 }}</label>
            </div>
            <label
              style="font-family: '微软雅黑';float: left; font-size: 0.12rem;color: #fff;font-weight: bolder;">{{ item.title }}</label>
            <i class="icon icon-map-pin" style="float:right;color: #2d8cf0;"></i>
            <Button :disabled="isdisabled1" style="margin-left:10px;" type="info" @click="start">播 放</Button>
            <Button style="margin-left:10px;" type="info" @click="pause">{{ postiontext }}</Button>
            <Button style="margin-left:10px;" type="info" @click="stop">清 除</Button>
          </div>
          <div style="float: left;cursor: pointer;">
            <img :src='require("@/assets/static/img/暂无图片.png")' v-viewer style="width: 0.5rem;height: 0.55rem;" />
          </div>
          <div style="display: inline-block;cursor: pointer;width: calc(100% - 0.7rem);padding-left: 0.05rem;">
            <Row type="flex" align="middle" style="height: 100%;">
              <Col span="24">
              <span class="resultLable">字段名称：</span>
              <span :title="item.title" class="rsultValue">{{ item.title }}</span>
              </Col>
              <Col span="24">
              <span class="resultLable">字段名称：</span>
              <span :title="item.title" class="rsultValue">{{ item.title }}</span>
              </Col>
              <Col span="24">
              <span class="resultLable">字段名称：</span>
              <span :title="item.title" class="rsultValue">{{ item.title }}</span>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div class="row at-row flex-end" style="padding-top: 0.1rem;">
        <Page simple show-total :current="page.current" :total="page.total" @on-change="changePage" size="small"
          style="padding-right: 0.1rem;float: right;"></Page>
        <span style="color:#fff;font-size: 0.12rem;padding-left: 0.1rem;">共{{ page.total }}条</span>
      </div>
    </div>

    <div class="imagesdmg" v-viewer="{ movable: false }" style="display:none;">
      <img v-for="src in images" :src="src" :key="src">
    </div>

  </div>
</template>

<script>
import esriLoader from "esri-loader";
import bus from "../../../eventBus.js";
import { MapControl } from "../../arcgis_map/js/MapControl.js";

export default {
  components: {

  },
  data() {
    return {
      currentmtype: '',
      monitypes: [
        {
          name: "流量",
          datalist: [],
        },
        {
          name: "水表",
          datalist: [],
        },
        {
          name: "液位",
          datalist: [],
        },
        {
          name: "压力",
          datalist: [],
        },
      ],
      page: {
        pageSize: 10, //每页记录数
        current: 1, //当前页码
        total: 0,
        pageList: [
          { title: "某某1" },
          { title: "某某2" },
          { title: "某某3" },
          { title: "某某4" },
          { title: "某某5" },
          { title: "某某6" },
          { title: "某某7" },
        ],
      },
      selectId: -1, //已选择的编号

      titlename: '缩略图',
      tableList: [],

      images: [],
      postiontext: "暂 停",
      postionpause: false,
      isdisabled1: false,
      isdisabled2: false,
      isdisabled3: false,

    };
  },
  methods: {
    selecttype(indx, item) {
      this.currentmtype = indx; //tab页样式

      this.list = item.datalist;
      this.changePage(1);
    },
    changePage(index) {
      this.page.current = index;
      this.page.total = this.page.pageList.length;

      var _start = (index - 1) * this.page.pageSize;
      var _end = index * this.page.pageSize;
      this.tableList = this.page.pageList.slice(_start, _end);
    },
    goto(item, index) {

    },
    start() {
      let _self = this;

      MapControl.jieduan = 0;
      MapControl.points = []
      MapControl.pointsData = []

      MapControl.carSymbol = new esri.symbol.PictureMarkerSymbol(
        require('@/assets/static/img/map/gps.png'), 24, 24
      );

      let gjdata = [
        {
          "x": "118.732698",
          "y": "32.027327",
          "photo": "",
          "video": "里圩河_20201113.mp4",
          "v_time": "00:00",
          "shape": "POINT ( 118.732698 32.027327)"
        },
        {
          "x": "118.733698",
          "y": "32.027327",
          "photo": "DJI_0001_LWH_20201113.JPG",
          "video": "里圩河_20201113.mp4",
          "v_time": "01:30",
          "shape": "POINT ( 118.733698 32.027327)"
        },
        {
          "x": "118.736698",
          "y": "32.027327",
          "photo": "",
          "video": "里圩河_20201113.mp4",
          "v_time": "03:12",
          "shape": "POINT ( 118.736698 32.027327)"
        },
        {
          "x": "118.734698",
          "y": "32.027327",
          "photo": "",
          "video": "里圩河_20201113.mp4",
          "v_time": "06:05",
          "shape": "POINT ( 118.734698 32.027327)"
        },
        {
          "x": "118.731698",
          "y": "32.027327",
          "photo": "",
          "video": "里圩河_20201113.mp4",
          "v_time": "08:05",
          "shape": "POINT ( 118.731698 32.027327)"
        },
      ]

      MapControl.points = []
      for (let j = 0; j < gjdata.length; j++) {
        let geo = MapControl.WktToAgs(gjdata[j].shape);
        var graphic = new esri.Graphic(geo, null);
        graphic.setAttributes({
          photo: gjdata[j].photo,
          timestr: gjdata[j].v_time
        });
        MapControl.points.push(graphic);
      }
      MapControl.pointsData.push(MapControl.points);

      var gralyr4 = MapControl.graphicLayers["gralyr4"];
      gralyr4.onClick = function (val) {
        let value = val.graphic.attributes;
        if (value.attributes != undefined && value.attributes["photo"] != undefined && value.attributes["photo"] != '') {
          //显示图片
          _self.images = [];
          _self.images.push("http://58.213.48.106/wrjsp/%E7%85%A7%E7%89%87/" + value.attributes["photo"])

          const viewer = document.querySelector('.imagesdmg').$viewer
          viewer.show()
        }
      }

      if (MapControl.points.length > 0) {
        this.isdisabled1 = true;
        MapControl.showLine2();
        MapControl.Start2();
      }
    },
    pause() {
      if (!this.postionpause) {
        this.postionpause = true;
        this.postiontext = '继 续'
        MapControl.Pause(true);
        this.isdisabled1 = true;
      } else {
        this.postionpause = false;
        this.postiontext = '暂 停';
        MapControl.Pause(false);
        this.isdisabled1 = true;
      }
    },
    stop() {
      MapControl.setMapClear();
      MapControl.Stop2();
      MapControl.Pause(true);
      this.isdisabled1 = false;
    },

  },
  mounted() {
    var _this = this;
    this.changePage(1);

  },
  beforeDestroy() {
    MapControl.Stop2();
    MapControl.setMapClear();
  },
  created() {
  }
};
</script>

<style lang="less">
.test3 {
  .mulist a {
    text-align: center;
    font-size: 0.12rem;
    box-sizing: border-box;
    display: inline-block;
    white-space: nowrap;
    height: 0.25rem;
    line-height: 0.25rem;
    color: #0394fa;
  }

  .mulist .selectedA {
    color: #fff !important;
    background: none;
    font-size: 0.14rem;
  }

  .mulist .selectedB {
    color: #42c823 !important;
    background: none;
    font-size: 0.14rem;
  }

  .mulist .selectedwaters {
    color: #fff;
    width: 0.5rem;
    display: inline-block;
    cursor: pointer;
    background-image: url(../../../assets/static/img/newhome/icon/中-选中小.png);
    background-size: 100% 100%;
  }

  .mulist .unselectedwaters {
    display: inline-block;
    width: 0.5rem;
    cursor: pointer;
    background-image: none;
  }

  .circle {
    margin-left: 5px;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    background: red;
    vertical-align: bottom;
  }

  .resultLable {
    font-size: 0.12rem;
    color: rgba(255, 255, 255, 0.5);
    display: block;
    width: 0.6rem;
    overflow: hidden;
    white-space: nowrap;
    float: left;
    text-align: left;
    padding-left: 0.05rem;
  }

  .rsultValue {
    font-size: 0.12rem;
    color: #fff;
    margin-left: 5px;
    display: block;
    float: left;
    text-align: left;

    width: 0.8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
