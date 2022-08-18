<template>
  <div class="homepageDivLeft3" style="width: 100%;height: 100%;">
    <div class="leftBg leftbg1">
      <div class="homeTitle">排口总数</div>
      <div style="height: calc(100% - 0.3rem);">
        <!-- <countup class="pkTotal" suffix="" target="pktotal" startval="0" :duration="10" :endval="6789" :decimalplaces="0"></countup> -->
        <div class="pkTotal">6789 </div>
        <div class="pkdizuo"></div>
      </div>
    </div>
    <div class="leftBg leftbg2">
      <div class="homeTitle">区域排口统计</div>
      <div id="homeLeft_volume_left1" style="height: calc(100% - 0.3rem);">
      </div>
    </div>
    <div class="leftBg leftbg3">
      <div class="homeTitle">整治统计</div>
      <div id="homeLeft_volume_left2" style="height: calc(100% - 0.3rem);">
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {};
  },
  methods: {
    initCharts1() {
      var colorList = ['#39B3FF', '#47E0E0', '#7891D9', '#83D978', '#C7A530', '#FF8439'];

      let option = {
        tooltip: {
          trigger: 'axis',
          show: true,
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          show: false
        },
        grid: {
          top: "1%",
          left: '3%',
          right: '15%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [{
          splitLine: {
            show: false
          },
          type: 'value',
          show: false,
        }],
        yAxis: [{
          splitLine: {
            show: false
          },
          axisLine: { //y轴
            show: false
          },
          type: 'category',
          axisTick: {
            show: false
          },
          inverse: true,
          data: ['堰桥街道', '长安街道', '钱桥街道', '前洲街道', '玉祁街道', '洛社镇', '阳山镇'],
          axisLabel: {
            color: '#90BCE0',
            fontSize: 12,
          }
        }],
        series: [{
          name: '数量',
          type: 'bar',
          barWidth: 8, // 柱子宽度
          label: {
            show: true,
            position: 'right', // 位置
            // color: '#A7D6F4',
            fontSize: 14,
            distance: 5, // 距离
            formatter: '{c}' // 这里是数据展示的时候显示的数据
          }, // 柱子上方的数值
          itemStyle: {
            barBorderRadius: [20],
            color: (params) => {
              return colorList[params.dataIndex]
            }
          },
          data: [400, 380, 360, 340, 320, 300, 280]
        },]
      };

      let myChart = echarts.init(document.getElementById("homeLeft_volume_left1"));
      myChart.clear();
      myChart.setOption(option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    initCharts2() {

      var colorList = ['#f1bb4c', '#00d488', '#3bafff'];

      let option = {
        title: {
          text: '83',
          subtext: '总数',
          x: 'center',
          y: '35%',
          textStyle: {
            fontSize: 24,
            fontWeight: 'normal',
            color: ['#fff']
          },
          subtextStyle: {
            color: '#90BCE0',
            fontSize: 14
          },
        },
        grid: {
          bottom: 150,
          left: 0,
          right: '10%'
        },
        legend: {
          show: false,
          orient: 'vertical',
          top: "middle",
          right: "5%",
          textStyle: {
            color: '#f2f2f2',
            fontSize: 14,
          },
          icon: 'roundRect'
        },
        series: [
          // 主要展示层的
          {
            radius: ['40%', '60%'],
            center: ['50%', '50%'],
            type: 'pie',
            itemStyle: {
              normal: {
                color: function (params) {
                  return colorList[params.dataIndex]
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 15,
                length2: 70,
                lineStyle: {
                  color: '#07aaf0'
                },
                align: 'right'
              },
              color: "#000",
              emphasis: {
                show: true
              }
            },
            label: {
              normal: {
                formatter: function (params) {
                  var str = '';
                  switch (params.name) {
                    case '整治': str = '{a|}\n{nameStyle|整治 }' + '{rate|' + params.value + '次}'; break;
                    case '规范': str = '{b|}\n{nameStyle|规范 }' + '{rate|' + params.value + '次}'; break;
                    case '取缔': str = '{c|}\n{nameStyle|取缔 }' + '{rate|' + params.value + '次}'; break;
                  }
                  return str
                },
                padding: [0, -70],
                height: 135,
                rich: {
                  a: {
                    width: 38,
                    height: 38,
                    lineHeight: 50,
                    align: 'left'
                  },
                  b: {
                    width: 29,
                    height: 45,
                    lineHeight: 50,
                    align: 'left'
                  },
                  c: {
                    width: 34,
                    height: 33,
                    lineHeight: 50,
                    align: 'left'
                  },
                  nameStyle: {
                    color: "#90BCE0",
                    align: 'left'
                  },
                  rate: {
                    fontSize: 16,
                    color: "#55e4eb",
                    align: 'left'
                  }
                }
              }
            },
            data: [
              { value: 23, name: '整治' },
              { value: 27, name: '规范' },
              { value: 33, name: '取缔' },
            ]
          },
          // 边框的设置
          {
            radius: ['47%', '65%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            animation: false,
            tooltip: {
              show: false
            },
            itemStyle: {
              normal: {
                color: 'rgba(250,250,250,0.2)'
              }
            },
            data: [{
              value: 1,
            }],
          }
        ]
      };

      let myChart = echarts.init(document.getElementById("homeLeft_volume_left2"));
      myChart.clear();
      myChart.setOption(option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
  mounted() {
    this.initCharts1();
    this.initCharts2();
  },
  beforeDestroy() { },
};
</script>

<style lang="less" scoped="scoped">
.homepageDivLeft3 {
  padding: 0 0rem 0rem 0.25rem;

  .leftBg {
    width: 100%;
    // height: calc(~"100% / 4 - 0.1rem");
    // margin-top: 0.24rem;
  }

  .pkdizuo {
    height: 50%;
    background: url(../../../../assets/static/img/home1/底座.png) no-repeat;
    background-size: 100% 100%;
    z-index: -1;
    position: relative;
  }
  .pkTotal {
    height: 50%;
    z-index: 3;
    display: block;
    overflow-wrap: break-word;
    color: rgba(90, 241, 247, 1);
    font-size: 0.7rem;
    letter-spacing: 4px;
    font-family: "DFW";
    white-space: nowrap;
    text-align: center;
  }
}
</style>
