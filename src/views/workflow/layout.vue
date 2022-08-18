<template>
  <div style="height: 100%;width: 100%;">
    <div class="header" style="height: 60px;">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="基础设置" style="height: 100%;">基础设置</el-menu-item>
        <el-menu-item index="表单设计" style="height: 100%;">表单设计</el-menu-item>
        <el-menu-item index="流程设计" style="height: 100%;">流程设计</el-menu-item>
        <el-menu-item index="高级设置" style="height: 100%;">高级设置</el-menu-item>
      </el-menu>
      <div class="publish">
        <el-button size="mini" @click="preview"><i class="el-icon-view"></i>预览</el-button>
        <el-button size="mini" type="primary" @click="publish"><i class="el-icon-s-promotion"></i>发布</el-button>
        <el-button size="mini" type="primary" @click="screen"><i class="el-icon-s-promotion"></i>全屏</el-button>
      </div>
      <div class="back">
        <el-button @click="exit" size="medium" icon="el-icon-arrow-left" circle></el-button>
        <span>
          <i :class="mockData.basicSet.icon" :style="'background:' + mockData.basicSet.background"></i>
          <!-- <span>{{mockData.basicSet.name}}</span> -->
          <el-input v-model="mockData.basicSet.name" size="small" style="width: 200px"></el-input>
        </span>
      </div>
    </div>

    <div class="layout-body" style="height: calc(100% - 60px);overflow:auto;background: #f6f8f9">
      <transition name="router-fade" mode="out-in">
        <basic-setting :modelValue.sync="mockData.basicSet" v-if="activeIndex == '基础设置'"></basic-setting>
        <dynamic-form :conf.sync="mockData.formData" tabName="formDesign" v-if="activeIndex == '表单设计'"></dynamic-form>
        <process-design :modelValue.sync="mockData.processData" v-if="activeIndex == '流程设计'"></process-design>
        <advanced-setting :conf.sync="mockData.advancedSet" v-if="activeIndex == '高级设置'"></advanced-setting>
      </transition>
    </div>
  </div>
</template>

<script>
import basicSetting from './basicSetting/index.vue'
import processDesign from './processDesign/index.vue'
import dynamicForm from './dynamicForm/index.vue'
import advancedSetting from './advancedSetting/index.vue'

const beforeUnload = function (e) {
  var confirmationMessage = '离开网站可能会丢失您编辑得内容';
  (e || window.event).returnValue = confirmationMessage;
  return confirmationMessage;
}
export default {
  components: { basicSetting, processDesign, dynamicForm, advancedSetting },
  data() {
    return {
      activeIndex: "基础设置",
      processData: {
        id: 1,
        name: "合同审批",
        nodeConfig: {
          nodeName: "发起人",
          type: 0,	// 0 发起人 1审批 2抄送 3条件 4路由
          childNode: {
            nodeName: "审核人",
            type: 1,
            settype: 1,	// 审批人设置 1指定成员 2主管 4发起人自选 5发起人自己 7连续多级主管
            nodeUserList: [
              {
                id: 1,
                name: "Sakuya"
              },
              {
                id: 2,
                name: "Lolowan"
              }
            ],
            childNode: {
              nodeName: "路由",
              type: 4,
              conditionNodes: [
                {
                  nodeName: "条件1",
                  type: 3,
                  priorityLevel: 1,
                  conditionList: [
                    {
                      label: "上级审核状态",
                      field: "promoter",
                      operator: "=",
                      value: '保留'
                    }
                  ],
                  childNode: {
                    nodeName: "条件审核",
                    type: 1,
                    settype: 2
                  }
                },
                {
                  nodeName: "条件2",
                  type: 3,
                  priorityLevel: 2,
                  conditionList: []
                }
              ],
              childNode: {
                nodeName: "抄送人",
                type: 2,
                ccSelfSelectFlag: true,
                nodeUserList: []
              }
            }
          }
        }
      },
    };
  },
  beforeRouteEnter(to, from, next) {
    window.addEventListener('beforeunload', beforeUnload)
    next()
  },
  beforeRouteLeave(to, from, next) {
    window.removeEventListener('beforeunload', beforeUnload)
    next()
  },
  props: {
    mockData: {
      type: Object,
      default: {}
    }
  },
  watch: {
    mockData: {
      handler: function (newVal, oldVal) {
        console.log(newVal)
      },
      deep: true
    },
  },
  created() {
    this.check()
  },
  mounted() {

  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
    },
    publish() {
      this.$confirm('您确定审批流程已配置完毕,并需要将其发布，发布后立即生效，是否继续?', '提示', {
        confirmButtonText: '发布',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {


      })
    },
    screen() {
      this.$setFullScreen(document.getElementById("fromPanel"));
      this.$cancelFullScreen();
    },
    preview() {

    },
    exit() {
      this.$confirm('未发布的内容将不会被保存，是否直接退出 ?', '提示', {
        confirmButtonText: '退出',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$emit('exit', false);

      })
    },
    check() {
      if (this.$store.state.isEdit === null) {

      }
    },
  }
}
</script>
<style lang="less" scoped>
/deep/ .header {
  position: relative;
  .el-menu {
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .publish {
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 1000;

    i {
      margin-right: 6px;
    }

    button {
      border-radius: 15px;
    }
  }

  .back {
    position: absolute;
    z-index: 1000;
    top: 10px;
    left: 20px;
    font-size: small;
    span {
      i {
        border-radius: 10px;
        padding: 7px;
        font-size: 15px;
        color: #ffffff;
        margin: 0 10px;
      }
    }
  }
}
</style>
