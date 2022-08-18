// 水质更多
<style lang="less">
</style>
<template>
  <div class="moreEchart detailLogDiv Tabs_bg iview_bg table_bg page_big table_big menu_bg" style="width: 100%;height: 300px;font-size: 0.16rem;color:rgba(255,255,255,0.5);">
    <Spin size="large" fix v-if="isShowSpin"></Spin>
    <div style="display: block;text-align:left;margin-left: 0.4rem;">
      <label class="label_color">开始时间:</label>
      <DatePicker size="small" placeholder="请选择开始时间" type="date" style="width:1.5rem;margin-right: 0.2rem;" :value="wsclsChart.startTime" @on-change="GetStartTime"></DatePicker>
      <label class="label_color">结束时间:</label>
      <DatePicker size="small" placeholder="请选择结束时间" type="date" style="width:1.5rem;" :value="wsclsChart.endTime" @on-change="GetEndTime"></DatePicker>

      <Select style="width: 120px;" v-model="wsclsChart.wsclsparmas" @on-change="wsclsparmasFn">
        <Option value="COD">COD</Option>
        <Option value="氨氮">氨氮</Option>
        <Option value="PH">PH</Option>
        <Option value="总磷">总磷</Option>
      </Select>
      <Button type="primary" style="padding: 5px;margin-left: 10px;width: 80px" @click="searchMoreData">
        <Icon type="ios-search" style='font-size: 12px;' /> 查询
      </Button>
    </div>
    <div :style="{height:'calc(100% - 10px)',width:'100%'}">
      <div style="height:100%; ">
        <div id="moreEchart_1" style="height:280px; width:780px"></div>
      </div>
    </div>
  </div>
</template>
<script>
import bus from '../../../../eventBus.js';

export default {
  components: {

  },
  props: {
   
  },
  data() {
    return {
      data_in: [],
      data_out: [],

      station_name: "",
      dtuid: "",
      timeList: [],
      jsk_codList: [],
      jsk_anList: [],
      jsk_tpList: [],
      jsk_phList: [],
      jsk_flowList: [],
      echart: {},
      colorlist: [
        "#7ad87f",
        "#edc20e",
        "#57a3f3",
        "#f53972",
        "#8632ec",
        "#37A2DA",
        "#c4ccd3",
        "#7721f7"
      ],
      isShowSpin: false,
      data: [],
      now: new Date(),
      value: Math.random() * 10,
      wsclsChart: {
        wsclsparmas: "COD",
        startTime: new Date().getFullYear() + "-" + (new Date().getMonth() + 1 < 10 ? '0' + (new Date()
          .getMonth() + 1) : new Date().getMonth() + 1) + "-" + (new Date().getDate() < 10 ? '0' + (
            new Date().getDate()) : new Date().getDate()), //开始时间
        endTime: new Date().getFullYear() + "-" + (new Date().getMonth() + 1 < 10 ? '0' + (new Date()
          .getMonth() + 1) : new Date().getMonth() + 1) + "-" + (new Date().getDate() < 10 ? '0' + (
            new Date().getDate()) : new Date().getDate()), //结束时间
      }
    };
  },
  watch: {

  },
  methods: {
    getTimeset(date, day) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      var h = date.getHours();
      return y + "-" + m + "-" + d;
    },
    GetStartTime(time) {
      this.wsclsChart.startTime = time;
    },
    GetEndTime(time) {
      this.wsclsChart.endTime = time;
    },

    initCharts(timeList, list, name, yname, index, ymax, ymin) {
      var _this = this;
      var legend = [],
        series = [];
      for (var key in list) {
        legend.push(key);
        series.push({
          name: key,
          type: "line",
          smooth: true,
          markLine: this.GetMarkLine(name, list[key].length - 1),
          data: list[key],
          // itemStyle: {
          // 	normal: {
          // 		color: "rgb(122,216,127)",
          // 		areaStyle: {
          // 			color: "#f00"
          // 		}
          // 	}
          // },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "rgba(97,221,42,0.5)"
              },
              {
                offset: 1,
                color: "rgba(255,255,255,0)"
              }
              ])
            }
          },
        });
      }

      let Option = {
        color: this.colorlist,
        tooltip: {
          trigger: "axis",
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderColor: 'gray',
          color: '#fff',
          textStyle: {
            color: '#fff',
          },
          axisPointer: {
							type: "cross",
							crossStyle: {
								color: "#999"
							}
						}
        },
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {}
          }
        },
        legend: {
          y: "top",
          textStyle: {
            color: "#fff"
          },
          data: legend
        },
        grid: {
          top: "30rem",
          left: "5rem",
          right: "20rem",
          bottom: "0rem",
          containLabel: true
        },
        xAxis: [{
          type: "category",
          data: timeList,
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
              color: "#c2defd"
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#115db0"
            }
          }
        }],
        yAxis: [{
          name: yname,
          max: ymax == undefined ? "dataMax" : ymax,
          min: ymin,
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
              color: "#00cffe"
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#115db0"
            }
          },
          type: "value",
          nameTextStyle: {
            color: "#fff",
            fontSize: 12
          }
        }],
        series: series
      };
      var myChart = echarts.init(
        document.getElementById("moreEchart_1")
      );
      myChart.setOption(Option, true);
      myChart.resize();
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    GetCBJSZHistory(name, source) {

      var d1 = this.wsclsChart.startTime;
      var d2 = this.wsclsChart.endTime;
      if (d1 > d2 && d1 != '' && d2 != '') {
        this.$Message.warning({
          content: '请输入开始时间不能晚于结束时间！',
          duration: 3
        })
      } else {
        var _this = this;




        var timeList = [];
        var jsk_codList = [];
        var jsk_anList = [];
        var jsk_tpList = [];
        var jsk_phList = [];

        //--组织cod-an数据
        for (var i = 0; i < source.length; i++) {
          var item = source[i];
          var month = new Date(item.recordtime).getMonth() + 1;
          timeList.push(
            new Date(item.recordtime).getMonth() + 1 + "-" +
            new Date(item.recordtime).getDate() + "\n" +
            new Date(item.recordtime).getHours() +
            ":" +
            new Date(item.recordtime).getMinutes()
          );

          jsk_codList.push(Number(item.cod).toFixed(3));
          jsk_anList.push(Number(item.an).toFixed(3));
          jsk_tpList.push(Number(item.tp).toFixed(3));
          jsk_phList.push(Number(item.ph).toFixed(3));
        }

        if (name == "IN") {
          _this.jsk_codList["进水COD"] = jsk_codList;
          _this.jsk_anList["进水氨氮"] = jsk_anList;
          _this.jsk_tpList["进水总磷"] = jsk_tpList;
          _this.jsk_phList["进水PH"] = jsk_phList;

        } else {
          _this.jsk_codList["出水COD"] = jsk_codList;
          _this.jsk_anList["出水氨氮"] = jsk_anList;
          _this.jsk_tpList["出水总磷"] = jsk_tpList;
          _this.jsk_phList["出水PH"] = jsk_phList;
        }


        var jsphmin = parseInt(Math.min.apply(Math, this.jsk_phList["出水PH"])); //设置值
        var csphmin = parseInt(Math.min.apply(Math, this.jsk_phList["进水PH"])); //设置值
        var phmin = 4;
        if (jsphmin < 4 || csphmin < 4) {
          phmin = 0;
        }

        if (_this.wsclsChart.wsclsparmas == "COD") {
          _this.initCharts(timeList, _this.jsk_codList, "进出水COD", "(mg/l)", 1, 600, 0);
        } else if (_this.wsclsChart.wsclsparmas == "氨氮") {
          _this.initCharts(timeList, _this.jsk_anList, "进出水氨氮", "(mg/l)", 1, 50, 0);
        } else if (_this.wsclsChart.wsclsparmas == "PH") {
          _this.initCharts(timeList, _this.jsk_phList, "进出水PH", "(mg/l)", 1, 10, phmin);
        } else if (_this.wsclsChart.wsclsparmas == "总磷") {
          _this.initCharts(timeList, _this.jsk_tpList, "进出水总磷", "(mg/l)", 1, 10, 0);
        }
      }

    },

    GetMarkLine(val_1, elength) {
      if (val_1 == "进出水COD") {
        var markline = {
          large: true,
          data: [{
            name: "出水COD",
            xAxis: -1,
            yAxis: 60,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }
          },
          {
            name: "出水COD",
            xAxis: elength,
            yAxis: 60,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '出水COD上限:50'
            }
          },
          {
            name: "进水COD上限",
            xAxis: -1,
            yAxis: 400,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }

          },
          {
            name: "进水COD上限",
            xAxis: elength,
            yAxis: 400,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '进水COD上限:400'
            }
          }
          ]
        };
        return markline;
      } else if (val_1 == "进出水氨氮") {
        var markline = {
          large: true,
          data: [{
            name: "出水氨氮",
            xAxis: -1,
            yAxis: 8,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }
          },
          {
            name: "出水氨氮",
            xAxis: elength,
            yAxis: 8,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '出水氨氮上限:6'
            }
          },
          {
            name: "进水氨氮",
            xAxis: -1,
            yAxis: 30,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }

          },
          {
            name: "进水氨氮",
            xAxis: elength,
            yAxis: 30,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '进水氨氮上限:30'
            }
          }
          ]
        };
        return markline;
      } else if (val_1 == "进出水PH") {
        var markline = {
          large: true,
          data: [{
            name: "进、出水PHT",
            xAxis: -1,
            yAxis: 9,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }
          },
          {
            name: "进、出水PHT",
            xAxis: elength,
            yAxis: 9,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '进、出水PH上限:9'
            }
          },
          {
            name: "进、出水PHM",
            xAxis: -1,
            yAxis: 6,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }

          },
          {
            name: "进、出水PHM",
            xAxis: elength,
            yAxis: 6,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '进、出水PH下限:6'
            }
          }
          ]
        };
        return markline;
      } else if (val_1 == "进出水总磷") {
        var markline = {
          large: true,
          data: [{
            name: "进水总磷上限",
            xAxis: -1,
            yAxis: 4,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }
          },
          {
            name: "进水总磷上限",
            xAxis: elength,
            yAxis: 4,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '进水总磷上限:4'
            }
          },
          {
            name: "出水总磷上限",
            xAxis: -1,
            yAxis: 0.5,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }

          },
          {
            name: "出水总磷上限",
            xAxis: elength,
            yAxis: 0.5,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '出水总磷上限:0.5'
            }
          }
          ]
        };
        return markline;
      } else {
        return null;
      }

    },
    wsclsparmasFn(val) {
      if (val) {
        this.wsclsChart.wsclsparmas = val;
      }
      this.searchMoreData();
    },
    // 查询
    searchMoreData() {
      this.jsk_codList = []
      this.jsk_anList = []
      this.jsk_tpList = []
      this.jsk_phList = []

      this.GetCBJSZHistory("IN", this.data_in)
      this.GetCBJSZHistory("OUT", this.data_out)
    }
  },
  mounted() {
    let _this = this;
    bus.$off("emitMoreModel").$on("emitMoreModel", function (val, data_in, data_out) {
      _this.data_in = data_in
      _this.data_out = data_out
      _this.wsclsChart.wsclsparmas = val
      _this.searchMoreData()
    })
  },
  beforeDestroy() {
    bus.$off("emitMoreModel");
  }
};
</script>
