<template>
  <div style="width:100%;height:100%;">

    <promoter v-if="nodeConfig.type==0" :modelValue.sync="nodeConfig"></promoter>

    <approver v-if="nodeConfig.type==1" :modelValue.sync="nodeConfig"></approver>

    <send v-if="nodeConfig.type==2" :modelValue.sync="nodeConfig"></send>

    <branch v-if="nodeConfig.type==4" :modelValue.sync="nodeConfig">
      <template v-slot="slot">
        <node-wrap v-if="slot.node" :modelValue.sync="slot.node.childNode"></node-wrap>
      </template>
    </branch>

    <node-wrap v-if="nodeConfig.childNode" :modelValue.sync="nodeConfig.childNode"></node-wrap>
  </div>
</template>

<script>
import approver from './nodes/approver' //审批
import promoter from './nodes/promoter' //发起
import branch from './nodes/branch' //条件
import send from './nodes/send'     //抄送

export default {
  name: "nodeWrap",
  props: {
    modelValue: { type: Object, default: () => { } }
  },
  components: {
    approver,
    promoter,
    branch,
    send
  },
  data() {
    return {
      nodeConfig: this.modelValue
    }
  },
  watch: {
    modelValue: {
      handler: function (newVal, oldVal) {
        this.nodeConfig = newVal;
      },
      deep: true
    },
    nodeConfig: {
      handler: function (newVal, oldVal) {
        this.$emit("update:modelValue", newVal)
      },
      deep: true
    },
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style>
</style>
