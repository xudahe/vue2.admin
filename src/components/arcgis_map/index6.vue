<style lang="less">
</style>

<template>
  <div style="height:100%;width:100%;">
    <div :id='mapId' class="newmapbox" style="height: 100%;background-color: #ffffff;position: relative;">
      <component :is="current_com" :ref="current_ref"></component>
    </div>
  </div>
</template>

<script>
import esriLoader from "esri-loader";
import { MapControl } from "../arcgis_map/js/MapControl";
import mapconfig from "../arcgis_map/js/mapconfig";
import { VectorConfig } from "../arcgis_map/js/VectorConfig.js";

var newmap, navToolbar;
var hdmLayer, sectionmap, zdmLayer, identifyHandler;
export default {
  components: {
  },
  name: 'baseMap',
  props: {
    mapId: {
      type: String,
      default: 'newmapbox'
    },
    mapType: {
      type: String,
      default: 'tiled'
    },
  },
  computed: {

  },
  data() {
    return {
      visibLayers1: new Array(),
      currentscale: {
        mapPoint: {
          x: null,
          y: null
        },
        scale: null
      },

      current_com: "",
      current_ref: "",
    }
  },
  watch: {
    currentscale: {
      handler: function (val, oldVal) {
        var scale = parseInt(val.scale)
        if (val.mapPoint.x != undefined && val.mapPoint.y != undefined && val.mapPoint != undefined) {
          if (scale % 2) {
            scale = scale + 1
          }
        }
        // this.$store.state.user.scale = scale;
      },
      deep: true,
    },
  },
  beforeDestroy() {
    MapControl.setMapClear();
  },
  methods: {
    //创建地图
    createMap() {
      let _this = this
      const options = {
        url: 'http://58.213.48.106/arcgis_js_api/library/3.27/3.27/init.js', //ArcGIS js API地址
      };
      // esriLoader.loadCss(mapconfig.esricss);
      // esriLoader.loadCss(mapconfig.clarocss);
      esriLoader.loadModules(
        [
          "esri/request",
          "dojo/_base/event",
          "dojo/_base/connect",
          "dojo/parser",
          "dojo/on",
          "dojo/_base/Color",
          'esri/map',
          'esri/geometry/Extent',
          'esri/geometry/scaleUtils',
          'esri/layers/ArcGISTiledMapServiceLayer',
          'esri/layers/ArcGISDynamicMapServiceLayer',
          "esri/SpatialReference",
          "esri/layers/VectorTileLayer",
          'esri/tasks/GeometryService',
          'esri/tasks/IdentifyTask',
          'esri/tasks/IdentifyParameters',
          'esri/toolbars/draw',
          'esri/toolbars/navigation',
          'esri/toolbars/edit',
          'dojo/dom-construct',
          'dojo/dom',
          'esri/config',
          "dojo/fx",
          'extend/TDTLayer',
          'extend/TDTAnnoLayer',
          'dojo/domReady!',

        ], options).then(([
          esriRequest,
          event,
          connect,
          parser,
          on,
          Color,
          Map,
          Extent,
          scaleUtils,
          ArcGISTiledMapServiceLayer,
          ArcGISDynamicMapServiceLayer,
          SpatialReference,
          VectorTileLayer,
          GeometryService,
          IdentifyTask,
          IdentifyParameters,
          Draw,
          Navigation,
          Edit,
          domConstruct,
          dom,
          esriConfig,
          Fx,
          TDTLayer,
          TDTAnnoLayer,
        ]) => {
          MapControl.popupinfo = new esri.dijit.Popup(null, document.createElement("div"));
          newmap = new Map(_this.mapId, {
            logo: false,
            slider: false,
            infoWindow: MapControl.popupinfo,
            SpatialReference: new SpatialReference(4326),
            // showLabels: true
            center: [118.567173, 32.244685],
            zoom: 2,
            fadeOnZoom: true
          })

          var loaclCORS_Host = mapconfig.Vector_loaclCORS_Host;
          if (esriConfig.defaults.io.corsEnabledServers.indexOf(loaclCORS_Host) < 0) {
            esriConfig.defaults.io.corsEnabledServers.push(loaclCORS_Host);
          }

          esriRequest.setRequestPreCallback(myCallbackFunction);

          var url = mapconfig.Vector_url;
          var njtoken = mapconfig.Vector_njtoken;
          let wmtsLayer = new VectorTileLayer(url)
          wmtsLayer.setStyle(VectorConfig.layerstyle);
          wmtsLayer.id = mapconfig.Vector_url
          newmap.addLayer(wmtsLayer)
          var url1 = mapconfig.Vector_urlZJ;
          let wmtsLayerZJ = new VectorTileLayer(url1)
          wmtsLayerZJ.id = mapconfig.Vector_urlZJ
          newmap.addLayer(wmtsLayerZJ)
          function myCallbackFunction(ioArgs) {
            ioArgs.content = ioArgs.content || {};
            ioArgs.content.njtoken = njtoken;
            return ioArgs;
          }

          //   const geometryservice = new esri.tasks.GeometryService(
          //     mapconfig.GeometryService + '?token=' + _this.$store.getters.servertoken
          //   )

          let navToolbar = new esri.toolbars.Navigation(newmap)
          let drawToolbar = new esri.toolbars.Draw(newmap)
          let editToolbar = new esri.toolbars.Edit(newmap)

          var graphicLayer1 = new esri.layers.GraphicsLayer()
          graphicLayer1.id = 'graphicLayer1'
          newmap.addLayer(graphicLayer1)
          MapControl.graphicLayers['gralyr1'] = graphicLayer1

          var graphicLayer2 = new esri.layers.GraphicsLayer()
          graphicLayer2.id = 'graphicLayer2'
          newmap.addLayer(graphicLayer2)
          MapControl.graphicLayers['gralyr2'] = graphicLayer2

          var graphicLayer3 = new esri.layers.GraphicsLayer()
          graphicLayer3.id = 'graphicLayer3'
          newmap.addLayer(graphicLayer3)
          MapControl.graphicLayers['gralyr3'] = graphicLayer3

          var graphicLayer4 = new esri.layers.GraphicsLayer();
          graphicLayer4.id = "graphicLayer4";
          newmap.addLayer(graphicLayer4);
          MapControl.graphicLayers["gralyr4"] = graphicLayer4;

          newmap.on("mouse-move", function (event) {
            event.scale = scaleUtils.getScale(newmap);
            _this.currentscale.mapPoint.x = event.mapPoint.x;
            _this.currentscale.mapPoint.y = event.mapPoint.y;
          });
          newmap.on("zoom-end", function (event) {
            event.scale = scaleUtils.getScale(newmap);
            _this.currentscale.scale = event.scale
          });

          MapControl.mapId = _this.mapId;
          MapControl.map[_this.mapId] = newmap
          MapControl.isLoad[_this.mapId] = true
          MapControl.navToolbar[_this.mapId] = navToolbar
          MapControl.drawToolbar[_this.mapId] = drawToolbar
          MapControl.editToolbar[_this.mapId] = editToolbar
          MapControl.GeometryService = geometryservice

          newmap.on('load', function (event) {
            _this.$store.state.user.mapload = true;
            let mapExtent = new esri.geometry.Extent(
              118.777,
              32.056,
              118.849,
              32.091,
              newmap.spatialReference
            );
            newmap.setExtent(mapExtent);
          });
        })

    },
    clear() { },
    // =================================工具条组件方法================================================
    showCompt(name, type) {
      if (name != 'mapoutput01fwzt') { MapControl.setMapClear(); }

      if (MapControl.identifyHandler != undefined) {
        MapControl.identifyHandler.remove();
      }
      this.current_com = this.current_ref = name;
      setTimeout(() => {
        this.$refs[name].initial(type)
      }, 300);
    },
    clearCompt() {
      this.current_com = this.current_ref = "";
    },
  },

  mounted() {
    var _this = this;
    _this.clearCompt();
    _this.createMap()

  },

};

</script>