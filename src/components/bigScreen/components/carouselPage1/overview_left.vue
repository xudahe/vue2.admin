<template>
  <div class="overview_left fade-in-right" style="width: 100%;height: 100%;">
    <div class="leftBg homebg">
      <div class="homeTitle">设施统计</div>
      <div class="drainage" style="height:calc(100% - 0.2rem);padding:0 0.1rem;">
        <Carousel autoplay :autoplay-speed="8000" arrow="never" style="height: 100%;">
          <CarouselItem style="height: 100%;">
            <Row class="row-bottom">
              <Col span="8">
              <img :src="require('@/assets/static/img/newhome/泵站.png')" class="draimg11" />
              <div class="valdwnw11">
                299
              </div>
              <div class="txtdw">雨水管(km)</div>
              </Col>
              <Col span="8">
              <img :src="require('@/assets/static/img/newhome/泵站.png')" class="draimg11" />
              <div class="valdwnw11">
                212
              </div>
              <span class="txtdw">污水管(km)</span>
              </Col>
              <Col span="8">
              <img :src="require('@/assets/static/img/newhome/泵站.png')" class="draimg11" />
              <div class="valdwnw11">
                42.4
              </div>
              <div class="txtdw">合流管(km)</div>
              </Col>
            </Row>
            <Row class="row-top">
              <Col span="8">
              <img :src="require('@/assets/static/img/newhome/泵站.png')" class="draimg11" />
              <div class="valdwnw11" style="color:rgb(149, 255, 133);">
                483.4
              </div>
              <span class="txtdw">管道(Km)</span>
              </Col>
              <Col span="8" style="cursor: pointer;">
              <img :src="require('@/assets/static/img/newhome/泵站.png')" class="draimg11" />
              <div class="valdwnw11" style="color:rgb(149, 255, 133);">
                0
              </div>
              <span class="txtdw">截流井(个)</span>
              </Col>
              <Col span="8">
              <img :src="require('@/assets/static/img/newhome/泵站.png')" class="draimg11" />
              <div class="valdwnw11" style="color:rgb(149, 255, 133);">
                99
              </div>
              <span class="txtdw">混接井(个)</span>
              </Col>
            </Row>
          </CarouselItem>
          <CarouselItem>
            <Row class="row-bottom">
              <Col span="8" style="cursor: pointer;">
              <img :src="require('@/assets/static/img/newhome/泵站.png')" class="draimg11" />
              <div class="valdwnw11" style="color:rgb(243, 127, 127);">
                46
              </div>
              <span class="txtdw">闸门(个)</span>
              </Col>
              <Col span="8" style="cursor: pointer;">
              <img :src="require('@/assets/static/img/newhome/泵站.png')" class="draimg11" />
              <div class="valdwnw11" style="color:rgb(243, 127, 127);">
                11
              </div>
              <div class="txtdw">泵站(个)</div>
              </Col>
              <Col span="8" style="cursor: pointer;">
              <img :src="require('@/assets/static/img/newhome/泵站.png')" class="draimg11" />
              <div class="valdwnw11" style="color:rgb(243, 127, 127);">
                593
              </div>
              <div class="txtdw">排口(个)</div>
              </Col>
            </Row>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
    <div class="leftBg homebg">
      <div class="homeTitle">雨水管线</div>
      <div class="unitSelect">
        <Select v-model="pipelineType1" @on-change="selectType1" size="small">
          <Option value="按管径类型统计">按管径类型统计</Option>
          <Option value="按管养单位统计">按管养单位统计</Option>
          <Option value="按设施类型统计">按所属区域统计</Option>
        </Select>
      </div>
      <div id="yy_overview_volume_left1" style="height: calc(100% - 0.2rem);"></div>
    </div>
    <div class="leftBg homebg">
      <div class="homeTitle">污水管线</div>
      <div class="unitSelect">
        <Select v-model="pipelineType2" @on-change="selectType2" size="small">
          <Option value="按管径类型统计">按管径类型统计</Option>
          <Option value="按管养单位统计">按管养单位统计</Option>
          <Option value="按设施类型统计">按所属区域统计</Option>
        </Select>
      </div>
      <div id="yy_overview_volume_left2" style="height: calc(100% - 0.2rem);"></div>
    </div>
    <div class="leftBg homebg">
      <div class="homeTitle">合流管线</div>
      <div class="unitSelect">
        <Select v-model="pipelineType3" @on-change="selectType3" size="small">
          <Option value="按管径类型统计">按管径类型统计</Option>
          <Option value="按管养单位统计">按管养单位统计</Option>
          <Option value="按设施类型统计">按所属区域统计</Option>
        </Select>
      </div>
      <div id="yy_overview_volume_left3" style="height: calc(100% - 0.2rem);"></div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      pipelineType1: "按管径类型统计",
      pipelineType2: "按管径类型统计",
      pipelineType3: "按管径类型统计",
      piKey: "雨水管线",
      pipeData: {
        "雨水管线": {
          "按管径类型统计": [
            {
              "id": 3,
              "category": "雨水管线",
              "type": "按管径类型统计",
              "title": "小型管道",
              "clength": 1374
            },
            {
              "id": 4,
              "category": "雨水管线",
              "type": "按管径类型统计",
              "title": "中型管道",
              "clength": 217
            },
            {
              "id": 5,
              "category": "雨水管线",
              "type": "按管径类型统计",
              "title": "大型管道",
              "clength": 49
            },
            {
              "id": 6,
              "category": "雨水管线",
              "type": "按管径类型统计",
              "title": "特大型管道",
              "clength": 49
            }
          ],
          "按管养单位统计": [
            {
              "id": 7,
              "category": "雨水管线",
              "type": "按管养单位统计",
              "title": "金固",
              "clength": 193
            },
            {
              "id": 8,
              "category": "雨水管线",
              "type": "按管养单位统计",
              "title": "通达",
              "clength": 292
            },
            {
              "id": 9,
              "category": "雨水管线",
              "type": "按管养单位统计",
              "title": "属地",
              "clength": 62.7
            },
            {
              "id": 10,
              "category": "雨水管线",
              "type": "按管养单位统计",
              "title": "其它",
              "clength": 4.7
            }
          ],
          "按设施类型统计": [
            {
              "id": 1,
              "category": "雨水管线",
              "type": "按设施类型统计",
              "title": "市政管线",
              "clength": 592
            },
            {
              "id": 2,
              "category": "雨水管线",
              "type": "按设施类型统计",
              "title": "片区管线",
              "clength": 1133
            }
          ]
        },
        "污水管线": {
          "按管径类型统计": [
            {
              "id": 13,
              "category": "污水管线",
              "type": "按管径类型统计",
              "title": "小型管道",
              "clength": 1449
            },
            {
              "id": 14,
              "category": "污水管线",
              "type": "按管径类型统计",
              "title": "中型管道",
              "clength": 77
            },
            {
              "id": 15,
              "category": "污水管线",
              "type": "按管径类型统计",
              "title": "大型管道",
              "clength": 32
            },
            {
              "id": 16,
              "category": "污水管线",
              "type": "按管径类型统计",
              "title": "特大型管道",
              "clength": 11
            }
          ],
          "按设施类型统计": [
            {
              "id": 11,
              "category": "污水管线",
              "type": "按设施类型统计",
              "title": "市政管线",
              "clength": 375
            },
            {
              "id": 12,
              "category": "污水管线",
              "type": "按设施类型统计",
              "title": "片区管线",
              "clength": 1219
            }
          ],
          "按管养单位统计": [
            {
              "id": 17,
              "category": "污水管线",
              "type": "按管养单位统计",
              "title": "水务集团",
              "clength": 248.3
            },
            {
              "id": 18,
              "category": "污水管线",
              "type": "按管养单位统计",
              "title": "其它",
              "clength": 126.7
            }
          ]
        },
        "合流管线": {
          "按管径类型统计": [
            {
              "id": 13,
              "category": "合流管线",
              "type": "按管径类型统计",
              "title": "小型管道",
              "clength": 1449
            },
            {
              "id": 14,
              "category": "合流管线",
              "type": "按管径类型统计",
              "title": "中型管道",
              "clength": 77
            },
            {
              "id": 15,
              "category": "合流管线",
              "type": "按管径类型统计",
              "title": "大型管道",
              "clength": 32
            },
            {
              "id": 16,
              "category": "合流管线",
              "type": "按管径类型统计",
              "title": "特大型管道",
              "clength": 11
            }
          ],
          "按设施类型统计": [
            {
              "id": 11,
              "category": "合流管线",
              "type": "按设施类型统计",
              "title": "市政管线",
              "clength": 375
            },
            {
              "id": 12,
              "category": "合流管线",
              "type": "按设施类型统计",
              "title": "片区管线",
              "clength": 1219
            }
          ],
          "按管养单位统计": [
            {
              "id": 17,
              "category": "合流管线",
              "type": "按管养单位统计",
              "title": "水务集团",
              "clength": 248.3
            },
            {
              "id": 18,
              "category": "合流管线",
              "type": "按管养单位统计",
              "title": "其它",
              "clength": 126.7
            }
          ]
        },
      },
    };
  },
  created() {

  },
  methods: {
    selectType1(value) {
      let colors = ["#f6ff00", "#006cf1", "#00ffff", "rgb(94,17,188)"];
      this.initCharts(this.pipeData['雨水管线'][value], 'yy_overview_volume_left1', colors);
    },
    selectType2(value) {
      let colors = ["rgb(55, 255, 17)", "rgb(149, 0, 45)", "#00ffff", "rgb(94, 17, 188)"];
      this.initCharts(this.pipeData['污水管线'][value], 'yy_overview_volume_left2', colors);
    },
    selectType3(value) {
      let colors = ['rgb(118, 32, 246)', 'rgb(243, 127, 127)', '#ffe019', 'rgb(198, 22, 68)'];
      this.initCharts(this.pipeData['合流管线'][value], 'yy_overview_volume_left3', colors);
    },
    initCharts(list, dom, colors) {
      if (list.length == 0) return;

      var pieData = [];
      var total = 0
      for (var i = 0; i < list.length; i++) {
        let item = {
          name: list[i].title,
          value: list[i].clength,
        };
        pieData.push(item)
        total = parseFloat(item.value) + parseFloat(total)
      }

      let unit = '公里'

      var Option2 = {
        // graphic: [
        //   {
        //     type: 'text',
        //     left: '53%',
        //     top: '8%',
        //     style: {
        //       text: '合计',
        //       fill: 'rgba(255,255,255,0.7)',
        //       width: 30,
        //       height: 30,
        //       fontSize: 13,
        //     }
        //   },
        //   {
        //     type: 'text',
        //     left: '80%',
        //     top: '8%',
        //     align: 'right',
        //     style: {
        //       text: total.toFixed(0),
        //       fill: 'rgb(255,255,255)',
        //       width: 20,
        //       height: 30,
        //       fontSize: 13,
        //       fontWeight: "bold",
        //     }
        //   },
        //   {
        //     type: 'text',
        //     left: '89%',
        //     top: '8%',
        //     style: {
        //       text: '公里',
        //       fill: 'rgb(255,255,255)',
        //       width: 30,
        //       height: 30,
        //       fontSize: 13,
        //     }
        //   },
        // ],
        //标题
        legend: {
          orient: "vertical",
          x: "45%",
          y: "center",
          data: pieData,
          icon: "circle",
          selectedMode: false, //选中去除

          formatter: function (name) {
            var target;
            pieData.forEach((item, i) => {
              if (item.name == name) {
                target = parseFloat(item.value).toFixed(2);
              }
            });
            let arr = [
              "{a|" + name.replace('雨水', '') + "}",
              "{b|" + target + unit + "}"
            ];
            return arr;
          },
          textStyle: {
            width: 165,
            rich: {
              a: {
                fontSize: 13,
                color: "rgb(255,255,255,0.7)"
              },
              b: {
                fontSize: 13,
                color: "#ffffff",
                align: "right"
              },
            }
          }
        },
        tooltip: {
          //提示框组件
          show: true,
          trigger: "item" //触发类型(饼状图片就是用这个)
        },
        color: colors,
        series: [
          {
            name: "长度占比",
            type: "pie",
            avoidLabelOverlap: false,
            radius: ["30%", "72%"], //环形内径和外径
            center: ["20%", "45%"],
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: 12,
                  fontWeight: "bold"
                }
              }
            },
            // radius: "25%",
            z: 100,
            data: pieData
          }
        ]
      };

      let myChart = echarts.init(document.getElementById(dom));
      myChart.clear();
      myChart.setOption(Option2, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
  mounted() {
    this.selectType1(this.pipelineType1)
    this.selectType2(this.pipelineType2)
    this.selectType3(this.pipelineType3)
  },
  beforeDestroy() { },
};
</script>

<style lang="less">
.overview_left {
  .leftBg {
    width: 100%;
    height: calc(~"100% / 4 - 0.1rem");
    margin-bottom: 0.1rem;
  }

  .drainage {
    .draimg11 {
      position: absolute;
      height: 0.45rem;
      width: 0.45rem;
      top: 0.05rem;
    }

    .row-top {
      margin-top: 1.5%;
      height: 48%;
    }
    .row-bottom {
      margin-top: 0.5%;
      height: 48%;
    }

    .valdwnw11 {
      font-family: "pmzdbtt";
      margin-left: 0.5rem;
      margin-bottom: -0.06rem;
      font-size: 0.26rem;
      color: #ffe019;
    }

    .txtdw {
      margin-left: 0.5rem;
      font-size: 0.16rem;
      color: rgba(255, 255, 255, 0.8);
    }

    .ivu-carousel-list {
      height: 100% !important;
    }
    .ivu-carousel-track.higher {
      height: 100% !important;
    }
    .ivu-carousel-dots-inside {
      bottom: 0px !important;
    }
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
