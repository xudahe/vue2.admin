<template>
  <section>
    <div style="height:100%;width:100%" id="container" width tabindex="0"></div>

    <div class="search-div">
      <el-input id="tipInput" v-model="inputSearchVal" placeholder="请输入搜索名称">
      </el-input>
      <div class="geolocation">
        <el-tooltip class="item" effect="dark" content="定位到当前位置" placement="bottom">
          <el-button type="primary" icon="el-icon-location-outline" circle @click.native="Geolocation"></el-button>
        </el-tooltip>
      </div>
    </div>
  </section>
</template>

<script>
/**
 * 高德地图API: https://lbs.amap.com/api/javascript-api/summary
 * vue-amap：https://github.com/ElemeFE/vue-amap
 */

import remoteLoad from "@/api/script/remoteLoad.js";

var AMapUI = null;
var AMap = null;
var map = null;

export default {
  name: "gdmap",
  props: {},
  components: {},
  data() {
    return {
      inputSearchVal: "",
    };
  },
  async created() {
    // if (window.AMap && window.AMapUI) {
    //   this.init();
    // } else {
    //   // 如果使用了异步方式加载高德地图JSAPI，则需引入UI组件库的异步版本：
    //   await remoteLoad(`http://webapi.amap.com/maps?v=1.4.15&key=6c87cc38e8c451572bfefcf7175197a4&callback=my_init`, true);
    //   await remoteLoad(`http://webapi.amap.com/ui/1.1/main-async.js`);

    //   await this.init();
    // }
    this.init();
  },
  mounted() { },
  methods: {
    init() {
      AMapUI = window.AMapUI;
      AMap = window.AMap;

      //loadUI的路径参数为模块名中 'ui/' 之后的部分
      AMapUI.loadUI(["misc/PositionPicker"], PositionPicker => {

        // 初始化地图时，若center属性缺省，地图默认定位到用户所在城市的中心
        map = new AMap.Map("container", {
          mapStyle: 'amap://styles/normal', //设置地图的显示样式
          zoom: 12, //地图显示的缩放级别  参数zoom可设范围：PC端[3,18]、移动端[3,19]
          // pitch:75, // 地图俯仰角度，有效范围 0度- 83度，2D地图下无效 。
          // rotation: 45,
          resizeEnable: true, //监控地图容器尺寸变化
          rotateEnable: true, //地图是否可旋转，3D视图默认为true，2D视图默认false。
          viewMode: "2D", //开启视图,默认为关闭3D（3D、2D）
          buildingAnimation: true, //楼块出现是否带动画
          // center: [118.767413, 32.041544]  /初始化地图中心点
        });

        map.on('complete', function () {
          // 地图图块加载完成后触发
          console.log('当前城市adcode：' + map.getAdcode() + '  ' + '当前中心点：' + map.getCenter())
        });

        AMap.plugin(
          ["AMap.ToolBar", "AMap.Scale", "AMap.MapType", "AMap.ControlBar"],
          function () {
            // map.addControl(new AMap.ToolBar()); //工具条
            map.addControl(new AMap.Scale()); //左下角地图比例尺
            // map.addControl(new AMap.MapType()); // 卫星和标准切换，可加路况显示
            // map.addControl(new AMap.ControlBar()); // 组合了旋转、倾斜、复位、缩放在内的地图控件，在3D地图模式下会显示
          }
        );

        //单击事件
        AMap.event.addListener(map, "click", function (e) {
          console.info("click", e);
        });
        //双击事件
        // AMap.event.addListener(map, "dblclick", function(e) {
        //   console.info("dblclick", e);
        // });

        this.PlaceSearch();

        let positionPicker = new PositionPicker({
          mode: "dragMap", //设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
          map: map, //依赖地图对象
          iconStyle: {
            // 自定义外观
            url: "http://webapi.amap.com/ui/1.0/assets/position-picker2.png",
            ancher: [24, 40],
            size: [48, 48]
          }
        });
        positionPicker.on("success", function (result) {
          console.log(result);
        });
        positionPicker.on("fail", function (result) { });
        // positionPicker.start(); //显示拖拽图标
      });
    },
    PlaceSearch() {
      let _this = this;
      AMap.plugin(["AMap.Autocomplete", "AMap.PlaceSearch"], () => {
        let autoOptions = {
          output: "show",
          input: "tipInput" // 输入框ID
        };
        let autoComplete = new AMap.Autocomplete(autoOptions);

        AMap.event.addListener(autoComplete, "select", data => {
          if (data.poi.location != undefined) {
            map.setCenter(data.poi.location); //定位到中心点
          }
          this.inputSearchVal = data.poi.name; // inputSearchVal为输入框v-model绑定的值

          let searchOptions = {
            map: map
          };
          let searchRes = new AMap.PlaceSearch(searchOptions);
          searchRes.search(data.poi.name, (status, info) => {
            // searchRes.render.markerList.clear(); // 这个为清除搜索结果的点，不想清除注释即可
            console.log("搜索完成打印", status, info); // searchRes为搜索的结果
          });
        });
      });
    },
    Geolocation() {
      // 从高德地图api获取浏览器当前定位
      AMap.plugin(["AMap.Geolocation"], function () {
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //  是否使用高精度定位，默认:true
          timeout: 10000, //  超过10秒后停止定位，默认：无穷大
          maximumAge: 0, // 定位结果缓存0毫秒，默认：0
          convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //  显示定位按钮，默认：true
          buttonPosition: "LB", // 定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(0, 0), //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, //  定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //  定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //  定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });

        map.addControl(geolocation);

        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", function (result) {
          console.log("定位成功信息：", result);

          AMapMarker(result)
        });
        AMap.event.addListener(geolocation, "error", function (result) {
          // console.log("定位失败错误：", result);

          //使用CitySearch插件获取当前所在城市信息
          AMap.plugin("AMap.CitySearch", function () {
            var citySearch = new AMap.CitySearch();
            citySearch.getLocalCity(function (status, result) {
              if (status === "complete" && result.info === "OK") {
                let lnglat = result.rectangle.split(";");
                let lnglat1 = lnglat[0].split(","), lnglat2 = lnglat[1].split(",");
                let lng = (parseFloat(lnglat1[0]) + parseFloat(lnglat2[0])) / 2;
                let lat = (parseFloat(lnglat1[1]) + parseFloat(lnglat2[1])) / 2;

                result.position = [lng, lat];
                AMapMarker(result)
              }
            });
          });
        });
      });

      //点标记
      function AMapMarker(result) {
        console.log(result)
        var marker1 = new AMap.Marker({
          position: result.position, // 经纬度对象，如 new AMap.LngLat(116.39, 39.9); 也可以是经纬度构成的一维数组[116.39, 39.9]
          title: '',
          offset: new AMap.Pixel(0, 0),
          icon: "", // marker的图标，可以自定义，不写默认使用高德自带的
        });
        map.add(marker1);    //将创建的点标记添加到已有的地图实例：
        // map.remove(marker1); //移除已创建的 marker

        map.setCenter(result.position); //定位到中心点
      }
    },
  },
  beforeDestroy() {
    // 销毁地图，内存释放，地图容器被清空。
    map.destroy();
  }
};
</script>
<style lang="scss" scoped>
.search-div {
  position: absolute;
  display: flex;
  align-items: center;
  left: 220px;
  top: 115px;
  width: 250px;
  height: 40px;
  box-sizing: border-box;
}

.geolocation {
  margin-left: 10px;
}


.menuItem {
  cursor: pointer;
  position: absolute;
  height: 0.35rem;
  line-height: 0.35rem;
  color: #ffffff;
  right: 0.01rem;
  border-radius: 5px 0 0px 5px;
  text-align: left;
  font-size: 0.17rem;
  padding-left: 0.2rem;

  .icon-img {
    height: 0.20rem;
    margin-right: 0.1rem;
    // top: 0.02rem;
    position: relative;
    vertical-align: middle;
  }
}
</style>
