<template>
  <el-container>
    <el-header style="background: white">
      <layout-header v-model="activeSelect" @publish="publishProcess" @preview="preview"></layout-header>
    </el-header>
    <div class="layout-body">
      <form-base-setting ref="baseSetting" v-show="activeSelect === 'baseSetting'" />
      <form-design ref="formSetting" v-show="activeSelect === 'formSetting'" />
      <process-design ref="processDesign" v-show="activeSelect === 'processDesign'" />
      <form-pro-setting ref="proSetting" v-show="activeSelect === 'proSetting'" />
    </div>
    <w-dialog :showFooter="false" v-model="validVisible" title="设置项检查">
      <el-steps align-center :active="validStep" finish-status="success">
        <el-step v-for="(step, i) in validOptions" :title="step.title" :key="i" :icon="step.icon" :status="step.status"
          :description="step.description" />
      </el-steps>
      <el-result :icon="validIcon" :title="errTitle" :subTitle="validResult.desc">
        <i slot="icon" style="font-size: 30px" v-if="!validResult.finished" class="el-icon-loading"></i>
        <div slot="subTitle" class="err-info" v-if="validResult.errs.length > 0">
          <ellipsis hover-tip v-for="(err, i) in validResult.errs" :key="i + '_err'" :content="err">
            <i slot="pre" class="el-icon-warning-outline"></i>
          </ellipsis>
        </div>
        <template slot="extra">
          <el-button type="primary" v-if="validResult.finished" size="medium" @click="doAfter">
            {{ validResult.action }}
          </el-button>
        </template>
      </el-result>
    </w-dialog>
  </el-container>
</template>

<script>
import LayoutHeader from './LayoutHeader'
// import {getFormDetail, createForm, updateFormDetail} from '@/api/design'
import FormBaseSetting from '@/views/workflow/admin/layout/FormBaseSetting'
import FormDesign from '@/views/workflow/admin/layout/FormDesign'
import ProcessDesign from '@/views/workflow/admin/layout/ProcessDesign'
import FormProSetting from '@/views/workflow/admin/layout/FormProSetting'

export default {
  name: "FormProcess",
  components: { LayoutHeader, FormBaseSetting, FormDesign, ProcessDesign, FormProSetting },
  data() {
    return {
      isNew: true,
      validStep: 0,
      timer: null,
      activeSelect: 'baseSetting',
      validVisible: false,
      validResult: {},
      validOptions: [
        { title: '基础信息', description: '', icon: '', status: '' },
        { title: '审批表单', description: '', icon: '', status: '' },
        { title: '审批流程', description: '', icon: '', status: '' },
        { title: '扩展设置', description: '', icon: '', status: '' }
      ],
      validComponents: ['baseSetting', 'formSetting', 'processDesign', 'proSetting'],
    }
  },
  computed: {
    setup() {
      return this.$store.state.workflow.design
    },
    errTitle() {
      if (this.validResult.finished && !this.validResult.success) {
        return this.validResult.title + ` (${this.validResult.errs.length}项错误) 😥`
      }
      return this.validResult.title
    },
    validIcon() {
      if (!this.validResult.finished) {
        return 'el-icon-loading'
      } else if (this.validResult.success) {
        return 'success'
      } else {
        return 'warning'
      }
    }
  },
  created() {
    this.showValiding()
    let formId = this.$route.query.code
    //判断传参，决定是新建还是加载原始数据
    this.loadInitFrom()
    if (this.$isNotEmpty(formId)) {
      this.isNew = false
      this.loadFormInfo(formId)
    }
    let group = this.$route.query.group
    this.setup.groupId = this.$isNotEmpty(group) ? parseInt(group) : null
  },
  beforeDestroy() {
    this.stopTimer()
  },
  methods: {
    loadFormInfo(formId) {
      let form = {
        "formId": "899882a93d2b49bd8eaa7d76fc44d3bd",
        "formName": "旅游",
        "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"rgba(255, 215, 0, 1)\"}",
        "settings": "{\"sign\": true, \"admin\": [{\"id\": 381496, \"name\": \"旅人\", \"type\": \"user\", \"selected\": false}], \"notify\": {\"title\": \"消息通知标题\", \"types\": [{\"name\": \"短信通知\", \"type\": \"SMS\"}]}, \"commiter\": []}",
        "groupId": 451,
        "formItems": "[{\"id\": \"field3552785626150\", \"icon\": \"el-icon-edit\", \"name\": \"TextInput\", \"props\": {\"required\": true, \"enablePrint\": true, \"placeholder\": \"议题\"}, \"title\": \"名称\", \"value\": \"\", \"valueType\": \"String\"}, {\"id\": \"field1022585722011\", \"icon\": \"el-icon-edit\", \"name\": \"TextInput\", \"props\": {\"required\": true, \"enablePrint\": true, \"placeholder\": \"目的地\"}, \"title\": \"目的地\", \"value\": \"\", \"valueType\": \"String\"}, {\"id\": \"field4462485771545\", \"icon\": \"el-icon-edit\", \"name\": \"TextInput\", \"props\": {\"required\": true, \"enablePrint\": true, \"placeholder\": \"KM\"}, \"title\": \"距离\", \"value\": \"\", \"valueType\": \"String\"}, {\"id\": \"field1291986005758\", \"icon\": \"iconfont icon-zhufangbutiezhanghu\", \"name\": \"AmountInput\", \"props\": {\"required\": true, \"precision\": 2, \"enablePrint\": true, \"showChinese\": true}, \"title\": \"金额\", \"value\": \"\", \"valueType\": \"Number\"}, {\"id\": \"field4380185793368\", \"icon\": \"el-icon-user\", \"name\": \"UserPicker\", \"props\": {\"multiple\": true, \"required\": true, \"enablePrint\": true}, \"title\": \"人员选择\", \"value\": [], \"valueType\": \"User\"}, {\"id\": \"field8545685726425\", \"icon\": \"iconfont icon-kaoqin\", \"name\": \"DateTimeRange\", \"props\": {\"format\": \"yyyy-MM-dd HH:mm\", \"required\": true, \"showLength\": true, \"enablePrint\": true, \"placeholder\": [\"开始时间\", \"结束时间\"]}, \"title\": \"日期时间区间\", \"valueType\": \"DateRange\"}]",
        "process": "{\"id\": \"root\", \"desc\": \"任何人\", \"name\": \"发起人\", \"type\": \"ROOT\", \"props\": {\"formPerms\": [], \"assignedUser\": []}, \"children\": {\"id\": \"node_858327804752\", \"name\": \"审批人\", \"type\": \"APPROVAL\", \"props\": {\"mode\": \"AND\", \"role\": [], \"sign\": true, \"leader\": {\"level\": 1}, \"nobody\": {\"handler\": \"TO_ADMIN\", \"assignedUser\": []}, \"refuse\": {\"type\": \"TO_END\", \"target\": \"\"}, \"formUser\": \"\", \"formPerms\": [{\"id\": \"field3552785626150\", \"perm\": \"R\", \"title\": \"名称\", \"required\": true}, {\"id\": \"field1022585722011\", \"perm\": \"R\", \"title\": \"目的地\", \"required\": true}, {\"id\": \"field4462485771545\", \"perm\": \"R\", \"title\": \"距离\", \"required\": true}, {\"id\": \"field4380185793368\", \"perm\": \"R\", \"title\": \"人员选择\", \"required\": true}, {\"id\": \"field8545685726425\", \"perm\": \"R\", \"title\": \"日期时间区间\", \"required\": true}], \"leaderTop\": {\"endLevel\": 1, \"endCondition\": \"TOP\"}, \"timeLimit\": {\"handler\": {\"type\": \"PASS\", \"notify\": {\"hour\": 1, \"once\": true}}, \"timeout\": {\"unit\": \"H\", \"value\": \"3\"}}, \"selfSelect\": {\"multiple\": false}, \"assignedType\": \"LEADER\", \"assignedUser\": []}, \"children\": {\"id\": \"node_859201012580\", \"name\": \"条件分支\", \"type\": \"CONDITIONS\", \"props\": {}, \"branchs\": [{\"id\": \"node_859201014176\", \"name\": \"条件1\", \"type\": \"CONDITION\", \"props\": {\"groups\": [{\"cids\": [\"field1291986005758\"], \"groupType\": \"AND\", \"conditions\": [{\"id\": \"field1291986005758\", \"title\": \"金额\", \"value\": [\"2000\"], \"compare\": \"<=\", \"valueType\": \"Number\"}]}], \"expression\": \"\", \"groupsType\": \"OR\"}, \"children\": {\"id\": \"node_860706343432\", \"name\": \"审批人\", \"type\": \"APPROVAL\", \"props\": {\"mode\": \"AND\", \"role\": [], \"sign\": false, \"leader\": {\"level\": 1}, \"nobody\": {\"handler\": \"TO_PASS\", \"assignedUser\": []}, \"refuse\": {\"type\": \"TO_END\", \"target\": \"\"}, \"formUser\": \"\", \"formPerms\": [{\"id\": \"field3552785626150\", \"perm\": \"R\", \"title\": \"名称\", \"required\": true}, {\"id\": \"field1022585722011\", \"perm\": \"R\", \"title\": \"目的地\", \"required\": true}, {\"id\": \"field4462485771545\", \"perm\": \"R\", \"title\": \"距离\", \"required\": true}, {\"id\": \"field1291986005758\", \"perm\": \"R\", \"title\": \"金额\", \"required\": true}, {\"id\": \"field4380185793368\", \"perm\": \"R\", \"title\": \"人员选择\", \"required\": true}, {\"id\": \"field8545685726425\", \"perm\": \"R\", \"title\": \"日期时间区间\", \"required\": true}], \"leaderTop\": {\"endLevel\": 1, \"endCondition\": \"TOP\"}, \"timeLimit\": {\"handler\": {\"type\": \"REFUSE\", \"notify\": {\"hour\": 1, \"once\": true}}, \"timeout\": {\"unit\": \"H\", \"value\": 0}}, \"selfSelect\": {\"multiple\": false}, \"assignedType\": \"ASSIGN_USER\", \"assignedUser\": [{\"id\": 381496, \"name\": \"旅人\", \"type\": \"user\", \"selected\": false}]}, \"children\": {}, \"parentId\": \"node_859201014176\"}, \"parentId\": \"node_859201012580\"}, {\"id\": \"node_859201017824\", \"name\": \"条件2\", \"type\": \"CONDITION\", \"props\": {\"groups\": [{\"cids\": [\"field1291986005758\"], \"groupType\": \"AND\", \"conditions\": [{\"id\": \"field1291986005758\", \"title\": \"金额\", \"value\": [\"2000\"], \"compare\": \">\", \"valueType\": \"Number\"}]}], \"expression\": \"\", \"groupsType\": \"OR\"}, \"children\": {\"id\": \"node_860898826135\", \"name\": \"审批人\", \"type\": \"APPROVAL\", \"props\": {\"mode\": \"AND\", \"role\": [], \"sign\": true, \"leader\": {\"level\": 3}, \"nobody\": {\"handler\": \"TO_PASS\", \"assignedUser\": []}, \"refuse\": {\"type\": \"TO_END\", \"target\": \"\"}, \"formUser\": \"\", \"formPerms\": [{\"id\": \"field3552785626150\", \"perm\": \"R\", \"title\": \"名称\", \"required\": true}, {\"id\": \"field1022585722011\", \"perm\": \"R\", \"title\": \"目的地\", \"required\": true}, {\"id\": \"field4462485771545\", \"perm\": \"R\", \"title\": \"距离\", \"required\": true}, {\"id\": \"field1291986005758\", \"perm\": \"R\", \"title\": \"金额\", \"required\": true}, {\"id\": \"field4380185793368\", \"perm\": \"R\", \"title\": \"人员选择\", \"required\": true}, {\"id\": \"field8545685726425\", \"perm\": \"R\", \"title\": \"日期时间区间\", \"required\": true}], \"leaderTop\": {\"level\": 3, \"endLevel\": 1, \"endCondition\": \"TOP\"}, \"timeLimit\": {\"handler\": {\"type\": \"REFUSE\", \"notify\": {\"hour\": 1, \"once\": true}}, \"timeout\": {\"unit\": \"H\", \"value\": \"5\"}}, \"selfSelect\": {\"multiple\": false}, \"assignedType\": \"LEADER\", \"assignedUser\": [{\"id\": 6418616, \"name\": \"张三\", \"type\": \"user\", \"selected\": false}]}, \"children\": {}, \"parentId\": \"node_859201017824\"}, \"parentId\": \"node_859201012580\"}], \"children\": {\"id\": \"node_859201019306\", \"type\": \"EMPTY\", \"children\": {}, \"parentId\": \"node_859201012580\"}, \"parentId\": \"node_858327804752\"}, \"parentId\": \"root\"}, \"parentId\": null}",
        "isStop": false,
        "isDelete": false,
        "sort": 0,
        "created": "2023-04-12 16:02:51",
        "updated": "2023-04-12 16:08:32"
      }
      form.logo = JSON.parse(form.logo)
      form.settings = JSON.parse(form.settings)
      form.formItems = JSON.parse(form.formItems)
      form.process = JSON.parse(form.process)
      console.log(form)
      this.$store.commit('loadForm', form)

      // getFormDetail(formId).then(rsp => {
      //   console.log(rsp.data)
      //   let form = rsp.data;
      //   form.logo = JSON.parse(form.logo)
      //   form.settings = JSON.parse(form.settings)
      //   form.formItems = JSON.parse(form.formItems)
      //   form.process = JSON.parse(form.process)
      //   this.$store.commit('loadForm', form)
      // }).catch(err => {
      //   this.$message.error(err)
      // })
    },
    loadInitFrom() {
      this.$store.commit('loadForm', {
        formId: null,
        formName: "未命名表单",
        logo: {
          icon: "el-icon-eleme",
          background: "#1e90ff"
        },
        settings: {
          commiter: [],
          admin: [],
          sign: false,
          notify: {
            types: ["APP"],
            title: "消息通知标题"
          }
        },
        groupId: undefined,
        formItems: [],
        process: {
          id: "root",
          parentId: null,
          type: "ROOT",
          name: "发起人",
          desc: "任何人",
          props: {
            assignedUser: [],
            formPerms: []
          },
          children: {}
        },
        remark: "备注说明"
      })
    },
    validateDesign() {
      this.validVisible = true
      this.validStep = 0
      this.showValiding()
      this.stopTimer()
      this.timer = setInterval(() => {
        this.validResult.errs = this.$refs[this.validComponents[this.validStep]].validate()
        if (Array.isArray(this.validResult.errs) && this.validResult.errs.length === 0) {
          this.validStep++;
          if (this.validStep >= this.validOptions.length) {
            this.stopTimer()
            this.showValidFinish(true)
          }
        } else {
          this.stopTimer()
          this.validOptions[this.validStep].status = 'error'
          this.showValidFinish(false, this.getDefaultValidErr())
        }
      }, 300)
    },
    getDefaultValidErr() {
      switch (this.validStep) {
        case 0:
          return '请检查基础设置项';
        case 1:
          return '请检查审批表单相关设置'
        case 2:
          return '请检查审批流程，查看对应标注节点错误信息'
        case 3:
          return '请检查扩展设置'
        default:
          return '未知错误'
      }
    },
    showValidFinish(success, err) {
      this.validResult.success = success
      this.validResult.finished = true
      this.validResult.title = success ? '校验完成 😀' : '校验失败 '
      this.validResult.desc = success ? '设置项校验成功，是否提交？' : err
      this.validResult.action = success ? '提 交' : '去修改'
    },
    showValiding() {
      this.validResult = {
        errs: [],
        finished: false,
        success: false,
        title: '检查中...',
        action: '处理',
        desc: '正在检查设置项'
      }
      this.validStep = 0
      this.validOptions.forEach(op => {
        op.status = ''
        op.icon = ''
        op.description = ''
      })
    },
    doAfter() {
      if (this.validResult.success) {
        this.doPublish()
      } else {
        this.activeSelect = this.validComponents[this.validStep]
        this.validVisible = false
      }
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer)
      }
    },
    preview() {
      this.validateDesign()
    },
    publishProcess() {
      this.validateDesign()
    },
    doPublish() {
      this.$confirm('如果您只想预览请选择预览，确认发布后流程立即生效，是否继续?', '提示', {
        confirmButtonText: '发布',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(this.setup)
        let template = {
          formId: this.setup.formId,
          formName: this.setup.formName,
          logo: JSON.stringify(this.setup.logo),
          settings: JSON.stringify(this.setup.settings),
          groupId: this.setup.groupId,
          formItems: JSON.stringify(this.setup.formItems),
          process: JSON.stringify(this.setup.process),
          remark: this.setup.remark
        }
        if (this.isNew || !this.$isNotEmpty(this.setup.formId)) {
          // createForm(template).then(rsp => {
          //   this.$message.success("创建表单成功")
          //   this.$router.push("/formsPanel")
          // }).catch(err => {
          //   this.$message.error(err)
          // })
        } else {
          // updateFormDetail(template).then(rsp => {
          //   this.$message.success("更新表单成功")
          //   this.$router.push("/formsPanel")
          // }).catch(err => {
          //   this.$message.error(err)
          // })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.layout-body {
  height: calc(~"100% - 60px");
  min-width: 980px;
  background: #f5f6f6;
  overflow: auto;
}

/deep/ .el-step {
  .is-success {
    color: #2a99ff;
    border-color: #2a99ff;
  }
}

.err-info {
  max-height: 180px;
  overflow-y: auto;

  &>div {
    padding: 5px;
    margin: 2px 0;
    width: 220px;
    text-align: left;
    border-radius: 3px;
    background: rgb(242 242 242);
  }

  i {
    margin: 0 5px;
  }
}

::-webkit-scrollbar {
  width: 2px;
  height: 2px;
  background-color: white;
}

::-webkit-scrollbar-thumb {
  border-radius: 16px;
  background-color: #e8e8e8;
}
</style>
