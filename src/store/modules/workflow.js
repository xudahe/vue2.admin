let hasCondition = (state, formId, needIndex = false) => {
  let index = state.processConditions.findIndex(d => d.formId === formId)
  return needIndex ? index : index > -1
}

export default {
  state: {
    mockData: {
      basicSet: {
        icon: 'el-icon-s-custom',
        background: '#718dff',
        name: '新的审批流程',
        group: null, //所在分组
        remark: '', //备注
        notify: { //通知方式
          types: [],
          title: ''
        },
      },
      processData: {
        nodeName: "发起人",
        type: 0, // 0 发起人 1审批 2抄送 3条件 4路由
        initiator: null,
        childNode: {}
      },
      formData: {
        "fields": [{
            "cmpType": "common",
            "label": "姓名",
            "tag": "el-input",
            "tagIcon": "input",
            "placeholder": "请输入姓名",
            "span": 12,
            "labelWidth": 0,
            "style": {
              "width": "100%"
            },
            "clearable": true,
            "prepend": "",
            "append": "",
            "prefix-icon": "",
            "suffix-icon": "",
            "maxlength": null,
            "show-word-limit": false,
            "readonly": false,
            "disabled": false,
            "required": false,
            "regList": [],
            "changeTag": true,
            "proCondition": false,
            "asSummary": false,
            "formId": 2,
            "renderKey": 1590647662215,
            "layout": "colFormItem",
            "vModel": "field2"
          },
          {
            "cmpType": "common",
            "label": "学历",
            "tag": "el-select",
            "tagIcon": "select",
            "placeholder": "请选择学历",
            "span": 12,
            "labelWidth": 0,
            "style": {
              "width": "100%"
            },
            "clearable": true,
            "disabled": false,
            "required": true,
            "filterable": false,
            "multiple": false,
            "options": [{
                "label": "专科",
                "value": "专科"
              },
              {
                "label": "本科",
                "value": "本科"
              },
              {
                "label": "研究生",
                "value": "研究生"
              },
              {
                "label": "博士生",
                "value": "博士生"
              }
            ],
            "regList": [],
            "changeTag": true,
            "proCondition": true,
            "formId": 3,
            "renderKey": 1590647681649,
            "layout": "colFormItem",
            "vModel": "field3"
          },
          {
            "cmpType": "common",
            "label": "性别",
            "tag": "el-radio-group",
            "tagIcon": "radio",
            "span": 12,
            "labelWidth": 0,
            "style": {},
            "optionType": "default",
            "border": false,
            "size": "medium",
            "disabled": false,
            "required": false,
            "options": [{
                "label": "男",
                "value": "男"
              },
              {
                "label": "女",
                "value": "女"
              }
            ],
            "regList": [],
            "changeTag": true,
            "proCondition": true,
            "formId": 4,
            "renderKey": 1590647690138,
            "layout": "colFormItem",
            "vModel": "field4",
            "defaultValue": "男"
          },
          {
            "cmpType": "common",
            "layout": "rowFormItem",
            "rowType": "table",
            "tagIcon": "row",
            "tag": "fc-input-table",
            "type": "default",
            "justify": "start",
            "align": "top",
            "label": "工作经历",
            "layoutTree": false,
            "children": [{
                "cmpType": "common",
                "label": "日期范围",
                "tag": "fc-date-duration",
                "showDuration": false,
                "tagIcon": "date-range",
                "defaultValue": null,
                "span": 24,
                "labelWidth": 0,
                "style": {
                  "width": "100%"
                },
                "type": "daterange",
                "range-separator": "至",
                "start-placeholder": "开始日期",
                "end-placeholder": "结束日期",
                "disabled": false,
                "clearable": true,
                "required": false,
                "format": "yyyy-MM-dd",
                "value-format": "yyyy-MM-dd",
                "readonly": false,
                "regList": [],
                "changeTag": true,
                "proCondition": true,
                "asSummary": false,
                "formId": 6,
                "renderKey": 1590647800330,
                "layout": "colFormItem",
                "vModel": "field6"
              },
              {
                "cmpType": "common",
                "label": "公司名称",
                "tag": "el-input",
                "tagIcon": "input",
                "placeholder": "请输入公司名称",
                "span": 24,
                "labelWidth": 0,
                "style": {
                  "width": "100%"
                },
                "clearable": true,
                "prepend": "",
                "append": "",
                "prefix-icon": "",
                "suffix-icon": "",
                "maxlength": null,
                "show-word-limit": false,
                "readonly": false,
                "disabled": false,
                "required": false,
                "regList": [],
                "changeTag": true,
                "proCondition": false,
                "asSummary": false,
                "formId": 7,
                "renderKey": 1590647831276,
                "layout": "colFormItem",
                "vModel": "field7"
              },
              {
                "cmpType": "common",
                "label": "岗位",
                "tag": "el-select",
                "tagIcon": "select",
                "placeholder": "请选择岗位",
                "span": 24,
                "labelWidth": 0,
                "style": {
                  "width": "100%"
                },
                "clearable": true,
                "disabled": false,
                "required": false,
                "filterable": false,
                "multiple": false,
                "options": [{
                    "label": "前端",
                    "value": "前端"
                  },
                  {
                    "label": "后端",
                    "value": "后端"
                  },
                  {
                    "label": "其他",
                    "value": "其他"
                  }
                ],
                "regList": [],
                "changeTag": true,
                "proCondition": true,
                "formId": 8,
                "renderKey": 1590647845533,
                "layout": "colFormItem",
                "vModel": "field8"
              },
              {
                "cmpType": "common",
                "label": "附件",
                "tag": "el-upload",
                "tagIcon": "upload",
                "action": "https://jsonplaceholder.typicode.com/posts/",
                "defaultValue": [],
                "labelWidth": 0,
                "disabled": false,
                "required": false,
                "accept": "",
                "name": "file",
                "auto-upload": true,
                "showTip": false,
                "buttonText": "点击上传附件",
                "fileSize": 20,
                "sizeUnit": "MB",
                "list-type": "text",
                "multiple": false,
                "regList": [],
                "changeTag": true,
                "proCondition": false,
                "asSummary": false,
                "formId": 9,
                "span": 24,
                "renderKey": 1590647866199,
                "layout": "colFormItem",
                "vModel": "field9"
              }
            ],
            "actionText": "添加",
            "tableConf": {},
            "showDivider": false,
            "show-summary": false,
            "formId": 5,
            "span": 24,
            "renderKey": 1590647776442,
            "vModel": "field5",
            "componentName": "row5",
            "gutter": 15
          }
        ],
        "formRef": "elForm",
        "formModel": "formData",
        "size": "small",
        "labelPosition": "right",
        "labelWidth": 100,
        "formRules": "rules",
        "gutter": 15,
        "disabled": false,
        "span": 12,
        "formBtns": true
      },
      advancedSet: {
        "autoRepeat": true,
        "myAuditAutoPass": true,
        "remarkTip": "这里是填写提示",
        "remarkRequired": true,
        "notVisibleForSponsor": true
      }
    },
    baseSetup: {
      id: 1,
      icon: 'el-icon-s-custom',
      background: '#718dff',
      name: '新的审批流程',
      group: null, //所在分组
      remark: '', //备注
      notify: { //通知方式
        types: [],
        title: ''
      },
      nodeConfig: {
        nodeName: "发起人",
        type: 0, // 0 发起人 1审批 2抄送 3条件 4路由
        childNode: {}
      },
    },

    processConditions: [], // processConditions 用于传递流程图需要的条件
    formItemList: [], // 流程节点表单权限控制——组件列表
  },
  mutations: {
    //所有mutations中的方法的第一个参数一定是state变量，用来进行对state中的状态的操作
    //第二个参数是可选参数，用于调用该 mutations 方法的时候传参
    initPConditions(state, data) {
      state.processConditions = data
    },
    addPCondition(state, data) {
      if (data.formId === null || data.formId === undefined) return
      if (!hasCondition(state, data.formId)) {
        state.processConditions.unshift(data)
      }
    },
    delPCondition(state, formId) {
      if (formId === null || formId === undefined) return
      let index = hasCondition(state, formId, true)
      let cons = state.processConditions
      index > -1 && cons.splice(index, 1)
    },
    //  * 清除所有的条件
    clearPCondition(state) {
      state.processConditions = []
    },
    updateFormItemList(state, list) {
      state.formItemList = list
    }
  },
  actions: {

  }
}
