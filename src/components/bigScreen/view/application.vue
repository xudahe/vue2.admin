<!-- 布局页面 -->
<template>
  <div class="appDiv2 appMenu1">
    <!-- 弹出窗组件 -->
    <div v-if="isdialog">
      <v-dialog ref="dialog" v-model="dialog.show" :title="dialog.title" :buttons="dialog.buttons" :bodyshow="dialog.bodyshow" @input="closeDialog">
        <div class="dialogCoor" style="margin: 0.1rem;">
          <component :is="componentDialog" v-bind:detailData="showDetailDialog"></component>
        </div>
      </v-dialog>
    </div>

    <!-- 左侧菜单 -->
    <div class="appMenu push-in-right" v-show="menuScale">
      <div :key="index" v-for="(item,index) in menuData" :style="index==0 ? {margintop: '0.15rem'}:''" @click="changeMenu(item,index)" :class="[menuFlag == index ? 'menuSel' : 'menuNor','menuCont','button22']">
        <div class="menuImg">
          <img :src="menuFlag == index ? item.imgT : item.imgF" class="menuContImg" />
        </div>
        <div class="menuContText"><span :class="menuFlag==index? 'actives':''">{{item .menuname}}</span></div>
      </div>
    </div>
    <div :style="{marginLeft:menuScale ? '-0.20rem':'-0.05rem'}" style="height: 100%;;width: 0.2rem; position: relative;float: left;">
      <div :class="menuScale ? 'imgReturnT':'imgReturnF'">
        <div style="position: relative;cursor: pointer;top: 38%;height: 15%;" :title="menuScale ? '收缩':'展开'" @click="menuScale = !menuScale">
        </div>
      </div>
    </div>
    <div id="appComponts" class="appComponts" :style="{width: menuScale ? 'calc(100% - 2.20rem)':'calc(100% - 0.15rem)'}">

      <!-- 左侧列表框 -->
      <div class="appCompontsContLeft fade-in-right" :style="{width: pageWidth +'rem'}" v-if="showLeftMenu">
        <div class="appCompontsContLeftDiv">
          <div class="titleCont titleContImg">
            <div class="titleContText">{{titleListName}}</div>
            <div class="titleRight">
              <Icon class="closeIcon" type="ios-close-circle-outline" @click="detailclose('leftMenu')" />
            </div>
          </div>
          <div style="height: calc(100% - 0.4rem);">
            <component :is="componentName" v-bind:detailData="leftListData"></component>
          </div>
        </div>
      </div>

      <!-- 左侧详情框 -->
      <div class="appCompontsContLeft fade-in-right" :style="{width: pageWidth +'rem',marginLeft: showDetailLeft && showLeftMenu ? '0.05rem':'0rem'}" v-if="showDetailLeft">
        <div class="appCompontsContLeftDiv">
          <div class="titleCont titleContImg">
            <div class="titleContText">{{titleLeftName}}</div>
            <div class="titleRight">
              <Icon class="closeIcon" type="ios-close-circle-outline" @click="detailclose('leftdetail')" v-show="showLeftMenu" />
              <Tooltip content="返回" placement="bottom" style="height: 100%;">
                <Icon class="closeIcon" type="ios-undo" @click="returnMenu" v-show="!showLeftMenu" />
              </Tooltip>
            </div>
          </div>
          <div :style="{height: 'calc(100% - 0.4rem)'}">
            <component :is="componentLeft" v-bind:detailData="leftDetailData"></component>
          </div>
        </div>
      </div>

      <!-- 全屏框/半框 -->
      <div style="float: left;height: 100%;" :style="{width: pageWidth,paddingRight: pageWidth == '49%' ? '0.05rem':'0rem'}" v-if="showDetailScreen">
        <div class="appCompontsScreen scale-in">
          <div class="titleCont titleContImgT" style="width:100%">
            <div class="titleContText">{{titleScreenName}}</div>
            <div class="titleRight">
              <Icon class="closeIcon" type="ios-close-circle-outline" @click="detailclose('screendetail')" />
            </div>
          </div>
          <div style="height: calc(100% - 0.4rem);">
            <component :is="componentName" v-bind:detailData="screenDetailData"></component>
          </div>
        </div>
      </div>

      <div class="mapDiv" style="position:absolution;float: left;" :style="{height: '100%',width: mapWidth,padding: mapadding}" v-show="isMapShow">
        <!-- 中间地图 -->
        <div class="appCompontsContMap scale-in" :style="{height: mapHeight,width: '100%'}">
          <!--arcgisMap 上添加滤镜 class="tmap"-->
          <arcgisMap v-if="this.$store.getters.mapitems.length == 0" class="tmap"></arcgisMap>
          <splitview ref="splitview" :items="this.$store.getters.mapitems" v-else-if="this.$store.getters.mapitems.length > 0 "></splitview>
        </div>

        <!-- 底部详情框 -->
        <div class="appCompontsContDetail fade-in-up" :style="{height: botmHeight,width: '100%'}" v-if="showDetailBotm">
          <div class="appCompontsContDetailDiv">
            <div class="titleCont titleContImg" :style="{borderBottom: botmShow ? '1px solid #0161ba':'none'}">
              <div class="titleContText">{{titleBotmName}}</div>
              <div class="titleRight">
                <Tooltip :content="botmShow ? '收缩':'展开'" placement="right" style="height: 100%;">
                  <Icon class="closeIcon" :type="botmShow ? 'ios-arrow-dropdown':'ios-arrow-dropup'" @click="detailShow('botmdetail', !botmShow)" />
                </Tooltip>
                <Icon class="closeIcon" type="ios-close-circle-outline" @click="detailclose('botmdetail')" />
              </div>
            </div>
            <div style="height: calc(100% - 0.4rem);" v-show="botmShow">
              <component :is="componentBotm" v-bind:detailData="botmDetailData"></component>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧详情框 -->
      <div class="appCompontsContLeft fade-in-left" :style="{width: pageWidth +'rem',marginLeft: '0.05rem'}" v-if="showDetailRight">
        <div class="appCompontsContLeftDiv">
          <div v-show="rightHead" class="titleCont titleContImg">
            <div class="titleContText">{{titleRightName}}</div>
            <div class="titleRight">
              <Icon class="closeIcon" type="ios-close-circle-outline" @click="detailclose('rightdetail')" />
            </div>
          </div>
          <div :style="{height: rightHead ? 'calc(100% - 0.4rem)':'100%'}">
            <component :is="componentRight" v-bind:detailData="rightDetailData"></component>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>


<script>
import bus from "../../../eventBus.js";
import { MapControl } from "../../arcgis_map/js/MapControl.js";
import arcgisMap from "../../../components/arcgis_map/index3.vue";
import splitview from "../../../components/arcgis_map/split/splitview.vue";


export default {
  name: "application",
  components: {
    arcgisMap,
    splitview,
  },
  watch: {
    // 监测路由变化,只要变化了就获取路由参数重新加载菜单
    $route(to, from) {
      var _this = this;
      // to为跳转之后的路由

      var menuid = this.$route.query.id
      _this.getMenus(menuid);
      _this.detailclose("leftMenu");
      _this.menuFlag = -1;
    }
  },
  props: {},
  data() {
    return {
      dialog: {
        show: false,
        title: {
          text: '',
          className: 'xa-bg-blue' //标题样式类名，包含`background`、`color`即可
        },
        bodyshow: true,
      },
      isdialog: false,
      showDetailDialog: [],
      componentDialog: [],

      rightHead: false, //右侧详情框 头部默认隐藏

      menuFlag: -1, //左侧菜单选中标识
      menuData: [], //左侧菜单数据集合

      //组件名称
      componentName: "", //左侧列表
      componentBotm: "", //底部详情
      componentLeft: "", //左侧详情
      componentRight: "",//右侧详情

      //详情框头部名称
      titleListName: "",
      titleLeftName: "",
      titleBotmName: "",
      titleRightName: "",
      titleScreenName: "",

      selectItem: {}, //左侧菜单选中项数据
      leftListData: {},
      botmDetailData: {},
      rightDetailData: {},
      leftDetailData: {},
      screenDetailData: {},

      pageWidth: 4.5, //列表宽度
      mapWidth: '100%',  //中间地图宽度
      mapHeight: '100%', //中间地图高度
      mapadding: '0',    //中间地图边距
      botmHeight: '50%', //底部详情框高度
      botmShow: true,    //底部详情框显示隐藏

      showLeftMenu: false,
      showDetailLeft: false,
      showDetailBotm: false,
      showDetailRight: false,
      showDetailScreen: false,

      isMapShow: true, //显示地图
      menuScale: true, //显示左侧菜单栏
    };
  },
  methods: {
    changeMenu(item, index) {
      var _this = this;
      _this.initial();

      // MapControl.setMapClear();

      this.menuFlag = index;
      this.selectItem = item;
      this.componentName = item.classname;
      this.titleListName = item.menuname;

      this.detailclose();
      this.isMapShow = true;

      switch (item.note) {
        case "左侧":
          this.showLeftMenu = true;
          this.pageWidth = 4.5;
          this.mapadding = '0 0 0 0.05rem';
          this.mapWidth = 'calc(100% - ' + (this.pageWidth) + 'rem)';
          this.titleLeftName = item.menuname;
          break;
        case "半屏":
          this.showDetailScreen = true;
          this.pageWidth = '49%';
          this.mapWidth = 'calc(100% - ' + (this.pageWidth) + ')';
          this.titleScreenName = item.menuname;
          break;
        case "全屏":
          this.isMapShow = false;
          this.showDetailScreen = true;
          this.pageWidth = '100%';
          this.titleScreenName = item.menuname;
          break;
        case "弹出窗":
          this.isdialog = true;
          this.dialog.title.text = item.menuname;
          this.dialog.show = true;
          setTimeout(() => {
            this.$refs.dialog.retresize();
          }, 100)
          break;
        case "自定义":

          break;
      }
    },
    initial() {
      this.titleListName = "";
      this.titleLeftName = "";
      this.titleBotmName = "";
      this.titleRightName = "";
      this.titleScreenName = "";

      this.selectItem = {};
      this.leftListData = {};
      this.botmDetailData = {};
      this.rightDetailData = {};
      this.leftDetailData = {};
      this.screenDetailData = {};
    },
    detailclose(type) {
      this.isMapShow = true; //关闭组件时，将地图显示出来
      this.mapHeight = '100%';

      if (type == "leftMenu") {
        this.showLeftMenu = false;
        this.pageWidth = 0;
        this.mapWidth = '100%';
        this.mapadding = '0';
        this.showDetailLeft = false;
        this.showDetailRight = false;
        this.showDetailBotm = false;
        this.showDetailScreen = false;
        MapControl.setMapClear();
      }
      else if (type == "leftdetail") {
        this.mapWidth = 'calc(100% - ' + (this.pageWidth) + 'rem)';
        this.mapadding = '0 0 0 0.05rem';
        this.showDetailLeft = false;
        this.showDetailBotm = false;
        this.showDetailRight = false;
      }
      else if (type == "botmdetail") {
        // this.mapWidth = '100%';
        this.showDetailBotm = false;
      }
      else if (type == "screendetail") {
        this.mapWidth = '100%';
        this.showDetailScreen = false;
        this.showDetailBotm = false;
      }
      else if (type == "rightdetail") {
        this.mapWidth = 'calc(100% - ' + (this.pageWidth) + 'rem)';
        this.mapadding = '0 0 0 0.05rem';
        this.showDetailRight = false;
      }
      else {
        this.menuScale = true;
        this.showLeftMenu = false;
        this.pageWidth = 0;
        this.mapWidth = '100%';
        this.mapadding = '0';
        this.showDetailLeft = false;
        this.showDetailRight = false;
        this.showDetailBotm = false;
        this.showDetailScreen = false;
      }
    },
    getMenus(menuid) {
      var _this = this;
      _this.detailclose();
      _this.menuData = [];
      let children = [
        { id: 1, classname: "test1", menuname: "二级菜单1", img: "", systemid: 32, note: "左侧" },
        { id: 2, classname: "waterStation", menuname: "二级菜单6", img: "", systemid: 32, note: "左侧" },
        { id: 3, classname: "test6", menuname: "二级菜单3", img: "", systemid: 32, note: "全屏" },
        { id: 9, classname: "test5", menuname: "二级菜单2", img: "", systemid: 32, note: "半屏" },
        { id: 8, classname: "test5", menuname: "二级菜单8", img: "", systemid: 32, note: "左侧" },
        { id: 4, classname: "test2", menuname: "二级菜单4", img: "", systemid: 32, note: "左侧" },
        { id: 5, classname: "test3", menuname: "二级菜单5", img: "", systemid: 32, note: "左侧" },
        { id: 7, classname: "test4", menuname: "二级菜单7", img: "", systemid: 32, note: "左侧" },
        { id: 6, classname: "sewagelist", menuname: "排水户", img: "", systemid: 32, note: "左侧" },
      ]
      for (let l = 0; l < children.length; l++) {
        _this.menuData.push({
          classname: children[l].classname,
          id: children[l].id,
          img: children[l].img,
          menuname: children[l].menuname,
          systemid: children[l].systemid,
          note: children[l].note,
          imgT: "",
          imgF: "",
        })
      }
    },
    detailShow(type, flag) {
      if (type == "botmdetail") {
        this.botmShow = flag;
        this.botmHeight = this.botmShow ? '50%' : '0.4rem';
        this.mapHeight = 'calc(100% - ' + (this.botmHeight) + ')'
      }
    },
    returnMenu() {
      //隐藏左侧，右侧详情框，同时显示左侧列表框
      this.componentLeft = this.componentRight = "";
      this.showDetailLeft = this.showDetailRight = false;

      this.showLeftMenu = true;
      this.mapWidth = 'calc(100% - ' + (this.pageWidth) + 'rem)';
      this.mapadding = '0 0 0 0.05rem';
    },
    closeDialog() {
      this.isdialog = false;
    }
  },
  created() {
    this.mapWidth = '100%';
  },
  mounted() {
    let _this = this;

    //通过 $on(eventName, eventHandler) 侦听一个事件
    //通过 $off(eventName, eventHandler) 停止侦听一个事件

    //左侧菜单切换事件
    bus.$on("changeMenu", function (value) {
      for (let i = 0; i < _this.menuData.length; i++) {
        if (value == _this.menuData[i].menuname || value == _this.menuData[i].id) {
          setTimeout(() => {
            _this.menuFlag = i;
            _this.changeMenu(_this.menuData[i], i)
          }, 200);
        }
      }
    })

    // 返回列表页
    bus.$on("showLeftMenu", function () {
      _this.showLeftMenu = true;

      _this.mapWidth = 'calc(100% - ' + (_this.pageWidth) + 'rem)';
      _this.mapadding = '0 0 0 0.05rem';
    });

    //左侧详情页
    bus.$on("leftDetail", function (componentName, item, title) {
      _this.showDetailLeft = true;
      _this.leftDetailData = item;
      _this.componentLeft = componentName;
      _this.titleLeftName = title;

      _this.mapWidth = 'calc(100% - ' + (_this.pageWidth * 2 + 0.05) + 'rem)';
    });

    //底部详情页
    bus.$on("botmDetail", function (componentName, item, title) {
      _this.showDetailBotm = true;
      _this.botmShow = true;

      _this.botmDetailData = item;
      _this.componentBotm = componentName;
      _this.titleBotmName = title;

      _this.mapHeight = '50%';
      _this.botmHeight = 'calc(100% - ' + (_this.mapHeight) + ')'
      if (_this.showLeftMenu)
        _this.mapWidth = 'calc(100% - ' + (_this.pageWidth) + 'rem)';

      if (_this.showDetailRight)
        _this.mapWidth = 'calc(100% - ' + (_this.pageWidth * 2) + 'rem)'

      if (_this.showDetailLeft)
        _this.mapWidth = 'calc(100% - ' + (_this.pageWidth * 2 + 0.05) + 'rem)'

      if (_this.showDetailScreen)
        _this.mapWidth = 'calc(100% - ' + (_this.pageWidth) + 'rem)'

    });

    //右侧详情页
    bus.$on("rightDetail", function (componentName, item, title) {
      _this.showDetailRight = true;
      _this.rightDetailData = item;
      _this.componentRight = componentName;
      _this.titleRightName = title;

      _this.mapWidth = 'calc(100% - ' + (_this.pageWidth * 2 + 0.05) + 'rem)';
      _this.mapadding = '0 0.05rem';
    });

    //显示左侧，右侧详情页，同时隐藏左侧列表框
    bus.$on("showDetail", function (data, item) {
      _this.showLeftMenu = false;
      _this.componentLeft = data.left;
      _this.componentRight = data.right;
      _this.showDetailLeft = _this.showDetailRight = true;

      _this.mapHeight = '100%';
      _this.mapWidth = 'calc(100% - ' + (_this.pageWidth * 2 + 0.05) + 'rem)';
    });

    //关闭详情框
    bus.$on("detailclose", function (value) {
      _this.detailclose(value);
    });

    _this.getMenus(this.$route.query.id);

    _this.detailclose(value);
    _this.menuFlag = -1;

  },
  beforeDestroy() {
    bus.$off("changeMenu");
    bus.$off("showLeftMenu");
    bus.$off("leftDetail");
    bus.$off("botmDetail");
    bus.$off("rightDetail");
    bus.$off("detailclose");
  },
}
</script>

<style lang="less">
.appDiv2 {
  width: 100%;
  height: calc(100% - 0.90rem);
  position: relative;
  padding: 0.05rem;

  .appMenu {
    width: 2.2rem;
    height: 100%;
    border-right: none;
    float: left;
    overflow-y: auto;
    // background-image: url("../../../assets/static/img/newhome/04/bg_left.png");
    background-image: url("../../../assets/static/img/newhome/侧边伸缩.png");
    background-size: 100% 100%;
  }
  .appMenu1 {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    position: absolute;
  }
  .menuCont {
    position: relative;
    cursor: pointer;
    margin: 0.2rem;
    margin-right: 0.35rem;
    height: 0.45rem;
    line-height: 0.45rem;
  }
  .menuSel {
    background-image: url("../../../assets/static/img/newhome/icon/bg_选项_sel.png");
    background-size: 100% 100%;
  }
  .menuNor {
    background-image: url("../../../assets/static/img/newhome/icon/bg_选项_nor.png");
    background-size: 100% 100%;
  }
  .menuImg {
    width: 0.2rem;
    height: 0.2rem;
    position: relative;
    left: 0.15rem;
    float: left;
    padding-top: 0.06rem;
  }
  .menuContImg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .menuContText {
    font-size: 0.12rem;
    color: #9db8e5ba;
    font-weight: bold;
    padding-left: 0.45rem;
  }
  .menuContText .actives {
    color: #ffffff;
  }
  .appComponts {
    float: left;
    width: 100%;
    height: 100%;
    position: relative;
    padding-left: 0.05rem;

    .appCompontsContLeft {
      // width: 100%;
      height: 100%;
      float: left;
    }
    .appCompontsContLeftDiv {
      border-radius: 0.1rem;
      background: none;
      width: 4.5rem;
      height: 100%;
      float: left;
      position: relative;
      border: 1px solid #326ab2;
    }

    .appCompontsScreen {
      border: 1px solid #326ab2;
      border-radius: 0.1rem;
      background: transparent;
      width: 100%;
      height: 100%;
      float: left;
      position: relative;
    }

    .appCompontsContRight {
      height: 100%;
      float: left;
    }

    .appCompontsContMap {
      border: 1px solid #2962ab;
      border-radius: 0.1rem;
      width: 100%;
      height: 100%;
      position: relative;
    }
    .appCompontsContDetail {
      position: relative;
      padding-top: 0.05rem;
      float: left;
    }

    .appCompontsContDetailDiv {
      height: 100%;
      border: 1px solid #2962ab;
      border-radius: 0.1rem;
      position: relative;
    }

    .titleCont {
      position: relative;
    }

    .titleContImg {
      width: 100%;
      height: 0.4rem;
      line-height: 0.4rem;
      border-bottom: 1px solid #0161ba;
    }
    .titleContImgT {
      height: 0.4rem;
      line-height: 0.4rem;
      border-bottom: 1px solid #0161ba;
    }

    .titleContText {
      position: absolute;
      font-size: 0.14rem;
      color: #ffffff;
      font-weight: bold;
      left: 0.15rem;
      float: left;
    }

    .titleRight {
      position: absolute;
      top: 10%;
      right: 0.05rem;
    }

    .closeIcon {
      cursor: pointer;
      padding: 0rem;
      font-size: 0.30rem;
      color: rgba(255, 255, 255, 0.5);
    }
    .closeIcon:hover {
      padding: 0rem;
      color: rgba(255, 255, 255, 1);
    }
  }

  .imgReturnT {
    display: inline-block;
    height: 100%;
    width: 0.2rem;
    left: 0rem;
    // background-image:url('../../../assets/static/img/newhome/侧边展开(左).png');
    // background-repeat: no-repeat;
    // background-size:100% 100%;
  }
  .imgReturnF {
    display: inline-block;
    height: 100%;
    width: 0.2rem;
    left: 0rem;
    background-image: url("../../../assets/static/img/newhome/侧边展开(右).png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .tmap {
    background-color: #031c4b !important;
    #newmapbox_layers div:nth-child(1) img {
      filter: contrast(65%) sepia(100%) invert(100%) brightness(138%)
        hue-rotate(358deg) saturate(100%) opacity(80%) !important;
    }
    #newmapbox_layers div:nth-child(2) img {
      filter: contrast(65%) sepia(100%) invert(100%) brightness(138%)
        hue-rotate(358deg) saturate(100%) opacity(80%) !important;
    }
  }
}
</style>
