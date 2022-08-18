<template>
  <div class="homepageDivMiddl3" style="width: 100%;height: 100%;">
    <div class="middleBg bottombg">
      <div class="homeTitle">河道排口及检测设备统计</div>
      <div id="homeBot_volume_bot1" style="height: calc(100% - 0.3rem);"></div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {

    };
  },
  methods: {
    initCharts1() {

      let manNumber1 = [32, 58, 64, 64, 64, 25, 39, 21];
      let manNumber2 = [12, 48, 54, 44, 54, 15, 29, 11];
      let xData = ['锡澄运河1', '锡澄运河2', '锡澄运河3', '锡澄运河4', '锡澄运河5', '锡澄运河6', '锡澄运河7', '锡澄运河8'];
      let colorList = ["#2069F5", "#5AF1F7"];

      let option = {
        //提示框
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        color: colorList,
        legend: {
          show: true,
          x: "75%",
          y: "0%",
          textStyle: {
            color: "#90BCE0"
          },
          color: colorList,
          data: ['排口', '检测设备']
        },
        grid: {
          left: '5%',
          right: '5%',
          top: '15%',
          bottom: '18%',
        },
        //X轴
        xAxis: {
          type: "category",
          data: xData,
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
            textStyle: {
              color: "#90BCE0"
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
          show: true,
          splitNumber: 4,
          nameTextStyle: {
            color: "#00cffe"
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#115db0"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#115db0',
            },
          },
          axisLabel: {
            color: '#00cffe',
          },
        },
        series: [
          {
            name: '排口',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#248ff7'
                }, {
                  offset: 1,
                  color: '#6851f1'
                }]),
                barBorderRadius: [20, 20, 0, 0],
              },
            },
            label: {
              show: true,
              position: 'top',
              distance: 5,
              color: '#fff',
            },
            data: manNumber1,
          },
          // ---------------------分割线---------------------
          {
            name: '检测设备',
            type: 'bar',
            barWidth: 15,
            barBorderRadius: [20, 20, 0, 0],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#8bd46e'
                }, {
                  offset: 1,
                  color: '#09bcb7'
                }]),
                barBorderRadius: [20, 20, 0, 0],
              }
            },
            label: {
              show: true,
              position: 'top',
              distance: 5,
              color: '#fff',
            },
            data: manNumber2,
          },


        ],
      };


      let myChart = this.volume = echarts.init(document.getElementById("homeBot_volume_bot1"));
      myChart.clear();
      myChart.setOption(option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });

    },
  },
  mounted() {
    this.initCharts1();
  },
  beforeDestroy() { },
};
</script>

<style lang="less" scoped="scoped">
.homepageDivMiddl3 {
  padding: 0 0.24rem 0 0.24rem;

  .middleBg {
    width: 100%;
    height: 100%;
  }
}
</style>
