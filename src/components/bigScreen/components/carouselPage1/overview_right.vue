<template>
  <div class="overview_right" style="width: 100%;height: 100%;">
    <div class="rightBg homebg">
      <div class="homeTitle">管网简报</div>
      <div style="height:calc(100% - 0.2rem);padding:0.1rem;position: relative;">
        <div style="color:rgba(255, 255, 255,0.7);text-indent: 2em;">
          至<span style='color:rgba(0, 207, 254, 1);'>2021年12月</span>，区管网偷排监测建设点数：<span
            style='color:#69e755;font-weight: bold;font-size: 0.21rem;'>17个</span>
          ，日均在线率<span style='color:#69e755;font-weight: bold;font-size: 0.21rem;'>90.43%</span>
          ，预警站点中，预警率最高的站点为<span style='color:#00ffff;font-weight: bold;font-size: 0.21rem;'>3#站点</span>
          ，预警数<span style='color:#00ffff;font-weight: bold;font-size: 0.21rem;'>28次</span>
          ，预警率为<span style='color:#00ffff;font-weight: bold;font-size: 0.21rem;'>34.48%</span>。
          本月平均水位比上月平均水位<span style='color:red;font-weight: bold;font-size: 0.21rem;'>下降0.303m</span>。
        </div>
        <div style="color:rgba(255, 255, 255,0.7);position:absolute;right: 0rem;bottom:0rem;">更新于：
          2021-12-03 19:25:54
        </div>
      </div>
    </div>
    <div class="rightBg homebg">
      <div class="homeTitle">报警信息</div>
      <div class="borderdivLevel" style="height: calc(100% - 0.2rem); width: 100%;overflow: hidden;">
        <div style="position: relative;" :style="{ top: noticeTopsb + 'px' }" :class="{ transitionTop: isActivesb }">
          <div v-for='(itema, index) in datalist1' :key='index' :id="'pipeRightTop' + index + 1" class='pipeRightMidBot'
            style="height:100%;margin-left: 0.1rem;cursor: pointer;overflow: hidden;padding: 0% 0% 0% 0%;">
            <div style="float: left;">
              <div style='position: relative;'>
                <Tooltip class="setTips" :content="itema.shortname" placement="right">
                  <img v-if="itema.status == 1 && (itema.shortname == '超声波液位仪' || itema.shortname == '压力式液位仪')"
                    style="margin-bottom: 15px;margin-top: 5px;height: 20px;width: 20px;"
                    :src="require('@/assets/static/img/map/ic_flowmeter_online2.png')" />
                  <img v-if="itema.status == 0 && (itema.shortname == '超声波液位仪' || itema.shortname == '压力式液位仪')"
                    style="margin-bottom: 15px;margin-top: 5px;height: 20px;width: 20px;"
                    :src="require('@/assets/static/img/map/ic_flowmeter_online2.png')" />
                </Tooltip>
              </div>
            </div>

            <Row style="margin-left: 0.35rem;">
              <Col span="12">
              <span class="pipespanvaluetitle">{{ itema.name }}</span>
              </Col>
              <Col span="12">
              <!-- <span class="pipespantitle">报警时间:</span> -->
              <span class="pipespanvalue">{{ itema.stime }}</span>
              <!-- <span class="pipespanvalue">{{itema.etime}}</span> -->
              </Col>
              <Col span="12">
              <span class="pipespantitle">报警时长:</span>
              <span class="pipespanvalue">{{ itema.count }}</span>
              <span class="pipespantitle">(分钟)</span>
              </Col>
              <Col span="12">
              <span class="pipespantitle">报警水位:</span>
              <span class="pipespanvalue">{{ itema.level_height.toFixed(3) }}</span>
              <span class="pipespantitle">(米)</span>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
    <div class="rightBg homebg">
      <div class="homeTitle">本月水位趋势图</div>
      <div class="unitSelect">
        <!-- <DatePicker size="small" type="month" placeholder="" style="width: 1.1rem" v-model="dateTime"></DatePicker> -->
        <Select v-model="check_name" size="small">
          <Option value="1#站点">1#站点</Option>
          <Option value="2#站点">2#站点</Option>
          <Option value="3#站点">3#站点</Option>
          <Option value="4#站点">4#站点</Option>
        </Select>
      </div>
      <div id="yy_overview_volume_right1" style="height: calc(100% - 0.2rem);width:100%;"></div>
    </div>

    <div class="rightBg homebg">
      <div class="homeTitle">预警情况</div>
      <div class="unitSelect">
        <DatePicker size="small" type="month" placeholder="" v-model="dateTime"></DatePicker>
      </div>
      <div id="yy_overview_volume_right2" style="height: calc(100% - 0.2rem);"></div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      dateTime: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),

      check_name: "1#站点",

      timersb: {},
      isActivesb: true,
      noticeTopsb: 0,
      datalist1: []
    };
  },
  created() {
    this._getLess('/view/homepageOverView.less');
  },
  methods: {
    settimeoutss() {
      let _this = this;
      let list = _this.datalist1 = [
        {
          "name": "1#站点",
          "shortname": "压力式液位仪",
          "status": 1,
          "id": 6361664,
          "stime": "2021-11-10 14:40:02",
          "etime": "2021-11-10 15:03:02",
          "level_height": 2.658,
          "count": 23
        },
        {
          "name": "2#站点",
          "shortname": "压力式液位仪",
          "status": 1,
          "id": 6361745,
          "stime": "2021-11-10 14:50:01",
          "etime": "2021-11-10 15:13:02",
          "count": 21,
          "level_height": 4.129,
        },
        {
          "name": "3#站点",
          "shortname": "压力式液位仪",
          "status": 1,
          "id": 6361608,
          "stime": "2021-11-10 14:30:27",
          "etime": "2021-11-10 15:38:02",
          "count": 8,
          "level_height": 6.673,
        },
        {
          "name": "4#站点",
          "shortname": "压力式液位仪",
          "status": 1,
          "id": 6361609,
          "stime": "2021-11-10 14:30:37",
          "etime": "2021-11-10 15:39:02",
          "count": 9,
          "level_height": 4.993,
        },
        {
          "name": "5#站点",
          "shortname": "压力式液位仪",
          "status": 1,
          "id": 6361620,
          "stime": "2021-11-10 14:30:26",
          "etime": "2021-11-10 15:41:02",
          "count": 11,
          "level_height": 4.477,
        },
      ];
      let index = 1;
      if (list.length > 3) {
        _this.timersb = setInterval(() => {
          if (index > _this.datalist1.length) {
            index = 1;
          }
          let dom = document.getElementsByClassName("pipeRightMidBot");
          if (dom.length > 0) dom[0].classList.remove("active");
          _this.datalist1.push(list[index - 1]);
          if (dom.length > 0) {
            dom[0].classList.add("active");
            _this.noticeTopsb = -dom[0].clientHeight;
          }
          _this.isActivesb = true;
          setTimeout(function () {
            _this.datalist1.splice(0, 1);
            _this.isActivesb = false;
            _this.noticeTopsb = 0;
            if (dom.length > 0) dom[0].classList.remove("active");
          }, 2000);
          index++;
        }, 5000);
      }
    },
    initCharts1() {
      let syswqs = [
        0.131,
        0.135,
        0.193,
        0.171,
        0.135,
        0.125,
        0.12,
        0.119,
        0.119,
        0.131,
        0.131,
        0.122,
        0.14,
        0.136,
        0.141,
        0.137,
        0.144,
        0.153,
        0.141,
        0.119,
        0.107,
        0.107,
        0.109,
        0.109,
        0.121,
        0.125,
        0.124,
        0.117,
        0.106,
        0.11
      ]
      let byswqs = [
        0.102,
        0.112,
        0.181,
        0.223,
        0.193,
        0.145,
        0.127,
        0.216,
        0.192,
        0.164,
        0.137,
        0.141,
        0.135,
        0.125,
        0.131,
        0.142,
        0.208,
        0.22,
        0.219,
        0.193,
        0.149,
        0.135,
        0.135,
        0.124,
        0.114,
        0.167,
        0.18,
        0.55,
        0.256,
        0.215,
        0.215,
      ]
      let byjzqs = [
        10.621,
        10.619,
        9.817,
        9.817,
        9.776,
        9.862,
        9.817,
        9.549,
        9.549,
        9.766,
        9.817,
        9.764,
        9.817,
        9.817,
        9.817,
        9.817,
        9.817,
        9.817,
        9.817,
        9.817,
        9.625,
        9.324,
        9.74,
        9.031,
        9.039,
        9.032,
        9.633,
        9.547,
        9.546,
        9.546,
        9.546
      ]
      let colorlist = ["#f6ff00", "#006cf1", "#00ffff"]
      let xdata = [], legendata = ["本月平均水位", "上月平均水位", "本月极值水位"];

      for (let i = 1; i < 31; i++) {
        xdata.push(i)
      }

      let Option = {
        title: {},
        tooltip: {
          trigger: "axis"
        },
        calculable: true,
        legend: {
          x: "center",
          y: "8%",
          textStyle: {
            color: "#91c8ee"
          },
          data: legendata
        },
        xAxis: [
          {
            type: "category",
            data: xdata,
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
          }
        ],
        grid: {
          top: "40rem",
          left: "5rem",
          right: "5rem",
          bottom: "5rem",
          containLabel: true
        },
        yAxis: [
          {
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
            // max: Math.max.apply(null, data.map(item => item.rtd)).toFixed(0),
            // min: Math.min.apply(null, data.map(item => item.rtd)).toFixed(0),
            // name: "液位高程(mm)",
            type: "value",
            splitLine: {
              show: false,
              lineStyle: {
                color: "#115db0"
              }
            },
            axisLabel: {
              textStyle: {
                color: "#00cffe"
              }
            }
          }
        ],
        series: [
          {
            name: legendata[0],
            type: "line",
            smooth: null,
            data: byswqs,
            color: colorlist[0],
          },
          {
            name: legendata[1],
            type: "line",
            smooth: null,
            data: syswqs,
            color: colorlist[2],
          },
          {
            name: legendata[2],
            type: "line",
            smooth: null,
            data: byjzqs,
            color: colorlist[3],
          },
        ]
      };
      let myChart = echarts.init(document.getElementById("yy_overview_volume_right1"));
      myChart.clear();
      myChart.setOption(Option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    initCharts2() {
      let data = [
        {
          "pqmc": "1#站点",
          "yjzds": 23,
          "zds": 66,
        },
        {
          "pqmc": "2#站点",
          "yjzds": 10,
          "zds": 28,
        },
        {
          "pqmc": "3#站点",
          "yjzds": 33,
          "zds": 76,
        },
        {
          "pqmc": "4#站点",
          "yjzds": 19,
          "zds": 88,
        },
        {
          "pqmc": "5#站点",
          "yjzds": 45,
          "zds": 96,
        },
        {
          "pqmc": "6#站点",
          "yjzds": 11,
          "zds": 46,
        },
        {
          "pqmc": "7#站点",
          "yjzds": 12,
          "zds": 27,
        },
        {
          "pqmc": "8#站点",
          "yjzds": 43,
          "zds": 92,
        },
        {
          "pqmc": "9#站点",
          "yjzds": 15,
          "zds": 42,
        },
        {
          "pqmc": "10#站点",
          "yjzds": 12,
          "zds": 61,
        },
      ]
      var xData = [], ydata1 = [], ydata2 = [];
      for (var i = 0; i < data.length; i++) {
        xData.push(data[i].pqmc);
        ydata1.push(data[i].yjzds);
        ydata2.push(data[i].zds - data[i].yjzds);
      }

      let Option = {
        "tooltip": {
          "trigger": "axis",
        },
        "grid": {
          top: "40rem",
          left: "10rem",
          right: "10rem",
          bottom: "5rem",
          containLabel: true
        },
        "legend": {
          x: "center",
          y: "3%",
          textStyle: {
            color: "#91c8ee"
          },
          "data": ['预警数', '正常数']
        },
        "xAxis": [{
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
        "yAxis": [{
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
          type: "value",
          splitLine: {
            show: false,
            lineStyle: {
              color: "#115db0"
            }
          },
          axisLabel: {
            textStyle: {
              color: "#00cffe"
            }
          }
        }],
        "series": [{
          "name": "预警数",
          "type": "bar",
          "stack": "总数",
          "itemStyle": {
            "normal": {
              "color": "#f59a23",
              "label": {
                "show": false,
              }
            }
          },
          "data": ydata1
        },

        {
          "name": "正常数",
          "type": "bar",
          "stack": "总数",
          "itemStyle": {
            "normal": {
              "color": "#70b603",
              "label": {
                "show": false,
              }
            }
          },
          "data": ydata2
        },
        {
          "name": "预警总数",
          "type": "line",
          symbolSize: 10,
          symbol: 'circle',
          "itemStyle": {
            "normal": {
              "color": "rgba(252,230,48,1)",
              "barBorderRadius": 0,
              "label": {
                "show": true,
                "position": "top",
                formatter: function (p) {
                  return p.value > 0 ? (p.value) : '';
                }
              }
            }
          },
          "data": data.map(item => item.zds),
        },
        ]
      }
      let myChart = echarts.init(document.getElementById("yy_overview_volume_right2"));
      myChart.clear();
      myChart.setOption(Option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
  mounted() {
    this.settimeoutss();
    this.initCharts1();
    this.initCharts2();
  },
  beforeDestroy() {
    clearInterval(this.timersb);
  },
};
</script>

<style lang="less">
.overview_right {
  .rightBg {
    width: 100%;
    height: calc(~"100% / 4 - 0.1rem");
    margin-bottom: 0.1rem;
  }

  .ivu-input-suffix i {
    line-height: 24px !important;
  }

  .ivu-input-suffix {
    width: 24px !important;
    height: 24px !important;
  }

  .ivu-input-with-suffix {
    height: 24px !important;
  }

  .ivu-input {
    height: 24px !important;
  }

  .pipespantitle {
    font-size: 0.16rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .pipespanvalue {
    color: #ffe400;
    font-size: 0.16rem;
  }

  .pipespanvaluetitle {
    color: #0ff;
    font-size: 0.16rem;
  }

  .ivu-select-item,
  .ivu-select {
    font-size: 0.12rem !important;
    font-family: none !important;
  }

  .ivu-carousel-item {
    height: 100% !important;
  }
}
</style>
