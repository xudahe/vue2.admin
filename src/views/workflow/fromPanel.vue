<template>
  <div class="fromPanel" style="width: 100%;height: 100%;">
    <div v-if="!visible" style="width: 100%;height: 100%;padding: 20px 50px;" class="fade-in-right1">
      <div class="from-title">
        <span>流程面板</span>
        <div style="float: right;">
          <el-button type="primary" icon="el-icon-plus" size="mini" @click="newProcess" style="border-radius: 15px;">新建流程</el-button>
          <el-button icon="el-icon-plus" @click="addGroup" size="mini" style="border-radius: 15px;">新建分组</el-button>
        </div>
      </div>
      <draggable :list="groups" group="group" handle=".el-icon-rank" filter=".undrag" @start="groupsSort = true" :options="{animation: 300 ,sort:true, scroll: true, chosenClass:'choose'}" @end="groupSort">
        <div :class="{'form-group':true, 'undrag': (group.id === 0 || group.id === undefined)}" v-show="group.id > 1 || group.items.length > 0 " v-for="(group, gidx) in groups" :key="gidx">
          <div class="form-group-title">
            <span>{{group.name}}</span>
            <span>({{group.items.length}})</span>
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
          <draggable style="width: 100%; min-height:15px" :list="group.items" group="from" @end="groupSort" v-show="!groupsSort" filter=".undrag" :options="{animation: 300, delay: 200, chosenClass:'choose', scroll: true, sort:true}">
            <div :class="{'form-group-item':true, 'undrag': item.isStop}" v-for="(item, index) in group.items" :key="index" title="长按0.5S后可拖拽表单进行排序">
              <div>
                <i :class="item.icon" :style="'background: '+item.background"></i>
                <span>{{item.name}}</span><br>
              </div>
              <div class="desp">{{item.remark}}</div>
              <div>
                <span>最后更新时间：{{item.updated}}</span>
              </div>
              <div>
                <el-button type="text" icon="el-icon-edit-outline" size="mini" @click="editFrom(item, group)">编辑</el-button>
                <el-button type="text" :icon="item.isStop ? 'el-icon-check':'el-icon-close'" size="mini" @click="stopFrom(item)">
                  {{item.isStop ? '启用' : '停用'}}
                </el-button>
                <el-button type="text" icon="el-icon-delete" size="mini" @click="moveFrom(item)" v-if="item.isStop">删除 </el-button>
                <el-popover placement="left" trigger="click" width="400" style="margin-left: 10px" @show="moveSelect === null" v-else>
                  <el-radio-group v-model="moveSelect" size="mini">
                    <el-radio :label="g.id" border v-for="g in groups" :key="g.id" v-show="g.id > 1" :disabled="g.id === group.id" style="margin: 10px;">{{g.name}}</el-radio>
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
            <el-button style="padding-top: 0" type="text" icon="el-icon-plus" @click="newProcess">创建新流程</el-button>
          </div>
        </div>
      </draggable>
    </div>
    <div v-else style="width: 100%;height: 100%;" class="fade-in-left1">
      <layout @exit="exit" :mockData="mockData"></layout>
    </div>
  </div>
</template>

<script>
/**
 * <draggable></draggable> 使用 vue.draggable 拖拽插件
 * 官网地址：https://www.itxst.com/vue-draggable/tutorial.html
 * 参考项目：https://gitee.com/cestr/approvalFlow
 */

import layout from './layout.vue';
import draggable from "vuedraggable";

export default {
  name: 'fromPanel',
  components: {
    draggable,
    layout,
  },
  data() {
    return {
      moveSelect: '',
      visible: false,
      groupsSort: false,
      groups: [],
      mockData: {},
    }
  },
  created() {
    //初始化阻止Firefox的默认拖拽搜索行为
    document.body.ondrop = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };
  },
  mounted() {
    this.getGroups()
  },
  methods: {
    exit(flag) {
      this.visible = flag;
    },
    getGroups() {
      this.groups = [
        { "id": 80, "name": "12312", "items": [] },
        { "id": 1, "name": "其他", "items": [{ "id": "68408993", "tgId": 44, "name": "补卡申请", "icon": "el-icon-s-claim", "isStop": false, "remark": "", "background": "rgba(255, 140, 0, 1)", "updated": "2021-08-26 11:39:58" }, { "id": "74143105", "tgId": 47, "name": "办公资源采购申请", "icon": "el-icon-s-goods", "isStop": false, "remark": "申请购买办公资料", "background": "rgba(5, 167, 5, 1)", "updated": "2021-09-18 17:42:25" }, { "id": "68268693", "tgId": 43, "name": "资产报废流程", "icon": "el-icon-s-platform", "isStop": false, "remark": "", "background": "rgba(0, 206, 209, 1)", "updated": "2021-09-16 17:52:15" }] },
        { "id": 0, "name": "已停用", "items": [{ "id": "98005189", "tgId": 136, "name": "未命名的流程", "icon": "el-icon-s-custom", "isStop": true, "remark": "", "background": "#FF7800", "updated": "2021-09-22 16:22:54" }, { "id": "98005189", "tgId": 136, "name": "未命名的流程", "icon": "el-icon-s-custom", "isStop": true, "remark": "", "background": "#FF7800", "updated": "2021-09-22 16:22:54" }] }
      ]
    },
    newProcess() { //创建新表单
      this.mockData = this.$store.state.workflow.mockData;
      this.visible = true;
    },
    groupSort() { //表单排序
      this.groupsSort = false
      //   groupItemsSort(this.groups).then(rsp => {
      //     this.$message.success(rsp.data)
      //     this.getGroups()
      //   }).catch(err => {
      //     this.getGroups()
      //     this.$message.error(err.response.data)
      //   })
    },
    addGroup() {
      this.$prompt('请输入要添加的组名', '新的分组名', {
        confirmButtonText: '提交',
        cancelButtonText: '取消',
        inputPattern: /^[\u4E00-\u9FA5A-Za-z0-9\\-]{1,30}$/,
        inputErrorMessage: '分组名不能为空且长度小于30',
        inputPlaceholder: '请输入分组名'
      }).then(({ value }) => {
        // updateGroup({ name: value }, 'post').then(rsp => {
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
        // updateGroup({ id: group.id }, 'delete').then(rsp => {
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
        // updateGroup({ id: group.id, name: value }, 'put').then(rsp => {
        //   this.$message.success(rsp.data)
        //   this.getGroups()
        // }).catch(err => this.$message.error(err.response.data))
      })
    },
    updateForm(item, type) {
      //   updateTemplate({ templateId: item.id, type: type }).then(rsp => {
      //     this.$message.success(rsp.data)
      //     this.getGroups()
      //   }).catch(err => this.$message.error(err.response.data))
    },
    editFrom(item, group) {
      //   getFormDetail({ templateId: item.id }).then(rsp => {
      //     let data = rsp.data;
      //     this.$router.push("/layout/baseSetup");
      //   }).catch(err => {
      //     this.$message.error(err.response.data)
      //   });
    },
    stopFrom(item) {
      let tip = item.isStop ? ' 启用后将会进入 “其他” 分组，是否继续？' : ' 停用后将会被转移到 “已停用” 分组，您可以再次启用或者删除它，是否继续?';
      this.$confirm(item.name + tip, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // this.updateForm(item, (item.isStop ? 'using' : 'stop'));
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
        // updateTemplate({ templateId: item.id, type: 'move', groupId: this.moveSelect }).then(rsp => {
        //   this.$message.success(rsp.data)
        //   this.getGroups()
        //   this.moveSe  l ect = null
        //  } ).catch(err = > this.$message.error(err.response.ata))
      }
    },
  }
}
</script>

<style lang="less" scoped>
.undrag {
  background: #ebecee !important;
}

.choose {
  background: #e9ebee;
}

.form-group {
  margin: 20px 0;
  padding: 5px 0px;
  border-radius: 10px;
  //border: 1px solid #d3d3d3;
  box-shadow: 1px 1px 10px 0 #d2d2d2;

  &:hover {
    box-shadow: 1px 1px 12px 0 #b3b3b3;
  }

  .form-group-title {
    padding: 5px 20px;
    height: 40px;
    line-height: 40px;
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
    height: 50px;
    position: relative;
    line-height: 40px;
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
