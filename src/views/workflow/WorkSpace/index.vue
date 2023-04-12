<template>
  <div class="workspace">
    <el-button icon="el-icon-back" class="back" type="info" size="mini" plain @click="$router.push('/workflow')">返回主页
    </el-button>
    <el-tabs type="border-card">
      <el-tab-pane label="审批列表">
        <el-row style="margin-bottom: 20px">
          <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="4">
            <el-input size="medium" v-model="formList.inputs" placeholder="搜索表单" clearable>
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-col>
        </el-row>
        <el-collapse v-model="actives" v-show="formList.inputs === ''">
          <el-collapse-item v-for="(group, index) in formList.list" :key="index" :title="group.name" :name="group.name"
            v-show="group.items.length > 0 && group.id > 0">
            <div>
              <div v-for="(item, index) in group.items" :key="index" class="form-item" @click="enterItem(item)">
                <i :class="item.logo.icon" :style="'background: ' + item.logo.background"></i>
                <div>
                  <ellipsis hover-tip :content="item.formName" />
                  <span>发起审批</span>
                </div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
        <div>
          <div v-for="(item, index) in formList.searchResult" :key="index" class="form-item" @click="enterItem(item)">
            <i :class="item.icon" :style="'background: ' + item.background"></i>
            <div>
              <span>{{ item.formName }}</span>
              <span>发起审批</span>
            </div>
          </div>
          <div class="no-data" v-show="formList.searchResult.length === 0 && formList.inputs !== ''">
            没有找到相关的表单 😥
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="待我处理(3)">
        <div class="no-data">暂无数据 😀</div>
      </el-tab-pane>
      <el-tab-pane label="我发起的">
        <div class="no-data">暂无数据 😀</div>
      </el-tab-pane>
      <el-tab-pane label="关于我的">
        <div class="no-data">暂无数据 😀</div>
      </el-tab-pane>
    </el-tabs>

    <el-dialog title="发起审批" width="800px" :visible.sync="openItemDl" :close-on-click-modal="false">
      <initiate-process ref="processForm" :code="selectForm.formId" v-if="openItemDl"></initiate-process>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="openItemDl = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="submitForm">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import { getFormGroups } from '@/api/design'
import InitiateProcess from "./InitiateProcess";

export default {
  name: "workSpace",
  components: { InitiateProcess },
  data() {
    return {
      openItemDl: false,
      selectForm: {},
      formItem: {},
      actives: [],
      formList: {
        list: [],
        inputs: '',
        searchResult: []
      },
      pending: {
        list: []
      }
    }
  },
  mounted() {
    this.getGroups()
  },
  methods: {
    getGroups() {
      let rspdata  = [
        {
          "id": 437,
          "name": "短发",
          "items": [
            {
              "formId": "048ab2330c8845609d4074eccb5811ec",
              "formName": "未命名表单",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-12 09:22:29"
            },
            {
              "formId": "1cc08c0119ec41809387890a6a52bea7",
              "formName": "未命名表单",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 18:16:59"
            },
          ]
        },

        {
          "id": 446,
          "name": "新建组织",
          "items": [
            {
              "formId": "76686e110d594c51828e501ec26a7721",
              "formName": "测试请假审批",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 20:02:12"
            },
            {
              "formId": "f5c4fecef8004f1bbe95d81c9b1b74cf",
              "formName": "0000000000000",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 16:37:20"
            }
          ]
        },
        {
          "id": 441,
          "name": "asas",
          "items": [
            {
              "formId": "aeffd4fb8ac84749b1b9871419d7d64b",
              "formName": "未命名表单",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 10:36:37"
            }
          ]
        },
        {
          "id": 438,
          "name": "自定义分组",
          "items": [
            {
              "formId": "d8ca6ffa45ef4da8b5dccea2ae014972",
              "formName": "未命名表单",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 11:19:35"
            },
            {
              "formId": "d9f29a0b20d347a9934113f10ad6699d",
              "formName": "未命名表单",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 13:37:07"
            },
            {
              "formId": "e1c4b725763640c1838e2a0d944c43f3",
              "formName": "自定义审批",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"rgba(222, 118, 25, 1)\"}",
              "isStop": false,
              "updated": "2023-04-10 15:30:48"
            }
          ]
        },
        {
          "id": 433,
          "name": "测试",
          "items": [
            {
              "formId": "d3ad974fe8764d49ac94a99615c237bd",
              "formName": "test1",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 12:43:11"
            }
          ]
        },
        {
          "id": 432,
          "name": "测试",
          "items": [
            {
              "formId": "62d7adc943a54469b25a5448125b72eb",
              "formName": "未命名表单",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 17:58:59"
            }
          ]
        },
        {
          "id": 363,
          "name": "人事",
          "items": [
            {
              "formId": "4ab52917d7b6401a8a979660beaa5d40",
              "formName": "ZDY-转签",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 19:31:20"
            },
            {
              "formId": "a37bcd29825b4002b006eea2338b564e",
              "formName": "离职",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 23:05:32"
            },
            {
              "formId": "b1965a78c99948cbad81fff3d49003fe",
              "formName": "ZDY-社保缴纳地变更",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 18:50:23"
            }
          ]
        },
        {
          "id": 334,
          "name": "资产管理",
          "items": [
            {
              "formId": "c5cc18718d25471f90a1b0fdfb0ec15b",
              "formName": "资产领用",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"rgba(255, 120, 0, 1)\"}",
              "isStop": false,
              "updated": "2023-04-11 14:18:58"
            }
          ]
        },
        {
          "id": 203,
          "name": "请假",
          "items": [
            {
              "formId": "16a21bc2dded43e1bd6687b849169b79",
              "formName": "未命名表单",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 10:01:51"
            },
            {
              "formId": "234713f407fd48d2af1da28935f2bc74",
              "formName": "未命名表单",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 09:59:13"
            },
            {
              "formId": "250bc89d49854b328787293564736ec6",
              "formName": "美食表单",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2022-12-30 12:29:18"
            },
            {
              "formId": "3d0c69e04d374323afe513a0f459ad2c",
              "formName": "未命名表单",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-10 11:37:20"
            },
            {
              "formId": "417b77575ee24e7b9c218d2c30d28114",
              "formName": "请假审批",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 14:17:43"
            },
            {
              "formId": "a5d89b2e10e045f08317abd53704b9f0",
              "formName": "未命名表单",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-10 16:03:33"
            },
            {
              "formId": "a98282d899a945a685300cdd327b503f",
              "formName": "未命名表单",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-10 15:23:13"
            },
            {
              "formId": "f86da188bf3e42008b49d9c70c4fc98d",
              "formName": "未命名表单",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-07 23:21:20"
            },
            {
              "formId": "fa7c830da86b49f282c5cd362ed1455b",
              "formName": "请教",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"rgba(31, 147, 255, 0.73)\"}",
              "isStop": false,
              "updated": "2022-12-29 16:26:25"
            },
            {
              "formId": "fdb35a95f43945d88c16a11f234dd01c",
              "formName": "测试用例",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2022-12-23 19:49:26"
            }
          ]
        },
        {
          "id": 202,
          "name": "维修",
          "items": [
            {
              "formId": "100ee6d646dc4ff99b4af708c8d3c08d",
              "formName": "未命名表单",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-10 17:13:40"
            },
            {
              "formId": "e503118bbc1d44f6b7c97837839f0d9c",
              "formName": "报修",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-10 14:38:56"
            }
          ]
        },
        {
          "id": 4,
          "name": "财务",
          "items": [
            {
              "formId": "02b549bece67447c97aea37b4950a2dd",
              "formName": "工资审批",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"rgba(255, 215, 0, 1)\"}",
              "isStop": false,
              "updated": "2022-12-30 18:38:34"
            },
            {
              "formId": "576f3015346149779fdb1a48e1d06c1f",
              "formName": "未命名表单",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 16:31:50"
            },
            {
              "formId": "c3707dbe801c4edf9426eb6d60c5ee25",
              "formName": "未命名表单33333",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-11 21:04:13"
            },
            {
              "formId": "cff6400dc1d94fe1a4d85ff67eca12d8",
              "formName": "group",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-10 14:26:36"
            },
            {
              "formId": "e4b6285a13ca40049cf4b3597b2e9006",
              "formName": "个人报销",
              "logo": "{\"icon\": \"el-icon-eleme\", \"background\": \"#1e90ff\"}",
              "isStop": false,
              "updated": "2023-04-07 20:39:53"
            }
          ]
        },
        {
          "id": 1,
          "name": "其他",
          "items": []
        },
        {
          "id": 431,
          "name": "已停用",
          "items": []
        }
      ]
      this.formList.list = rspdata
        this.formList.list.forEach(group => {
          this.actives.push(group.name)
          group.items.forEach(item => {
            item.logo = JSON.parse(item.logo)
          })
        })
        this.groups = rspdata

      // getFormGroups().then(rsp => {
      //   this.formList.list = rsp.data
      //   this.formList.list.forEach(group => {
      //     this.actives.push(group.name)
      //     group.items.forEach(item => {
      //       item.logo = JSON.parse(item.logo)
      //     })
      //   })
      //   this.groups = rsp.data
      // }).catch(err => this.$message.error('获取分组异常'))
    },
    enterItem(item) {
      this.selectForm = item
      this.openItemDl = true
    },
    submitForm() {
      this.$refs.processForm.validate(valid => {
        if (valid) {
          this.$message.success("表单填写OK了，提交功能还在开发哦")
        } else {
          this.$message.warning("请完善表单😥")
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.workspace {
  padding: 50px 20px;
  position: relative;

  .back {
    position: absolute;
    left: 20px;
    top: 13px;
  }

  .no-data {
    text-align: center;
    padding: 50px 0;
    color: #656565;
    margin: 0 auto;
  }

  /deep/ .el-collapse {
    padding: 0 15px;
    background: #ffffff;

    .el-collapse-item__header {
      font-size: medium;
    }

    .el-collapse-item__wrap {
      padding: 20px 10px;
    }

    .el-tabs--border-card .el-tabs__content {
      padding: 40px 15px;
    }
  }

  .form-item {
    padding: 15px 10px;
    width: 220px;
    cursor: pointer;
    border: 1px solid #d9dada;
    border-radius: 5px;
    float: left;
    margin: 5px 10px;
    // height: 37px;

    &:hover {
      border: 1px solid #448ed7;

      span {
        display: inline-block !important;
      }
    }

    i {
      padding: 8px;
      border-radius: 8px;
      float: left;
      font-size: 20px;
      color: #ffffff;
      background: #38adff;
      // height: 20px;
      // line-height: 20px;
    }

    div {
      height: 35px;
      line-height: 35px;

      div {
        display: inline-block;
        margin-left: 10px;
        width: 100px;
      }

      span {
        display: none;
        float: right;
        color: #38adff;
        font-size: 12px;
      }
    }

    /*span:nth-child(1) {
      float: left;
      margin: 5px 0 0 10px;
    }*/
    /*span:nth-child(1) {
      float: right;
      color: #448ed7;
      font-size: x-small;
      margin: 5px 0 5px 0;
    }*/
  }
}

@media screen and (max-width: 800px) {
  .form-item {
    padding: 12px 10px !important;
    width: 150px !important;
    margin: 5px !important;

    &:hover {
      span:last-child {
        display: none !important;
      }
    }
  }
}
</style>
