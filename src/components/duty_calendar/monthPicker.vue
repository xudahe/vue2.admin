<template>
  <div style="height: 100%;width:100%;">
    <Spin size="large" fix v-show="spinShow"></Spin>
    <Row style="height: 100%;width:100%;">
      <Col :span="24" style="height:0.8rem;">
      <Row style="height: 100%;width:100%;">
        <Col :span="24" style="height: 100%;width:100%;">
        <div class="top-con">
          <div class="top" v-for="item in top" :key="item">星期{{ item }}</div>
        </div>
        </Col>
      </Row>
      </Col>

      <Row style="height: calc(100% - 0.8rem);width:100%;overflow: auto;">
        <!-- 右侧，周一到周五具体内容 -->
        <Col :span="24" style="height: 100%;width:100%;">
        <!-- 日历号 -->
        <div class="date-con">

          <!--@click="chenckDay = item.date"-->
          <div class="date" :class="[item.thisMonth,item.isToday,item.afterToday,(chenckDay == item.date ? 'isTodays':'')]" v-for="(item, index) in calendarArr" :key="index">
            <div class="dateing">{{ item.day }}</div>
            <div class="morning">
              <span style="float: left;">白：</span>
              <span v-show="!isEdit">{{item.whiteUser}}</span>
              <Select v-model="item.whiteUser" clearable size="small" style="width: calc(100% - 0.6rem);" filterable allow-create v-show="isEdit && item.afterToday" @on-change="whiteChange(item)" @on-clear="whiteClear(item)" placeholder="">
                <Option v-for="items in userList" :value="items.name" :key="items.id">{{ items.name }}</Option>
              </Select>
            </div>
            <div class="evening">
              <span style="float: left;">夜：</span>
              <span v-show="!isEdit">{{item.blackUser}}</span>
              <Select v-model="item.blackUser" clearable size="small" style="width: calc(100% - 0.6rem);" filterable allow-create v-show="isEdit && item.afterToday" @on-change="blackChange(item)" @on-clear="blackClear(item)" placeholder="">
                <Option v-for="items in userList" :value="items.name" :key="items.id">{{ items.name }}</Option>
              </Select>
            </div>
          </div>
        </div>
        </Col>
      </Row>
    </Row>
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
      },
    },
    isEdit: {
      type: Boolean,
      default: () => {
        return false
      },
    }
  },
  watch: {
    time: {
      handler: function (val, oldVal) {
        this.getfxuser_zb();
      },
      deep: true,
    },
  },
  data() {
    return {
      spinShow: false,
      calendarArr: [],
      top: ['一', '二', '三', '四', '五', '六', '日'],
      chenckDay: '',
      userList: [],

      white_s: [],
      black_s: [],
    }
  },
  created() {
    this.chenckDay = this.formatDateTime(new Date());
  },
  mounted() {
    let _this = this;
    this.getfxuser_zb();

    bus.$off("saveDuty").$on("saveDuty", function (params) {
      if (params == 'save') {
        _this.saveDuty();
      }
      if (params == 'cancel') {
        _this.visibleCalendar(_this.white_s, _this.black_s);
      }
    });
  },
  methods: {
    formatDateTime(datastr) {
      if (datastr == '') return '--';
      var date = new Date(datastr);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      var h = date.getHours();
      var minute = date.getMinutes();
      minute = minute < 10 ? ('0' + minute) : minute;
      return y + '-' + m + '-' + d;
    },
    getfxuser_zb() {
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

      this.spinShow = false;
      this.userList = source.filter((item, index) => {
        return source.findIndex(item1 => item1.name == item.name) == index
      })
      this.white_s = source.filter(item => item.zbtype == '白班') && [];
      this.black_s = source.filter(item => item.zbtype == '夜班') && [];
      this.visibleCalendar();
    },
    whiteChange(value) {
      if (value.whiteUser == '' || value.whiteUser == undefined) return;
      let item = this.userList.filter(item => item.name == value.whiteUser)[0]
      // value.white = this.userList.filter(item => item.name == value.whiteUser)[0]
      value.white = {
        dbleader: item.dbleader,
        dbphone: item.dbphone,
        fxzl: item.fxzl,
        id: value.white.id !== '' ? value.white.id : '', //id为空代表新增,不为空代表编辑
        name: item.name,
        tsdh: item.tsdh,
        zbphone: item.zbphone,
        zbrz: item.zbrz,
        zbtime: item.zbtime,
        zbtype: item.zbtype,
      }
    },
    blackChange(value) {
      if (value.blackUser == '' || value.blackUser == undefined) return;

      let item = this.userList.filter(item => item.name == value.blackUser)[0]
      // value.black = this.userList.filter(item => item.name == value.blackUser)[0]
      value.black = {
        dbleader: item.dbleader,
        dbphone: item.dbphone,
        fxzl: item.fxzl,
        id: value.black.id !== '' ? value.black.id : '',
        name: item.name,
        tsdh: item.tsdh,
        zbphone: item.zbphone,
        zbrz: item.zbrz,
        zbtime: item.zbtime,
        zbtype: item.zbtype,
      }
    },
    whiteClear(value) {
      value.whiteUser = ""
    },
    blackClear(value) {
      value.blackUser = ""
    },
    // 获取当前月份显示日历,共42天
    visibleCalendar() {
      // 获取今天的年月日
      const today = new Date()
      today.setHours(0)
      today.setMinutes(0)
      today.setSeconds(0)
      today.setMilliseconds(0)

      const calendarArr = []

      // 获取当前月份第一天
      const currentFirstDay = new Date(this.time.year, this.time.month, 1)
      // 获取第一天是周几（等于0的话相当于周日，也就是7）
      const weekDay = currentFirstDay.getDay() == 0 ? 7 : currentFirstDay.getDay();
      // 用当前月份第一天减去周几前面几天，就是看见的日历的第一天
      const startDay = currentFirstDay - (weekDay - 1) * 24 * 3600 * 1000
      // 我们统一用42天来显示当前显示日历
      for (let i = 0; i < 42; i++) {
        const date = new Date(startDay + i * 24 * 3600 * 1000)
        const formDate = this.formatDateTime(date)

        const list1 = this.white_s.filter(item => item.zbtime == formDate);
        const list2 = this.black_s.filter(item => item.zbtime == formDate);
        const white1 = list1.length > 0 ? JSON.parse(JSON.stringify(list1[0])) : { name: "" };
        const black1 = list2.length > 0 ? JSON.parse(JSON.stringify(list2[0])) : { name: "" };

        calendarArr.push({
          date: formDate,
          year: date.getFullYear(),
          month: date.getMonth(),
          day: date.getDate(),
          // 是否在当月
          thisMonth: date.getFullYear() === currentFirstDay.getFullYear() && date.getMonth() === currentFirstDay.getMonth() ? 'thisMonth' : '',
          // 是否是今天
          isToday: date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate() ? 'isToday' : '',
          // 是否在今天之后(不包含今天)
          afterToday: date.getTime() >= today.getTime() ? 'afterToday' : '',
          whiteUser: white1.name,//值班人(白班)
          blackUser: black1.name,//值班人(夜班)
          white: white1, //白班数据 （id为空代表新增,不为空代表编辑）
          black: black1, //夜班数据
        })
      }

      this.spinShow = false;
      this.calendarArr = JSON.parse(JSON.stringify(calendarArr));
    },
    saveDuty() {

      for (let i = 0; i < this.calendarArr.length; i++) {
        let item = this.calendarArr[i];
        if (item.whiteUser != '' && item.whiteUser != undefined) {
          if (item.white.id == '') {
            //调用新增接口
          } else {
            //调用编辑接口
          }
        } else {
          if ((item.whiteUser == '' || item.whiteUser == undefined) && item.white.id != '') {
            //调用删除接口
          }
        }

        if (item.blackUser != '' && item.blackUser != undefined) {
          if (item.black.id == '') {

          } else {

          }
        } else {
          if ((item.blackUser == '' || item.blackUser == undefined) && item.black.id != '') {

          }
        }
      }
    },
  },
}
</script>
<style lang="less" scoped>
.top-con {
  display: flex;
  align-items: center;
  .top {
    width: 14.285%;
    color: #fff;
    background-color: #3b8b83;
    padding: 0.1rem 0;
    margin: 0.05rem;
    text-align: center;
  }
}
.date-con {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;

  .date {
    height: 16.6%;
    width: 14.285%;
    text-align: center;
    // padding: 0.1rem;
    border: 3px solid transparent;

    .dateing {
      cursor: pointer;
      padding: 0.1rem 0;
      height: 33.3%;
      line-height: 33.3%;
      color: #95fbdf;
      font-weight: 600;
      background-color: rgba(0, 64, 73);
    }
    .morning {
      padding: 0.05rem 0.2rem;
      // height: 0.7rem;
      height: 33.3%;
      color: #f1c906;
      background-color: rgba(5, 45, 57);
    }
    .evening {
      color: #3fcbb7;
      padding: 0.05rem 0.2rem;
      // height: 0.7rem;
      height: 33.3%;
      background-color: rgba(5, 45, 57);
    }
  }
  .thisMonth {
    .morning {
      background-color: rgba(0, 122, 128, 0.8);
    }
    .evening {
      background-color: rgba(0, 122, 128, 0.8);
    }
  }
  .isTodays {
    border: 2px solid rgba(94, 193, 169);
    // -webkit-box-shadow: inset 0 0 7px rgba(255, 0, 0, 0.5);
    // -moz-box-shadow: inset 0 0 7px rgba(255, 0, 0, 0.5);
    // box-shadow: inset 0 0 7px rgba(255, 0, 0, 0.5);
  }
  .isToday {
    font-weight: 700;

    .dateing {
      background-color: rgba(0, 64, 73);
    }
    .morning {
      background-color: rgba(0, 122, 128);
    }
    .evening {
      background-color: rgba(0, 122, 128);
    }
  }
}
.tip-con {
  // margin-top: 0.9rem;
  .tip {
    margin-top: 0.1rem;
    width: 100%;
  }
}
</style>

