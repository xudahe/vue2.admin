<template lang="html">
  <div class="cron_month" :val="value_">
    <div>
      <el-radio v-model="type" label="5" size="mini" border>不指定</el-radio>
    </div>
    <div>
      <el-radio v-model="type" label="1" size="mini" border>每月</el-radio>
      <span style="margin-left: 10px; margin-right: 5px;">允许的通配符[, - * /]</span>
    </div>
    <div>
      <el-radio v-model="type" label="2" size="mini" border>周期</el-radio>
      <span style="margin-left: 10px; margin-right: 5px;">从</span>
      <el-input-number @change="type = '2'" v-model="cycle.start" :min="1" :max="12" size="mini"
        style="width: 100px;"></el-input-number>
      <span style="margin-left: 5px; margin-right: 5px;">至</span>
      <el-input-number @change="type = '2'" v-model="cycle.end" :min="2" :max="12" size="mini"
        style="width: 100px;"></el-input-number>
      月
    </div>
    <div>
      <el-radio v-model="type" label="3" size="mini" border>循环</el-radio>
      <span style="margin-left: 10px; margin-right: 5px;">从</span>
      <el-input-number @change="type = '3'" v-model="loop.start" :min="1" :max="12" size="mini"
        style="width: 100px;"></el-input-number>
      <span style="margin-left: 5px; margin-right: 5px;">月开始，每</span>
      <el-input-number @change="type = '3'" v-model="loop.end" :min="1" :max="12" size="mini"
        style="width: 100px;"></el-input-number>
      月执行一次
    </div>
    <div>
      <el-radio v-model="type" label="4" size="mini" border>指定</el-radio>
      <el-checkbox-group v-model="appoint" style="margin-left: 10px;">
        <el-checkbox @change="type = '4'" v-for="i in 12" :key="i" :label="i.toString()"></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '*'
    }
  },
  data() {
    return {
      type: '1', // 类型
      cycle: { // 周期
        start: 0,
        end: 0
      },
      loop: { // 循环
        start: 0,
        end: 0
      },

      appoint: [] // 指定
    }
  },
  computed: {
    value_() {
      let result = []
      switch (this.type) {
        case '1': // 每秒
          result.push('*')
          break
        case '2': // 年期
          result.push(`${this.cycle.start}-${this.cycle.end}`)
          break
        case '3': // 循环
          result.push(`${this.loop.start}/${this.loop.end}`)
          break
        case '4': // 指定
          result.push(this.appoint.join(','))
          break
        default: // 不指定
          result.push('?')
          break
      };
      this.$emit('input', result.join(''))
      return result.join('')
    }
  },
  watch: {
    'value'(a, b) {
      this.updateVal()
    }
  },
  methods: {
    updateVal() {
      if (!this.value) {
        return
      }
      if (this.value === '?') {
        this.type = '5'
      } else if (this.value.indexOf('-') !== -1) { // 2周期
        if (this.value.split('-').length === 2) {
          this.type = '2'
          this.cycle.start = this.value.split('-')[0]
          this.cycle.end = this.value.split('-')[1]
        }
      } else if (this.value.indexOf('/') !== -1) { // 3循环
        if (this.value.split('/').length === 2) {
          this.type = '3'
          this.loop.start = this.value.split('/')[0]
          this.loop.end = this.value.split('/')[1]
        }
      } else if (this.value.indexOf('*') !== -1) { // 1每秒
        this.type = '1'
      } else { // *
        this.type = '4'
        this.appoint = this.value.split(',')
      }
    }
  },
  created() {
    this.updateVal()
  }
}
</script>

<style lang="css">
.cron_month div {}
</style>
