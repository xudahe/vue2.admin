<template>
  <div class="add-node-btn-box">
    <div class="add-node-btn">
      <!-- <el-popover placement="right-start" :width="300" trigger="click">
        <el-button type="primary" icon="el-icon-plus" circle slot="reference"></el-button>
        <div class="add-node-popover-body">
          <el-tooltip content="审核人" placement="bottom" effect="light">
            <el-button icon="el-icon-user-solid" type="primary" circle plain @click="addType(1)" style="margin-right: 5px;"></el-button>
          </el-tooltip>
          <el-tooltip content="抄送人" placement="bottom" effect="light">
            <el-button icon="el-icon-s-promotion" type="primary" circle plain @click="addType(2)" style="margin-right: 5px;"></el-button>
          </el-tooltip>
          <el-tooltip content="条件路由" placement="bottom" effect="light">
            <el-button icon="el-icon-share" type="primary" circle plain @click="addType(4)" style="margin-right: 5px;"></el-button>
          </el-tooltip>
        </div>
      </el-popover> -->
      <el-popover placement="bottom-start" title="添加流程节点" width="350" trigger="click">
        <div class="node-select">
          <div @click="addType(1)">
            <i class="el-icon-s-check" style="color:rgb(255, 148, 62);"></i>
            <span>审批人</span>
          </div>
          <div @click="addType(2)">
            <i class="el-icon-s-promotion" style="color:rgb(50, 150, 250);"></i>
            <span>抄送人</span>
          </div>
          <div @click="addType(4)">
            <i class="el-icon-share" style="color:rgb(21, 188, 131);"></i>
            <span>条件分支</span>
          </div>
        </div>
        <el-button icon="el-icon-plus" ref="bt" slot="reference" type="primary" size="small" circle>
        </el-button>
      </el-popover>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: { type: Object, default: () => { } }
  },
  data() {
    return {
      visible: false
    }
  },
  mounted() {

  },
  methods: {
    addType(type) {
      var node = {}
      if (type == 1) {
        node = {
          nodeName: "审核人",
          type: 1,
          childNode: this.modelValue
        }
      } else if (type == 2) {
        node = {
          nodeName: "抄送人",
          type: 2,
          childNode: this.modelValue
        }

      } else if (type == 4) {
        node = {
          nodeName: "条件路由",
          type: 4,
          conditionNodes: [
            {
              nodeName: "条件1",
              type: 3,
              priorityLevel: 1
            },
            {
              nodeName: "条件2",
              type: 3,
              priorityLevel: 2
            }
          ],
          childNode: this.modelValue
        }

      }
      this.$emit("update:modelValue", node)
      this.visible = false
    }
  }
}
</script>
<style lang="less" scoped>
.node-select {
  div {
    display: inline-block;
    margin: 5px 5px;
    cursor: pointer;
    padding: 10px 15px;
    border: 1px solid #f8f9f9;
    background-color: #f8f9f9;
    border-radius: 10px;
    width: 140px;
    position: relative;
    span {
      position: absolute;
      left: 65px;
      top: 18px;
    }
    &:hover {
      background-color: #fff;
      box-shadow: 0 0 8px 2px #d6d6d6;
    }
    i {
      font-size: 25px;
      padding: 5px;
      border: 1px solid #dedfdf;
      border-radius: 14px;
    }
  }
}
</style>
