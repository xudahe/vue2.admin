<template>
  <div id="dutyList">
    <Spin size="large" fix v-if="spinShow"></Spin>
    <div style="margin: 1px;border: 1px solid #5b92de;margin-top: 5px;">
      <Table border stripe :columns="columns" :data="dataList" :height="tableHeight" highlight-row></Table>
      <Page show-total :total="page.total" :page-size="page.PageSize" :current="page.currentPage" @on-change="updatePage" ref="page" style="float: right;margin:5px 0"></Page>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    time: {
      type: Object,
      default: () => {
        return {
          year: new Date().getFullYear(),
          month: new Date().getMonth()
        }
      }
    }
  },
  watch: {
    time: {
      handler: function (val, oldVal) {
        this.getfxuser_zb();
      },
      deep: true
    }
  },
  data() {
    return {
      spinShow: false,
      tableHeight: 0,
      dataList: [],
      columns: [
        {
          key: "zbtime",
          title: "值班时间",
          align: "center",
        },
        {
          key: "name",
          title: "值班人",
          align: "center",
          render: (h, params) => {
            return h('div', [
              h('span', {},
                params.row.name + (params.row.zbphone != '' ? " - " + params.row.zbphone : "")
              ),
            ])
          }
        },
        {
          key: "zbtype",
          title: "类型",
          align: "center",
        },
        {
          key: "fxzl",
          title: "防汛指令",
          align: "center",
          width: 180,
        },
        {
          key: "zbrz",
          title: "值班日志",
          align: "center",
        },
        {
          key: "tsdh",
          title: "投诉电话和内容",
          align: "center",
        },
        {
          key: "dbleader",
          title: "负责人",
          align: "center",
          render: (h, params) => {
            return h('div', [
              h('span', {},
                params.row.dbleader + (params.row.dbphone != '' ? " - " + params.row.dbphone : "")
              ),
            ])
          }
        },
        {
          title: '操作',
          key: 'action',
          align: 'center',
          width: 80,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.DeleteDutyInfo(params.row.id)
                  }
                }
              }, '删除'),
            ]);
          }
        }
      ],
      page: {
        pageList: [],
        PageSize: 20,
        currentPage: 1,
        total: 0
      },
    }
  },
  created() { },
  mounted() {
    this.getfxuser_zb();

    let _this = this;
    
    let height = document.getElementById('dutyList').offsetHeight;
    this.tableHeight = height - 70;
    window.addEventListener("resize", function () {
      if (document.getElementById('dutyList')) {
        let hei = document.getElementById('dutyList').offsetHeight;
        _this.tableHeight = hei - 70;
      }
    });
  },
  methods: {
    getfxuser_zb() {
      let _this = this;
      let source = [
        {
          "id": 54,
          "zbtime": "2022-03-23",
          "name": "林昕",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "朱志荣",
          "dbphone": "",
          "zbphone": "15651987659",
          "zbtype": "白班"
        },
        {
          "id": 57,
          "zbtime": "2022-03-23",
          "name": "林昕",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "朱志荣",
          "dbphone": "",
          "zbphone": "15651987659",
          "zbtype": "白班"
        },
        {
          "id": 55,
          "zbtime": "2022-03-23",
          "name": "刘永斌",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "张强",
          "dbphone": "",
          "zbphone": "15651999559",
          "zbtype": "夜班"
        },
        {
          "id": 2,
          "zbtime": "2022-05-01",
          "name": "李飞飞",
          "fxzl": "",
          "zbrz": "123131",
          "tsdh": "",
          "dbleader": "何强",
          "dbphone": "13851527455",
          "zbphone": "18014800351",
          "zbtype": "夜班"
        },
        {
          "id": 3,
          "zbtime": "2022-05-02",
          "name": "刘永斌",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "张强",
          "dbphone": "18061883003",
          "zbphone": "15651999559",
          "zbtype": "夜班"
        },
        {
          "id": 5,
          "zbtime": "2022-05-04",
          "name": "丛良奇",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "邵志盛",
          "dbphone": "13357839049",
          "zbphone": "18114920622",
          "zbtype": "夜班"
        },
        {
          "id": 6,
          "zbtime": "2022-05-05",
          "name": "姚创宏",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "阚加力",
          "dbphone": "18912962233",
          "zbphone": "18361225228",
          "zbtype": "夜班"
        },
        {
          "id": 7,
          "zbtime": "2022-05-06",
          "name": "朱德晶",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "雎建波",
          "dbphone": "15951808877",
          "zbphone": "13913909372",
          "zbtype": "夜班"
        },
        {
          "id": 8,
          "zbtime": "2022-05-07",
          "name": "林昕",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "朱志荣",
          "dbphone": "18951763997",
          "zbphone": "15651987659",
          "zbtype": "夜班"
        },
        {
          "id": 10,
          "zbtime": "2022-05-09",
          "name": "刘丽",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "张强",
          "dbphone": "18061883003",
          "zbphone": "13851644020",
          "zbtype": "白班"
        },
        {
          "id": 11,
          "zbtime": "2022-05-09",
          "name": "沈康",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "张强",
          "dbphone": "18061883003",
          "zbphone": "18851810506",
          "zbtype": "夜班"
        },
        {
          "id": 12,
          "zbtime": "2022-05-10",
          "name": "张亚伟",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "邵志盛",
          "dbphone": "13357839049",
          "zbphone": "15050550582",
          "zbtype": "夜班"
        },
        {
          "id": 13,
          "zbtime": "2022-05-11",
          "name": "李飞飞",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "戴勇",
          "dbphone": "15806109800",
          "zbphone": "18014800351",
          "zbtype": "夜班"
        },
        {
          "id": 14,
          "zbtime": "2022-05-12",
          "name": "刘永斌",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "雎建波",
          "dbphone": "15951808877",
          "zbphone": "15651999559",
          "zbtype": "夜班"
        },
        {
          "id": 15,
          "zbtime": "2022-05-13",
          "name": "王宇峰",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "朱志荣",
          "dbphone": "18951763997",
          "zbphone": "18951011848",
          "zbtype": "夜班"
        },
        {
          "id": 17,
          "zbtime": "2022-05-15",
          "name": "赵莉",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "张强",
          "dbphone": "18061883003",
          "zbphone": "18751866967",
          "zbtype": "白班"
        },
        {
          "id": 18,
          "zbtime": "2022-05-15",
          "name": "高雪松",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "张强",
          "dbphone": "18061883003",
          "zbphone": "18951897011",
          "zbtype": "夜班"
        },
        {
          "id": 19,
          "zbtime": "2022-05-16",
          "name": "冯逸峰",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "邵志盛",
          "dbphone": "13357839049",
          "zbphone": "15007109480",
          "zbtype": "白班"
        },
        {
          "id": 20,
          "zbtime": "2022-05-16",
          "name": "丛良奇",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "邵志盛",
          "dbphone": "13357839049",
          "zbphone": "18114920622",
          "zbtype": "夜班"
        },
        {
          "id": 21,
          "zbtime": "2022-05-17",
          "name": "郁裕军",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "戴勇",
          "dbphone": "15806109800",
          "zbphone": "13645158181",
          "zbtype": "夜班"
        },
        {
          "id": 22,
          "zbtime": "2022-05-18",
          "name": "姚创宏",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "雎建波",
          "dbphone": "15951808877",
          "zbphone": "18361225228",
          "zbtype": "夜班"
        },
        {
          "id": 23,
          "zbtime": "2022-05-19",
          "name": "朱德晶",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "朱志荣",
          "dbphone": "18951763997",
          "zbphone": "13913909372",
          "zbtype": "夜班"
        },
        {
          "id": 25,
          "zbtime": "2022-05-21",
          "name": "何廷鼎",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "张强",
          "dbphone": "18061883003",
          "zbphone": "18151662009",
          "zbtype": "夜班"
        },
        {
          "id": 26,
          "zbtime": "2022-05-22",
          "name": "刘丽",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "邵志盛",
          "dbphone": "13357839049",
          "zbphone": "13851644020",
          "zbtype": "白班"
        },
        {
          "id": 27,
          "zbtime": "2022-05-22",
          "name": "沈康",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "邵志盛",
          "dbphone": "13357839049",
          "zbphone": "18851810506",
          "zbtype": "夜班"
        },
        {
          "id": 28,
          "zbtime": "2022-05-23",
          "name": "赵莉",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "戴勇",
          "dbphone": "15806109800",
          "zbphone": "18751866967",
          "zbtype": "白班"
        },
        {
          "id": 29,
          "zbtime": "2022-05-23",
          "name": "张亚伟",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "戴勇",
          "dbphone": "15806109800",
          "zbphone": "15050550582",
          "zbtype": "夜班"
        },
        {
          "id": 30,
          "zbtime": "2022-05-24",
          "name": "李飞飞",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "雎建波",
          "dbphone": "15951808877",
          "zbphone": "18014800351",
          "zbtype": "夜班"
        },
        {
          "id": 31,
          "zbtime": "2022-05-25",
          "name": "刘永斌",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "朱志荣",
          "dbphone": "18951763997",
          "zbphone": "15651999559",
          "zbtype": "夜班"
        },
        {
          "id": 33,
          "zbtime": "2022-05-27",
          "name": "高雪松",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "张强",
          "dbphone": "18061883003",
          "zbphone": "18951897011",
          "zbtype": "夜班"
        },
        {
          "id": 34,
          "zbtime": "2022-05-28",
          "name": "冯逸峰",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "邵志盛",
          "dbphone": "13357839049",
          "zbphone": "15007109480",
          "zbtype": "夜班"
        },
        {
          "id": 35,
          "zbtime": "2022-05-29",
          "name": "王宇峰",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "戴勇",
          "dbphone": "15806109800",
          "zbphone": "18951011848",
          "zbtype": "白班"
        },
        {
          "id": 36,
          "zbtime": "2022-05-29",
          "name": "丛良奇",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "戴勇",
          "dbphone": "15806109800",
          "zbphone": "18114920622",
          "zbtype": "夜班"
        },
        {
          "id": 37,
          "zbtime": "2022-05-30",
          "name": "郁裕军",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "雎建波",
          "dbphone": "15951808877",
          "zbphone": "13645158181",
          "zbtype": "白班"
        },
        {
          "id": 38,
          "zbtime": "2022-05-30",
          "name": "姚创宏",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "雎建波",
          "dbphone": "15951808877",
          "zbphone": "18361225228",
          "zbtype": "夜班"
        },
        {
          "id": 39,
          "zbtime": "2022-05-31",
          "name": "朱德晶",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "朱志荣",
          "dbphone": "18951763997",
          "zbphone": "13913909372",
          "zbtype": "夜班"
        },
        {
          "id": 4,
          "zbtime": "2022-05-03",
          "name": "何嵘",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "何强",
          "dbphone": "13851527455",
          "zbphone": "18951009098",
          "zbtype": "夜班"
        },
        {
          "id": 16,
          "zbtime": "2022-05-14",
          "name": "何嵘",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "何强",
          "dbphone": "13851527455",
          "zbphone": "18951009098",
          "zbtype": "夜班"
        },
        {
          "id": 24,
          "zbtime": "2022-05-20",
          "name": "林昕",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "何强",
          "dbphone": "13851527455",
          "zbphone": "15651987659",
          "zbtype": "夜班"
        },
        {
          "id": 9,
          "zbtime": "2022-05-08",
          "name": "何廷鼎",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "何强",
          "dbphone": "13851527455",
          "zbphone": "18151662009",
          "zbtype": "夜班"
        },
        {
          "id": 32,
          "zbtime": "2022-05-26",
          "name": "何嵘",
          "fxzl": "",
          "zbrz": "",
          "tsdh": "",
          "dbleader": "何强",
          "dbphone": "13851527455",
          "zbphone": "18951009098",
          "zbtype": "夜班"
        }
      ];

      _this.page.pageList = source;
      _this.page.total = Number(source.length);
      _this.updatePage(1);
    },
    updatePage(index) {
      this.page.currentPage = index;
      var _start = (index - 1) * this.page.PageSize;
      var _end = index * this.page.PageSize;
      this.dataList = this.page.pageList.slice(_start, _end);
    },
    DeleteDutyInfo(id) {
      var _self = this
      this.$Modal.confirm({
        title: '操作',
        content: '是否要删除此条记录',
        onOk: () => {

        }
      })
    },
  }
}
</script>
<style lang="less" scoped>
#dutyList {
  width: 100%;
  height: 100%;
}
</style>

