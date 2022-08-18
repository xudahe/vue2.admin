<template>
  <div id="dutyMap" class="dutyRain">

  </div>
</template>

<script>

//参考地址： https://m.weatherol.com.cn/pop.html?lang=&ivsion=

import esriLoader from 'esri-loader'
import {
  aes
} from "@/assets/static/js/aes.js"

export default {
  components: {},
  data() {
    return {
      map: null,
      radaImageLayer: null,
      timers: null
    };
  },
  computed: {},
  methods: {
    createMap() {
      var _this = this;
      const options = {
        url: mapconfig.jsapi
      };
      esriLoader.loadModules(
        [
          "esri/request",
          'esri/map',
          'esri/tasks/GeometryService',
          "esri/geometry/Extent",
          "esri/SpatialReference",
          "tdtlib/TDTLayer",
          "tdtlib/TDTAnnoLayer",
          'esri/layers/ArcGISTiledMapServiceLayer',
          'esri/layers/ArcGISDynamicMapServiceLayer',
          'esri/toolbars/draw',
          'esri/toolbars/navigation',
          'esri/toolbars/edit',
        ], options).then(
          ([
            esriRequest,
            Map,
            GeometryService,
            Extent,
            SpatialReference,
            TDTLayer,
            TDTAnnoLayer,
            ArcGISTiledMapServiceLayer,
            ArcGISDynamicMapServiceLayer,
          ]) => {
            var map = new Map('dutyMap', {
              logo: false,
              slider: false,
              SpatialReference: new SpatialReference(4326),
              // zoom: 2,
              // maxZoom: 20, //最大缩放级别
              // minZoom: 9, //最小缩放级别
              fadeOnZoom: true
            })
            var basemap = new TDTLayer();
            map.addLayer(basemap);
            var annolayer = new TDTAnnoLayer();
            map.addLayer(annolayer);
            _this.radaImageLayer = new esri.layers.MapImageLayer({
              id: 'radaImageLayer',
              opacity: 0.7
            })
            map.addLayer(_this.radaImageLayer);
            this.map = map;
            map.on('load', initFunctionality())
            function initFunctionality(event) {
              let mapExtent = new esri.geometry.Extent(
                108.777,
                25.056,
                125.849,
                36.091,
                map.spatialReference
              );
              map.setExtent(mapExtent);
              _this.showImage();
            }

          }
        )

    },
    showImage() {
      var _this = this;
      var str = this.Encrypt('https://m.weatherol.com.cn/getrader?&type=single&ll=118.73145,32.00335')
      str = encodeURI(str)
      this.$http({
        url: 'http://180.101.236.130:81/SWKPServer/sampleSelect.ashx?action=getDataForWeb',
        method: 'post'
      }, {
        weburlstr: str
      }).then(
        res => {
          if (res.data.success == true) {
            let source = JSON.parse(res.data.source);
            console.log(source)
            var radalist = source.radar_img;
            addImglayers(0);

            function addImglayers(number) {
              if (_this.radaImageLayer) {
                _this.radaImageLayer.removeAllImages()
              }
              const image = new esri.layers.MapImage({
                extent: {
                  xmin: radalist[number][2][1],
                  xmax: radalist[number][2][3],
                  ymin: radalist[number][2][0],
                  ymax: radalist[number][2][2]
                },
                href: radalist[number][0]
              })
              _this.radaImageLayer.addImage(image)

              number++;
              if (number == radalist.length) {
                number = 0;
              }
              _this.timers = setTimeout(() => {
                clearTimeout(_this.timers);
                _this.timers = null;
                addImglayers(number);
              }, 3000)
            }


          }
        }
      );

    },
    Encrypt(val) {
      return aes.Encrypt(val)
    },
  },
  mounted() {
    this.createMap();
  },
  created() {

  },
  beforeDestroy() {
    if (this.map) this.map.destroy();
    clearTimeout(this.timers);
    this.timers = null;
  },
};
</script>

<style lang="less">
.dutyRain {
  width: 100%;
  height: 100%;
}
</style>
