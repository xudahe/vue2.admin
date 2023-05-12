<template lang="html">
  <div class="cron" :val="value_">
    <el-row>
      <el-col :span="24" style="text-align: center;padding: 5px ;" v-if="!isResult">
        <el-input size="mini" @focus="activeName = 's'" v-model="sVal" style="width: 13.5%;margin-right: 5px;"></el-input>
        <el-input size="mini" @focus="activeName = 'm'" v-model="mVal" style="width: 13.5%;margin-right: 5px;"></el-input>
        <el-input size="mini" @focus="activeName = 'h'" v-model="hVal" style="width: 13.5%;margin-right: 5px;"></el-input>
        <el-input size="mini" @focus="activeName = 'd'" v-model="dVal" style="width: 13.5%;margin-right: 5px;"></el-input>
        <el-input size="mini" @focus="activeName = 'month'" v-model="monthVal"
          style="width: 13.5%;margin-right: 5px;"></el-input>
        <el-input size="mini" @focus="activeName = 'week'" v-model="weekVal"
          style="width: 13.5%;margin-right: 5px;"></el-input>
        <el-input size="mini" @focus="activeName = 'year'" v-model="yearVal" style="width: 13.5%;"></el-input>
      </el-col>
      <el-col :span='24'>
        <el-tabs v-model="activeName" type="border-card">
          <el-tab-pane label="秒" name="s">
            <second-and-minute v-model="sVal" lable="秒"></second-and-minute>
          </el-tab-pane>
          <el-tab-pane label="分" name="m">
            <second-and-minute v-model="mVal" lable="分"></second-and-minute>
          </el-tab-pane>
          <el-tab-pane label="时" name="h">
            <hour v-model="hVal" lable="时"></hour>
          </el-tab-pane>
          <el-tab-pane label="日" name="d">
            <day v-model="dVal" lable="日"></day>
          </el-tab-pane>
          <el-tab-pane label="月" name="month">
            <month v-model="monthVal" lable="月"></month>
          </el-tab-pane>
          <el-tab-pane label="周" name="week">
            <week v-model="weekVal" lable="周"></week>
          </el-tab-pane>
          <el-tab-pane label="年" name="year">
            <year v-model="yearVal" lable="年"></year>
          </el-tab-pane>
          <el-tab-pane label="帮助" name="help">
            <div style="height:300px;overflow: auto;">
              Cron表达式结构
              <br />
              1.Cron表达式是一个字符串，字符串以5或6个空格隔开，分为6或7个域，每一个域代表一个含义。
              <br />
              2.Corn从左到右（用空格隔开）：{秒数} {分钟} {小时} {日期} {月份} {星期} {年份(可为空)}。
              <br /> <br />
              Cron字段值范围
              <br />
              1.{秒数}：值【0-59】或特殊字符【, - * /】
              <br />
              2.{分钟}：值【0-59】或特殊字符【, - * /】
              <br />
              3.{小时}：值【0-23】或特殊字符【, - * /】
              <br />
              4.{日期}：值【1-31】或特殊字符【,- * ? / L W C】
              <br />
              5.{月份}：值【1-12】或特殊字符【, - * /】
              <br />
              6.{星期}：值【1-7】或【SUN-SAT】（1=SUN）或特殊字符【, - * ? / L C #】
              <br />
              7.{年份}：值【1970~2099】或特殊字符【, - * /】
              <br /><br />
              Cron特殊字符解释
              <br />
              1.【*】：表示匹配该域的任意值。假如在{分钟}域使用*, 即表示每分钟都会触发事件。
              <br />
              2.【?】：只能用在{日期}{星期}两个域。它也匹配域的任意值，但实际不会。因为{日期}和{星期}会相互影响。例如想在每月的20日触发调度，不管20日到底是星期几，则只能使用如下写法： 13 13 15 20 *
              ?,
              其中最后一位只能用？，而不能使用*，如果使用*表示不管星期几都会触发，实际上并不是这样。
              <br />
              3.【-】：表示范围。例如在{分钟}域使用5-20，表示从5分到20分钟每分钟触发一次。
              <br />
              4.【/】：表示起始时间开始触发，然后每隔固定时间触发一次。例如在{分钟}域使用5/20,则意味着5分钟触发一次，而25，45等分别触发一次。
              <br />
              5.【,】：表示列出枚举值。例如：在{分钟}域使用5,20，则意味着在5和20分每分钟触发一次。
              <br />
              6.【L】：表示最后，只能出现在{星期}和{日期}域。如果在{星期}域使用5L,意味着在最后的一个星期四触发。
              <br />
              7.【W】：表示有效工作日(周一到周五),只能出现在{日期}域，系统将在离指定日期的最近的有效工作日触发事件。例如：在{日期}使用5W，如果5日是星期六，则将在最近的工作日：星期五，即4日触发。如果5日是星期天，则在6日(周一)触发；如果5日在星期一到星期五中的一天，则就在5日触发。另外一点，W的最近寻找不会跨过月份。
              <br />
              8.【LW】：这两个字符可以连用，表示在某个月最后一个工作日，即最后一个星期五。
              <br />
              9.【C】：只在{日期}和{星期}字段中使用，代表“Calendar”的意思。它的意思是计划所关联的日期，如果日期没有被关联，则相当于日历中所有日期。例如5C在日期字段中就相当于日历5日以后的第一天。1C在星期字段中相当于星期日后的第一天。
              <br />
              10.【#】：用于确定每个月第几个星期几，只能出现在{日期}域。例如在4#2，表示某月的第二个星期三。
              <br /> <br />
              常见Cron表达式
              <br />
              */5 * * * * ? 每隔5秒执行一次
              <br />
              0 */1 * * * ? 每隔1分钟执行一次
              <br />
              0 0 23 * * ? 每天23点执行一次
              <br />
              0 0 1 * * ? 每天凌晨1点执行一次
              <br />
              0 0 1 1 * ? 每月1号凌晨1点执行一次
              <br />
              0 0 23 L * ? 每月最后一天23点执行一次
              <br />
              0 0 1 ? * L 每周星期天凌晨1点实行一次
              <br />
              0 26,29,33 * * * ? 在26分、29分、33分执行一次
              <br />
              0 0 0,13,18,21 * * ? 每天的0点、13点、18点、21点都执行一次
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SecondAndMinute from './cron/secondAndMinute'
import hour from './cron/hour'
import day from './cron/day'
import month from './cron/month'
import week from './cron/week'
import year from './cron/year'
export default {
  name: "cron",
  props: {
    value: {
      type: String
    },
    isResult: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      activeName: 's',
      sVal: '',
      mVal: '',
      hVal: '',
      dVal: '',
      monthVal: '',
      weekVal: '',
      yearVal: '',
    }
  },
  watch: {
    'value'(a, b) {
      this.updateVal()
    }
  },
  computed: {
    value_() {
      if (!this.dVal && !this.weekVal) {
        return ''
      }
      if (this.dVal === '?' && this.weekVal === '?') {
        return this.$message.error('日期与星期不可以同时为“不指定”')
      }
      if (this.dVal !== '?' && this.weekVal !== '?') {
        return this.$message.error('日期与星期必须有一个为“不指定”')
      }
      let v = `${this.sVal} ${this.mVal} ${this.hVal} ${this.dVal} ${this.monthVal} ${this.weekVal} ${this.yearVal}`
      if (v !== this.value) {
        this.$emit('input', v)
      }
      return v
    },
  },
  methods: {
    updateVal() {
      if (!this.value) {
        return
      }
      let arrays = this.value.split(' ')
      this.sVal = arrays[0]
      this.mVal = arrays[1]
      this.hVal = arrays[2]
      this.dVal = arrays[3]
      this.monthVal = arrays[4]
      this.weekVal = arrays[5]
      this.yearVal = arrays[6] == undefined ? '*' : arrays[6]
    },
  },
  created() {
    this.updateVal()
  },
  components: {
    SecondAndMinute, hour, day, month, week, year
  },
}
</script>

<style lang="less">
.cron {
  text-align: left;
  // padding: 0 10px;
  background: #fff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

  .el-checkbox {
    width: 39px;
    margin-right: 15px !important;
  }
}
</style>
