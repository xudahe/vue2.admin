<template>
  <div class="dutyPlan">
    <!-- 操作栏 -->
    <Row type="flex" justify="space-around" style="height: 100%;width:100%;">
      <Col :span="10" class="calendar-con">
      <!-- 日历栏 -->
      <ButtonGroup>
        <Button type="primary" size="small" @click="reduceMonth()">
          上个月
        </Button>
        <Button type="primary" size="small" @click="returnToday()">
          今天
        </Button>
        <Button type="primary" size="small" @click="addMonth()">
          下个月
        </Button>
      </ButtonGroup>
      </Col>
      <Col :span="4" class="month-con">
      <span class="month">
        {{ time.year }}年{{ time.month + 1 > 9 ? time.month + 1 : '0' + (time.month + 1) }}月
      </span>
      </Col>
      <Col :span="10" class="btndiv-con">
      <Button type="primary" size="small" @click="tabchange">{{tabName}}</Button>
      <Button type="primary" size="small" v-show="!isEdit && tabName == '列表'" @click="editDuty">编辑值班信息</Button>
      <Button type="primary" size="small" v-show="isEdit && tabName == '列表'" @click="cancelDuty">取消</Button>
      <Button type="primary" size="small" v-show="isEdit && tabName == '列表'" @click="saveDuty">保存</Button>
      <Button type="primary" size="small" v-show="tabName == '日历'">新增</Button>
      </Col>
      <Col :span="24" style="height:calc(100% - 0.6rem);width:100%;">
      <!-- 日历形式 -->
      <monthpicker v-if="tabName != '日历'" :time="time" :isEdit="isEdit"></monthpicker>
      <!-- 列表形式 -->
      <dutylist v-if="tabName == '日历'" :time="time"></dutylist>
      </Col>
    </Row>
  </div>
</template>

<script>
import monthPickers from './monthPicker.vue';
import dutyList from './dutyTable.vue';

export default {
  name: "duty_calendar",
  components: {
    monthpicker: monthPickers,
    dutylist: dutyList,
  },
  data() {
    return {
      tabName: "列表",
      time: {
        year: new Date().getFullYear(),
        month: new Date().getMonth()
      },
      isEdit: false,
    }
  },
  created() { },
  mounted() {

  },
  methods: {
    tabchange() {
      this.tabName = this.tabName == '日历' ? '列表' : '日历';
    },
    reduceMonth() {
      if (this.time.month > 0) {
        this.time.month = this.time.month - 1
      } else {
        this.time.month = 11
        this.time.year = this.time.year - 1
      }
    },
    addMonth() {
      if (this.time.month < 11) {
        this.time.month = this.time.month + 1
      } else {
        this.time.month = 0
        this.time.year = this.time.year + 1
      }
    },
    returnToday() {
      this.time = {
        year: new Date().getFullYear(),
        month: new Date().getMonth()
      }
    },
    editDuty() {
      this.isEdit = true;
      bus.$emit('saveDuty', 'edit');
    },
    cancelDuty() {
      this.isEdit = false;
      bus.$emit('saveDuty', 'cancel');
    },
    saveDuty() {
      this.isEdit = false;
      bus.$emit('saveDuty', 'save');
    },
  }
}
</script>
<style lang="less" scoped>
.dutyPlan {
  width: 100%;
  height: 100%;
  padding: 0.1rem;
  // overflow: auto;
}
.calendar-con {
  padding-left: 0.05rem;
}
.month-con {
  text-align: center;
  font-weight: 700;
  font-size: 0.18rem;
  .month {
    margin: 0 0.1rem;
  }
}
.date-con {
  text-align: center;
  font-size: 0.2rem;
  font-weight: 700;
}
.btndiv-con {
  padding-right: 0.05rem;
  margin-bottom: 0.2rem;
  .ivu-btn {
    float: right;
    margin-left: 0.1rem;
  }
}
</style>

