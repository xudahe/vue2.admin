<template>
  <div class="fc-amount">
    <el-input-number v-model="innerValue" v-bind="$props" v-on="$listeners"></el-input-number>
    <div class="explain-text" v-if="showChinese">大写：{{chinese}}</div>
  </div>
</template>
<script>
import {transform} from '../../../../utils/money.js'
export default {
  model:{
    prop: 'value',
    event: 'change'
  },
  props:["cmpType", "tag", "tagIcon", "precision", "labelWidth", "step-strictly", "controls", "controls-position", "regList", "changeTag", "proCondition", "showChinese", "formId", "renderKey", "layout", "value"],
  name: 'fc-amount',
  data(){
    return {
      innerValue: this.value
    }
  },
  computed:{
    chinese(){
      return this.showChinese ? transform(this.innerValue) : ''
    }
  },
  watch:{
    innerValue(val){
      this.$emit('change', +val.toFixed(2))
    }
  }
}
</script>
<style lang="less" scoped>
.explain-text {
  font-size: 12px;
  color: #aaa;
  line-height: 20px;
}
</style>