<template>
  <div class="from-panel" ref="panel">
    <div class="from-title">
      <el-button icon="el-icon-back" type="info" size="mini" circle plain style="margin-right: 15px"
        @click="$router.push('/workflow')"></el-button>
      <span>流程面板</span>
      <span style="color: #c75450; margin-left: 20px">📢 注意事项</span>
      <div>
        <el-button type="primary" icon="el-icon-plus" size="mini" @click="newProcess">新建表单</el-button>
        <el-button icon="el-icon-plus" @click="addGroup" size="mini">新建分组</el-button>
      </div>
    </div>
    <draggable :list="groups" group="group" handle=".el-icon-rank" filter=".undrag" @start="groupsSort = true"
      :options="{ animation: 300, sort: true, scroll: true, chosenClass: 'choose' }" @end="groupSort">
      <div :class="{ 'form-group': true, 'undrag': (group.id === 0 || group.id === undefined) }"
        v-show="group.id > 1 || group.items.length > 0" v-for="(group, gidx) in groups" :key="gidx">
        <div class="form-group-title">
          <span>{{ group.name }}</span>
          <span>({{ group.items.length }})</span>
          <i class="el-icon-rank" title="长按拖动可对分组排序"></i>
          <div v-if="!(group.id === 0 || group.id === undefined)">
            <el-dropdown>
              <el-button type="text" icon="el-icon-setting">编辑分组</el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-edit-outline" @click.native="editGroup(group)">修改名称</el-dropdown-item>
                <el-dropdown-item icon="el-icon-delete" @click.native="delGroup(group)">删除分组</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <draggable style="width: 100%; min-height:25px" :list="group.items" group="from" @end="groupSort"
          v-show="!groupsSort" filter=".undrag"
          :options="{ animation: 300, delay: 200, chosenClass: 'choose', scroll: true, sort: true }">
          <div :class="{ 'form-group-item': true, 'undrag': item.isStop }" v-for="(item, index) in group.items"
            :key="index" title="长按0.5S后可拖拽表单进行排序">
            <div>
              <i :class="item.logo.icon" :style="'background: ' + item.logo.background"></i>
              <span>{{ item.formName }}</span><br>
            </div>
            <div class="desp">{{ item.remark }}</div>
            <div>
              <span>最后更新时间：{{ item.updated }}</span>
            </div>
            <div>
              <el-button type="text" icon="el-icon-edit-outline" size="mini" @click="editFrom(item, group)">编辑</el-button>
              <el-button type="text" :icon="item.isStop ? 'el-icon-check' : 'el-icon-close'" size="mini"
                @click="stopFrom(item)">
                {{ item.isStop ? '启用' : '停用' }}
              </el-button>

              <el-button type="text" icon="el-icon-delete" size="mini" @click="moveFrom(item)" v-if="item.isStop">删除
              </el-button>
              <el-popover placement="left" trigger="click" width="400" style="margin-left: 10px"
                @show="moveSelect === null" v-else>
                <el-radio-group v-model="moveSelect" size="mini">
                  <el-radio :label="g.id" border v-for="g in groups" :key="g.id" v-show="g.id > 1"
                    :disabled="g.id === group.id" style="margin: 10px;">{{ g.name }}</el-radio>
                </el-radio-group>
                <div style="text-align: right; margin: 0">
                  <el-button type="primary" size="mini" @click="moveFrom(item)">提交</el-button>
                </div>
                <el-button slot="reference" type="text" icon="el-icon-s-promotion" size="mini">移动</el-button>
              </el-popover>
            </div>
          </div>
        </draggable>
        <div style="text-align: center" v-if="group.items === undefined || group.items.length === 0">
          <el-button style="padding-top: 0" type="text" icon="el-icon-plus"
            @click="newProcess(group.id)">创建新表单</el-button>
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>

/**
 * https://gitee.com/willianfu/jw-workflow-engine
 * 
 * http://150.158.162.224:82/#/index
 */

import draggable from "vuedraggable";
// import {
//   getFormGroups, groupItemsSort,
//   getFormDetail, updateGroup, updateForm
// } from '@/api/design'

export default {
  name: "FormsPanel",
  components: { draggable },
  data() {
    return {
      moveSelect: '',
      visible: false,
      groupsSort: false,
      groups: []
    }
  },
  mounted() {
    this.getGroups()
  },
  methods: {
    getGroups() {
      this.groups = [
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

      // getFormGroups().then(rsp => {
      //   this.groups = rsp.data
      this.groups.forEach(group => {
        group.items.forEach(item => {
          item.logo = JSON.parse(item.logo)
        })
      })
      // }).catch(err => this.$message.error('获取分组异常'))
    },
    newProcess(groupId) {
      // this.$store.commit("setTemplate", this.getTemplateData());
      this.$store.commit("setIsEdit", false);
      this.$router.push("/formProcess?groupId=" + groupId);
    },
    groupSort() {
      this.groupsSort = false
      // groupItemsSort(this.groups).then(rsp => {
      //   this.$message.success(rsp.data)
      //   this.getGroups()
      // }).catch(err => {
      //   this.getGroups()
      //   this.$message.error(err.response.data)
      // })
    },
    addGroup() {
      this.$prompt('请输入要添加的组名', '新的分组名', {
        confirmButtonText: '提交',
        cancelButtonText: '取消',
        inputPattern: /^[\u4E00-\u9FA5A-Za-z0-9\\-]{1,30}$/,
        inputErrorMessage: '分组名不能为空且长度小于30',
        inputPlaceholder: '请输入分组名'
      }).then(({ value }) => {
        // updateGroup({name: value}, 'post').then(rsp => {
        //   this.$message.success(rsp.data)
        //   this.getGroups()
        // }).catch(err => this.$message.error(err.response.data))
      })
    },
    delGroup(group) {
      this.$confirm('删除分组并不会删除表单，表单将会被转移到 “其他” 分组，确定要删除分组 ' + group.name + '?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // updateGroup({id: group.id}, 'delete').then(rsp => {
        //   this.$message.success(rsp.data)
        //   this.getGroups()
        // }).catch(err => this.$message.error(err.response.data))
      })
    },
    editGroup(group) {
      this.$prompt('请输入新的组名', '修改分组名', {
        confirmButtonText: '提交',
        cancelButtonText: '取消',
        inputPattern: /^[\u4E00-\u9FA5A-Za-z0-9\\-]{1,30}$/,
        inputErrorMessage: '分组名不能为空且长度小于30',
        inputPlaceholder: '请输入分组名',
        inputValue: group.name
      }).then(({ value }) => {
        // updateGroup({id: group.id, name: value}, 'put').then(rsp => {
        //   this.$message.success(rsp.data)
        //   this.getGroups()
        // }).catch(err => this.$message.error(err.response.data))
      })
    },
    updateForm(item, type) {
      // updateForm({templateId: item.id, type: type}).then(rsp => {
      //   this.$message.success(rsp.data)
      //   this.getGroups()
      // }).catch(err => this.$message.error(err.response.data))
    },
    getTemplateData(data, group) {
      return data
    },
    editFrom(item, group) {
      this.$router.push("/formProcess?code=" + item.formId);
    },
    stopFrom(item) {
      let tip = item.isStop ? ' 启用后将会进入 “其他” 分组，是否继续？' : ' 停用后将会被转移到 “已停用” 分组，您可以再次启用或者删除它，是否继续?';
      this.$confirm(item.name + tip, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.updateForm(item, (item.isStop ? 'using' : 'stop'));
      })
    },
    moveFrom(item) {
      if (item.isStop) {
        this.$confirm('您确定要删除表单 ' + item.name + ' 吗，删除后无法恢复，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.updateForm(item, 'delete');
        })
      } else {
        if (this.moveSelect === null || this.moveSelect === '') {
          this.$message.error('请选择分组')
          return;
        }
        // updateForm({templateId: item.id, type: 'move', groupId: this.moveSelect}).then(rsp => {
        //   this.$message.success(rsp.data)
        //   this.getGroups()
        //   this.moveSelect = null
        // }).catch(err => this.$message.error(err.response.data))
      }
    },
  }
}
</script>

<style lang="less" scoped>
body {
  background: #ffffff !important;
}

.undrag {
  background: #ebecee !important;
}

.from-panel {
  padding: 50px 100px;
  min-width: 500px;
  background: #ffffff;

  /deep/ .from-title {
    div {
      float: right;

      .el-button {
        border-radius: 15px;
      }
    }
  }

  //height: 100vh;
}

.choose {
  background: #e9ebee;
}

.form-group {
  margin: 20px 0;
  // padding: 5px 0px;
  border-radius: 10px;
  //border: 1px solid #d3d3d3;
  box-shadow: 1px 1px 10px 0 #d2d2d2;

  &:hover {
    box-shadow: 1px 1px 12px 0 #b3b3b3;
  }

  .form-group-title {
    padding: 5px 20px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #d3d3d3;

    .el-icon-rank {
      display: none;
      cursor: move;
    }

    &:hover {
      .el-icon-rank {
        display: inline-block;
      }
    }

    div {
      display: inline-block;
      float: right;
    }

    span:first-child {
      margin-right: 5px;
      font-size: 15px;
      font-weight: bold;
    }

    span:nth-child(2) {
      color: #656565;
      font-size: small;
      margin-right: 10px;
    }

    /deep/ .el-button {
      color: #404040;
      margin-left: 20px;

      &:hover {
        color: #2b2b2b;
      }
    }
  }

  .form-group-item:nth-child(1) {
    border-top: none !important;
  }

  .form-group-item {
    color: #3e3e3e;
    font-size: small;
    padding: 10px 0;
    margin: 0 20px;
    height: 60px;
    position: relative;
    line-height: 45px;
    border-top: 1px solid #d3d3d3;

    div {
      display: inline-block;
    }

    i {
      border-radius: 10px;
      padding: 7px;
      font-size: 20px;
      color: #ffffff;
      margin-right: 10px;
    }

    div:nth-child(1) {
      float: left;
    }

    div:nth-child(2) {
      position: absolute;
      color: #7a7a7a;
      font-size: 12px;
      left: 200px;
      max-width: 300px;
      overflow: hidden;
    }

    div:nth-child(3) {
      position: absolute;
      right: 30%;
    }

    div:nth-child(4) {
      float: right;
    }
  }
}

@media screen and (max-width: 1000px) {
  .desp {
    display: none !important;
  }
}

@media screen and (max-width: 800px) {
  .from-panel {
    padding: 50px 10px;
  }
}
</style>
