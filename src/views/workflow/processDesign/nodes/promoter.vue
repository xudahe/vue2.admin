<template>
  <div class="node-wrap">
    <div class="node-wrap-box start-node" @click="show">
      <div class="title" style="background: #576a95;">
        <i class="icon el-icon-user-solid"></i>
        <span>{{ nodeConfig.nodeName }}</span>
      </div>
      <div class="content">所有人</div>
    </div>
    <add-node :modelValue.sync="nodeConfig.childNode"></add-node>
    <el-drawer title="发起人" :visible.sync="drawer" destroy-on-close append-to-body>
      <div slot="title">
        <span @click="showInput = true" v-show="!showInput" style="cursor:pointer;">
          {{form.nodeName}}
          <i class="el-icon-edit"></i>
        </span>
        <el-input size="mini" v-model="form.nodeName" v-show="showInput" v-clickoutside="_ => showInput=false" style="z-index:9;max-width: 200px;"></el-input>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import addNode from './addNode'
import Clickoutside from "element-ui/src/utils/clickoutside" //该指令用来处理目标节点之外的点击事件

export default {
  props: {
    modelValue: { type: Object, default: () => { } }
  },
  components: {
    addNode
  },
  directives: {
    Clickoutside
  },
  data() {
    return {
      nodeConfig: this.modelValue,
      showInput: false,
      drawer: false,
      form: {}
    }
  },
  watch: {
    modelValue: {
      handler: function (newVal, oldVal) {
        this.nodeConfig = newVal;
      },
      deep: true
    },
  },
  mounted() {
  },
  methods: {
    show() {
      this.form = {}
      this.form = { ...this.nodeConfig }
      this.drawer = true
    },
    save() {
      this.$emit("update:modelValue", this.form)
      this.drawer = false
    }
  }
}
</script>

<style>
</style>
