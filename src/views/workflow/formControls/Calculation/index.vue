<template>
  <div>
    <el-cascader v-model="innerValue" v-bind="$props" v-on="$listeners"></el-cascader>
  </div>
</template>
<script>
import {transform} from '../../../../utils/money.js'
export default {
  model:{
    prop: 'value',
    event: 'change'
  },
  props:["cmpType", "tag", "tagIcon", "labelWidth", "calculationTarget", "regList", "changeTag", "proCondition", "formId", "renderKey", "layout", "value"],
  name: 'fc-calculation',
  data(){
    return {
      innerValue: this.value
    }
  },
  computed:{
    chinese(){
      return transform(this.innerValue)
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