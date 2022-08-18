<template>
  <div class="homepageDivRight3" style="width: 100%;height: 100%;">
    <div class="rightBg rightBg1">
      <div class="homeTitle">水质统计</div>
      <div style="height: calc(100% - 0.3rem);padding:0.1rem;" class="waterDiv">
        <div class="thead">
          <Row>
            <Col :span="8">河道名称 </Col>
            <Col :span="8">水质情况 </Col>
            <Col :span="8">排口数量 </Col>
          </Row>
        </div>
        <div class="tbody">
          <div style="position: relative;width: 100%;" :style="{top: noticeTopsb1 + 'px'}" :class="{transitionTop: isActivesb1}">
            <div v-for='(item,index) in datalist1' :key="index" :id="'pipeRightTop'+index+1" class='pipeRightMidBot1' style="width: 100%;height:100%;margin-left: 0.1rem;cursor: pointer;overflow: hidden;">
              <Row style="width: 100%;height: 100%;">
                <Col :span="8"> {{item.name}} </Col>
                <Col :span="8" :style="{color:item.color,}"> {{item.level}} </Col>
                <Col :span="8"> {{item.count}} </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rightBg rightBg2">
      <div class="homeTitle">超标排口</div>
      <div style="height: calc(100% - 0.3rem);overflow: hidden;   padding-top: 0.15rem;">
        <div style="position: relative;width: 100%;" :style="{top: noticeTopsb2 + 'px'}" :class="{transitionTop: isActivesb2}">
          <div v-for='(item,index) in datalist2' :key="index" :id="'pipeRightTop'+index+1" class='pipeRightMidBot2' style="padding-left: 0.1rem;margin: 0.1rem; background: #0e284c;height:100%;cursor: pointer;overflow: hidden;">
            <Row style="width: 100%;height: 100%;">
              <Col :span="12">
              <div class="midDiv">
                <div class="midvalue" style="color:#06E4F9;">{{item.name}}</div>
              </div>
              </Col>
              <Col :span="12">
              <div class="midDiv">
                <div class="midlabel">{{item.time}}</div>
              </div>
              </Col>
              <Col :span="7">
              <div class="midDiv">
                <div class="midlabel">PH值:</div>
                <div class="midvalue">{{item.ph}}</div>
              </div>
              </Col>
              <Col :span="7">
              <div class="midDiv">
                <div class="midlabel">COD:</div>
                <div class="midvalue">{{item.cod}}</div>
              </div>
              </Col>
              <Col :span="10">
              <div class="midDiv">
                <div class="midlabel">COD超标倍数:</div>
                <div class="midvalue">{{item.codcb}}</div>
              </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      timersb1: {},
      isActivesb1: true,
      noticeTopsb1: 0,

      timersb2: {},
      isActivesb2: true,
      noticeTopsb2: 0,

      datalist1: [
        { name: "锡澄运河L1", level: "Ⅴ", count: "38", color: "#e2502b" },
        { name: "锡澄运河L2", level: "Ⅴ", count: "35", color: "#e2502b" },
        { name: "锡澄运河L3", level: "Ⅳ", count: "26", color: "#e2af2f" },
        { name: "锡澄运河L4", level: "Ⅳ", count: "18", color: "#e2af2f" },
        { name: "锡澄运河L5", level: "Ⅲ", count: "29", color: "#6bdbf4" },
        { name: "锡澄运河L6", level: "Ⅲ", count: "39", color: "#6bdbf4" },
        { name: "锡澄运河L7", level: "Ⅱ", count: "45", color: "#6bdbf4" },
        { name: "锡澄运河L8", level: "Ⅱ", count: "22", color: "#6bdbf4" },
        { name: "锡澄运河L9", level: "Ⅰ", count: "15", color: "#6bdbf4" },
        { name: "锡澄运河L10", level: "Ⅰ", count: "10", color: "#6bdbf4" },
      ],
      datalist2: [
        { name: '锡澄运河L1', ph: '8.7', cod: '57.9', codcb: '2', time: '2021.12.01 16:32:22' },
        { name: '锡澄运河L2', ph: '8.7', cod: '57.9', codcb: '2', time: '2021.12.01 16:32:22' },
        { name: '锡澄运河L3', ph: '8.7', cod: '57.9', codcb: '2', time: '2021.12.01 16:32:22' },
        { name: '锡澄运河L4', ph: '8.7', cod: '57.9', codcb: '2', time: '2021.12.01 16:32:22' },
        { name: '锡澄运河L5', ph: '8.7', cod: '57.9', codcb: '2', time: '2021.12.01 16:32:22' },
        { name: '锡澄运河L6', ph: '8.7', cod: '57.9', codcb: '2', time: '2021.12.01 16:32:22' },
      ],
    };
  },
  methods: {
    settimeoutss1() {
      let _this = this;
      let list = JSON.parse(JSON.stringify(_this.datalist1));

      let index = 1;
      if (list.length > 3) {
        _this.timersb1 = setInterval(() => {
          if (index > _this.datalist1.length) {
            index = 1;
          }
          let dom = document.getElementsByClassName("pipeRightMidBot1");
          if (dom.length > 0) dom[0].classList.remove("a-fadeoutT");
          _this.datalist1.push(list[index - 1]);
          if (dom.length > 0) {
            dom[0].classList.add("a-fadeoutT");
            _this.noticeTopsb1 = -(dom[0].clientHeight - 1);
          }
          _this.isActivesb1 = true;
          setTimeout(function () {
            _this.datalist1.splice(0, 1);
            _this.isActivesb1 = false;
            _this.noticeTopsb1 = 0;
            if (dom.length > 0) dom[0].classList.remove("a-fadeoutT");
          }, 2000);
          index++;
        }, 5000);
      }
    },
    settimeoutss2() {
      let _this = this;
      let list = JSON.parse(JSON.stringify(_this.datalist2));

      let index = 1;
      if (list.length > 3) {
        _this.timersb2 = setInterval(() => {
          if (index > _this.datalist2.length) {
            index = 1;
          }
          let dom = document.getElementsByClassName("pipeRightMidBot2");
          if (dom.length > 0) dom[0].classList.remove("a-fadeoutT");
          _this.datalist2.push(list[index - 1]);
          if (dom.length > 0) {
            dom[0].classList.add("a-fadeoutT");
            _this.noticeTopsb2 = -(dom[0].clientHeight + 7);
          }
          _this.isActivesb2 = true;
          setTimeout(function () {
            _this.datalist2.splice(0, 1);
            _this.isActivesb2 = false;
            _this.noticeTopsb2 = 0;
            if (dom.length > 0) dom[0].classList.remove("a-fadeoutT");
          }, 2000);
          index++;
        }, 5000);
      }
    },
  },
  mounted() {
    clearInterval(this.timersb1)
    clearInterval(this.timersb2)
    this.settimeoutss1();
    this.settimeoutss2();
  },
  beforeDestroy() {
    clearInterval(this.timersb1)
    clearInterval(this.timersb2)
  },
};
</script>

<style lang="less" scoped="scoped">
.homepageDivRight3 {
  padding: 0 0.25rem 0 0;

  .rightBg {
    width: 100%;
    // height: calc(~"100% / 4 - 0.1rem");
    // margin-top: 0.24rem;
  }

  .thead {
    background: #0e284c;
    height: 0.5rem;
    line-height: 0.5rem;
    color: #90bce0;

    .ivu-col {
      text-align: center;
    }
  }
  .tbody {
    height: calc(~"100% - 0.5rem");
    overflow: hidden;

    .ivu-col {
      color: #bee0fc;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
    }
  }

  .a-fadeoutT {
    -webkit-animation: 0.8s ease-in forwards;
    animation: 0.8s ease-in forwards;
    -webkit-animation-name: fadeoutT;
    animation-name: fadeoutT;
  }
  @-webkit-keyframes fadeoutT {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fadeoutT {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .midDiv {
    width: 100%;
    margin-top: 0.05rem;
    display: inline-block;

    .midlabel {
      font-size: 0.15rem;
      display: inline-block;
      color: #90bce0;
      margin-right: 0.05rem;
    }

    .midvalue {
      font-size: 0.15rem;
      display: contents;
      color: #ffffff;
    }
  }
}
</style>
