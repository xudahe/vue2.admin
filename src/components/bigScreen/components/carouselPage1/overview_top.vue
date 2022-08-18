<template>
  <div class="overview_top" style="width: 100%;height: 100%;position: relative;">
    <div class="mapParent">
      <div class="mapDiv"></div>

      <template v-for="(item, index) in liquidList">
        <img id="imgPoint" :class="item.class" :src="item.imgurl" :key="index" @click="liquidClick(item)" />
      </template>
    </div>

  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      liquidList: [
        { name: "廖家巷", dtuid: "255", class: "ljx_img", imgurl: require("@/assets/static/img/map/ic_flowmeter_online1.png") },
        { name: "启迪大街", dtuid: "241", class: "qddj_img", imgurl: require("@/assets/static/img/map/ic_flowmeter_online2.png") },
      ],
    };
  },
  methods: {
    liquidClick(item) {

    },
  },
  mounted() { },
  beforeDestroy() { },
};
</script>

<style lang="less" scoped="scoped">
@percent: 0.8;

.overview_top {
  .mapParent {
    width:~"calc(8.54rem * @{percent})";
    height:~"calc(7.48rem * @{percent})";
    left:~"calc((100% - 8.54rem * @{percent})/2)";
    top:~"calc((100% - 6.48rem * @{percent})/2)";
    position: relative;

    .mapDiv {
      width: 100%;
      height: 100%;
      position: absolute;
      background: url(../../../../assets/static/img/newhome/01/地图.png) no-repeat;
      background-size: 100% 100%;
    }

    #imgPoint {
      width: 0.3rem;
      cursor: pointer;
    }

    .ljx_img {
      position: absolute;
      left: 25%;
      top: 26%;
    }

    .qddj_img {
      position: absolute;
      left: 75%;
      top: 71%;
    }
  }
}
</style>
