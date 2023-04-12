<template>
  <div v-loading="loading">
    <div v-if="!loading">
      <!--渲染表单-->
      <form-render class="process-form" ref="form" :forms="forms" v-model="formData" />
    </div>
    <el-divider>审批流程</el-divider>
    <div>
      <!--渲染流程执行过程-->
      <el-alert type="warning" description="演示流程设计功能"></el-alert>
      <el-timeline :reverse="false">
        <!--<el-timeline-item v-for="(activity, index) in activities" :key="index">

          </el-timeline-item>-->
      </el-timeline>
    </div>
  </div>
</template>

<script>
import FormRender from '@/views/workflow/common/form/FormRender'
import FormDesignRender from '@/views/workflow/admin/layout/form/FormDesignRender'
// import { getFormDetail } from '@/api/design'

export default {
  name: "InitiateProcess",
  components: { FormDesignRender, FormRender },
  props: {
    code: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      formData: {},
      form: {
        formId: '',
        formName: "",
        logo: {},
        formItems: [],
        process: {},
        remark: ""
      }
    }
  },
  mounted() {
    this.loadFormInfo(this.code)
  },
  computed: {
    forms() {
      return this.$store.state.workflow.design.formItems;
    }
  },
  methods: {
    loadFormInfo(formId) {
      let form = {
        "formId": "e503118bbc1d44f6b7c97837839f0d9c",
        "formName": "报修",
        "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
        "settings": "{\"sign\": false, \"admin\": [{\"id\": 61769798, \"name\": \"李四\", \"type\": \"user\", \"selected\": false}], \"notify\": {\"title\": \"消息通知标题\", \"types\": [\"APP\"]}, \"commiter\": []}",
        "groupId": 202,
        "formItems": "[{\"id\": \"field1971077399114\", \"icon\": \"el-icon-edit\", \"name\": \"TextInput\", \"props\": {\"required\": false, \"enablePrint\": true}, \"title\": \"设备名称\", \"value\": \"\", \"valueType\": \"String\"}, {\"id\": \"field2849577403946\", \"icon\": \"el-icon-more-outline\", \"name\": \"TextareaInput\", \"props\": {\"required\": false, \"enablePrint\": true}, \"title\": \"故障描述\", \"value\": \"\", \"valueType\": \"String\"}]",
        "process": "{\"id\": \"root\", \"desc\": \"任何人\", \"name\": \"发起人\", \"type\": \"ROOT\", \"props\": {\"formPerms\": [{\"id\": \"field1971077399114\", \"perm\": \"E\", \"title\": \"设备名称\", \"required\": false}, {\"id\": \"field2849577403946\", \"perm\": \"E\", \"title\": \"故障描述\", \"required\": false}], \"assignedUser\": []}, \"children\": {\"id\": \"node_608954349869\", \"name\": \"抄送人\", \"type\": \"CC\", \"props\": {\"formPerms\": [{\"id\": \"field1971077399114\", \"perm\": \"R\", \"title\": \"设备名称\", \"required\": false}, {\"id\": \"field2849577403946\", \"perm\": \"R\", \"title\": \"故障描述\", \"required\": false}], \"shouldAdd\": false, \"assignedUser\": [{\"id\": 381496, \"name\": \"旅人\", \"type\": \"user\", \"selected\": false}]}, \"children\": {\"id\": \"node_772797915062\", \"name\": \"审批人\", \"type\": \"APPROVAL\", \"props\": {\"mode\": \"AND\", \"role\": [], \"sign\": true, \"leader\": {\"level\": 1}, \"nobody\": {\"handler\": \"TO_PASS\", \"assignedUser\": []}, \"refuse\": {\"type\": \"TO_BEFORE\", \"target\": \"\"}, \"formUser\": \"\", \"formPerms\": [{\"id\": \"field1971077399114\", \"perm\": \"E\", \"title\": \"设备名称\", \"required\": false}, {\"id\": \"field2849577403946\", \"perm\": \"R\", \"title\": \"故障描述\", \"required\": false}], \"leaderTop\": {\"endLevel\": 1, \"endCondition\": \"TOP\"}, \"timeLimit\": {\"handler\": {\"type\": \"REFUSE\", \"notify\": {\"hour\": 1, \"once\": true}}, \"timeout\": {\"unit\": \"H\", \"value\": 0}}, \"selfSelect\": {\"multiple\": false}, \"assignedType\": \"ASSIGN_USER\", \"assignedUser\": [{\"id\": 381496, \"name\": \"旅人\", \"type\": \"user\", \"selected\": false}]}, \"children\": {}, \"parentId\": \"node_608954349869\"}, \"parentId\": \"root\"}, \"parentId\": null}",
        "isStop": false,
        "isDelete": false,
        "sort": 0,
        "created": "2022-12-24 18:25:13",
        "updated": "2023-04-10 14:38:56"
      }

      form.logo = JSON.parse(form.logo)
      form.settings = JSON.parse(form.settings)
      form.formItems = JSON.parse(form.formItems)
      form.process = JSON.parse(form.process)
      this.form = form
      //构建表单及校验规则
      this.$store.state.workflow.design = form

      // this.loading = true
      // getFormDetail(formId).then(rsp => {
      //   this.loading = false
      //   console.log(rsp.data)
      //   let form = rsp.data;
      //   form.logo = JSON.parse(form.logo)
      //   form.settings = JSON.parse(form.settings)
      //   form.formItems = JSON.parse(form.formItems)
      //   form.process = JSON.parse(form.process)
      //   this.form = form
      //   //构建表单及校验规则
      //   this.$store.state.workflow.design = form
      // }).catch(err => {
      //   this.loading = false
      //   this.$message.error(err)
      // })
    },
    validate(call) {
      this.$refs.form.validate(call);
    }
  }
}
</script>

<style lang="less" scoped>
.process-form {
  /deep/ .el-form-item__label {
    padding: 0 0;
  }
}
</style>
