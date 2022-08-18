<template>
  <div class="node-wrap">
    <div class="node-wrap-box" @click="show">
      <div class="title" style="background: #ff943e;">
        <i class="icon el-icon-user-solid"></i>
        <span>{{ nodeConfig.nodeName }}</span>
        <i class="close el-icon-close" @click.stop="delNode()"></i>
      </div>
      <div class="content">
        <span v-if="toText(nodeConfig)">{{ toText(nodeConfig) }}</span>
        <span v-else class="placeholder">请选择人员</span>
      </div>
    </div>
    <add-node :modelValue.sync="nodeConfig.childNode"></add-node>

    <el-drawer title="审批人设置" :visible.sync="drawer" destroy-on-close append-to-body>
      <div slot="title">
        <el-input v-model="form.nodeName" size="medium" v-if="showInput" style="width: 300px" @blur="showInput = false"></el-input>
        <el-link v-else @click="showInput = true" style="font-size: medium">
          <i class="el-icon-edit" style="margin-right: 10px"></i> {{form.nodeName}}
        </el-link>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import addNode from './addNode'

export default {
  props: {
    modelValue: { type: Object, default: () => { } }
  },
  components: {
    addNode
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
    },
    delNode() {
      this.$emit("update:modelValue", this.nodeConfig.childNode)
    },
    toText(nodeConfig) {
      if (nodeConfig.settype == 1) {
        if (nodeConfig.nodeUserList && nodeConfig.nodeUserList.length > 0) {
          const users = nodeConfig.nodeUserList.map(item => item.name).join(" 或 ")
          return users
        } else {
          return false
        }
      } else if (nodeConfig.settype == 2) {
        return "直接主管"
      } else if (nodeConfig.settype == 4) {
        return "发起人自选"
      } else if (nodeConfig.settype == 5) {
        return "发起人自己"
      } else if (nodeConfig.settype == 7) {
        return "连续多级主管"
      }
    }
  }
}
</script>

<style>
</style>
