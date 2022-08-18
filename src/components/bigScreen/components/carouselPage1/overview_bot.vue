<template>
  <div class="overview_bot" style="width: 100%;height: 100%;position: relative;">
    <Row style="height:100%;">
      <Col :span="12" style="height:100%;">
      <!-- <div class="bomtitle">预警率排行</div> -->
      <div style="overflow-y:auto;height:calc(100% - 0rem);">
        <div v-for='(itema,index) in noticeListsb1' :key='index' :id="'pipeRightTop1_'+index+1" class="pipeRightMidBot1">
          <div class="topDefectDiv">
            <span class="topArea">{{itema.name}}</span>
            <div class="topCountDiv">
              <span class="topCount">{{itema.percent}}</span>
            </div>
          </div>
        </div>
      </div>
      </Col>
      <Col :span="12" style="height:100%;">
      <!-- <div class="bomtitle">单站水位排行</div> -->
      <div style="overflow-y:auto;height:calc(100% - 0rem);">
        <div v-for='(itema,index) in noticeListsb3' :key='index' :id="'pipeRightTop3_'+index+1" class="pipeRightMidBot1">
          <div class="topDefectDiv">
            <span class="topArea">{{itema.name}}</span>
            <div class="topCountDiv">
              <span class="topCount">{{itema.percent}}</span>
            </div>
          </div>
        </div>
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      noticeListsb1: [
        {
          "name": "珍珠河片区",
          "percent": "34%",
        },
        {
          "name": "玉带河片区",
          "percent": "28%",
        },
        {
          "name": "友谊河片区",
          "percent": "20%",
        },
        {
          "name": "白水河片区",
          "percent": "13%",
        },
        {
          "name": "紫金山一沟片区",
          "percent": "3%",
        },
      ],
      noticeListsb3: [
        {
          "name": "3#站点",
          "percent": "5.89m",
        },
        {
          "name": "1#站点",
          "percent": "5.06m",
        },
        {
          "name": "2#站点",
          "percent": "4.87m",
        },
        {
          "name": "4#站点",
          "percent": "4.43m",
        },
        {
          "name": "5#站点",
          "percent": "4.04m",
        },
      ],
    };
  },
  methods: {},
  mounted() { },
  beforeDestroy() { },
};
</script>

<style lang="less" >
.overview_bot {
  .bomtitle {
    text-align: center;
    color: #00f2e4;
  }
  .pipeRightMidBot1 {
    width: 100%;
    // overflow: scroll;
  }
  .topDefectDiv {
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    background: url(../../../../assets/static/img/newhome/01/侧边标题.png) no-repeat;
    background-size: 100% 100%;
    margin-top: 0.05rem;
  }
  .topArea {
    font-size: 0.16rem;
    color: #31dc55;
    font-family: "SOURCEHANSANS-REGULAR";
    margin-left: 0.1rem;
  }
  .topCountDiv {
    float: right;

    .topCount {
      font-size: 0.2rem;
      color: rgb(227, 200, 60);
      font-family: "DIN1451ALT";
      margin-right: 0.2rem;
    }
  }
}
</style>
