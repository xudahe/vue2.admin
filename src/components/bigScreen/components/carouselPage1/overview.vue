<!--水务运营总览--左侧-->
<style lang="less">
.overview {
  .homeTitle {
    font-size: 0.16rem;
    color: #ffffff;
    padding: 0.03rem 0.1rem;
    float: none;
    background-image: url(../../../../assets/static/img/newhome/01/bg_侧边标题.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .unitSelect {
    position: relative;
    float: right;
    top: -0.28rem;
    right: 0.05rem;
    width: 1.4rem;
  }

  .divleft {
    height: calc(100%);
    width: calc(100% - 5rem);
    float: left;
    margin-right: 0.1rem;
  }
  .divright {
    height: calc(100%);
    width: 5rem;
    float: left;
  }
  .divcenter {
    width: calc(~"100% - 5.0rem - 5.0rem");
    height: 100%;
    float: left;
  }
}
</style>
<template>
  <div class="overview" style="width: 100%;height: calc(100%);">
    <div class="divright fade-in-right">
      <overview_left></overview_left>
    </div>
    <div class="divcenter">
      <div style="height:75%;width:100%;" class="scale-in">
        <!-- <marquee direction=left align=middle style="position: absolute;top: 5px;z-index: 1;width: 80%;left: 10%;background-color: rgba(3,81,176,0.8);font-size: 0.2rem;font-weight: bold;border-radius: 0.2rem;color: #fd6f6f">
          2021-12-01 11:25:26 1#站点发生液位报警，报警水位：6.48m
        </marquee> -->
        <overview_top></overview_top>
      </div>
      <div style="height:25%;width:100%;padding:0 0.1rem;" class="homebgBot fade-in-up">
        <!-- <Row class="homeTitle">
          <Col :span="12" style="text-align: center;">预警率排行</Col>
          <Col :span="12" style="text-align: center;">单站水位排行</Col>
        </Row>
        <div id="pq_div" style="height: calc(100% - 0.4rem);">
          <overview_bot></overview_bot>
        </div> -->
        <div class="homeTitle">
          <a :style="{color:piKey == '片区预警率排行' ? '#fff':'#2d8cf0',cursor: 'pointer'}" @click="pipeClick('片区预警率排行')">片区预警率排行</a>
          <a :style="{color:piKey == '单站水位排行' ? '#fff':'#2d8cf0',paddingLeft: '0.1rem',cursor: 'pointer'}" @click="pipeClick('单站水位排行')">单站水位排行</a>
        </div>
        <div id="pq_div" style="height: calc(100% - 0.4rem);width: 100%;">
          <div id="overview_volume_botm1" style="height: calc(100% - 0rem);width: 100%;"></div>
        </div>
      </div>
    </div>
    <div class="divright fade-in-left">
      <overview_right></overview_right>
    </div>
  </div>
</template>

<script>
import overview_left from "./overview_left.vue"
import overview_right from "./overview_right.vue"
import overview_bot from "./overview_bot.vue"
import overview_top from './overview_top.vue'

export default {
  components: {
    overview_left,
    overview_right,
    overview_bot,
    overview_top
  },
  data() {
    return {
      volume: null,
      piKey: '片区预警率排行',
    };
  },
  created() {

  },
  methods: {
    pipeClick(value) {
      this.piKey = value;
      this.initCharts();
    },
    initCharts() {
      let categoryData = [], chartdata = [], unit = '';
      if (this.piKey == '片区预警率排行') {
        unit = '%'
        categoryData = ['珍珠河片区', '玉带河片区', '友谊河片区', '白水河片区', '紫金山片区'];
        chartdata = [30, 25, 20, 10, 2];
      } else {
        unit = 'm'
        categoryData = ['廖家巷', '墨香路', '华新路', '龙蟠路', '华飞路'];
        chartdata = [5.89, 5.06, 4.87, 4.43, 4.04];
      }

      let option = {
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {
              backgroundColor: '#031245',
            },
            restore: {},
          },
          iconStyle: {
            borderColor: '#c0c3cd',
          },
        },
        legend: {
          show: false
        },
        color: ['#00D7E9', 'rgba(0, 215, 233, 0.9)'],
        grid: {
          containLabel: true,
          left: 0,
          right: 0,
          bottom: 10,
          top: 30,
        },
        xAxis: {
          type: "category",
          data: categoryData,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#115db0"
            }
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: "#115db0"
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#c2defd"
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#115db0"
            }
          }
        },
        yAxis: {
          nameTextStyle: {
            color: "#00cffe"
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#115db0"
            }
          },
          axisTick: {
            show: false
          },
          type: "value",
          splitLine: {
            show: false,
            lineStyle: {
              color: "#115db0"
            }
          },
          axisLabel: {
            show: false,
            textStyle: {
              color: "#00cffe"
            }
          }
        },
        series: [
          {
            data: chartdata,
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 20,
            itemStyle: {
              color: {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                type: 'linear',
                colorStops: [
                  {
                    offset: 0,
                    color: '#00D7E9',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 167, 233,0.3)',
                  },
                ],
              },
            },
            label: {
              show: true,
              position: 'top',
              distance: 10,
              color: '#fff',
              formatter: function (p) {
                return p.value + unit
              },
            },
          },
          {
            data: [1, 1, 1, 1, 1],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [20, 10],
          },
          {
            data: chartdata,
            type: 'pictorialBar',
            barMaxWidth: '20',

            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [20, 12],
            zlevel: 2,
          },
        ],
        tooltip: {
          show: true,
          formatter: '{b}：{c0}' + unit,
        },
      };

      let myChart = this.volume = echarts.init(document.getElementById("overview_volume_botm1"));
      myChart.clear();
      myChart.setOption(option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });

    },
  },
  mounted() {
    let _this = this;

    this.initCharts();
    bus.$on("menuClick", function (params) {
      setTimeout(() => {
        if (_this.volume != null && _this.volume != undefined) {
          _this.volume.resize();
        }
      }, 200);
    })
  },
  beforeDestroy() {

  },
};
</script>


