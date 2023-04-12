<template>
  <w-dialog :border="false" closeFree width="600px" @ok="selectOk" :title="title" v-model="visible">
    <div class="picker">
      <div class="candidate" v-loading="loading">

        <div class="search-header">
          <el-input v-model="search" @input="searchUser" style="width: 95%;" size="small" clearable placeholder="关键字"
            prefix-icon="el-icon-search" />
        </div>

        <div class="org-items">
          <el-empty :image-size="100" description="似乎没有数据" v-show="nodes.length === 0" />

        </div>
      </div>
      <div class="selected">
        <div class="count">
          <span>已选 {{ select.length }} 项</span>
          <span @click="clearSelected">清空</span>
        </div>
        <div class="org-items" style="height: 350px;">
          <el-empty :image-size="100" description="请点击左侧列表选择数据" v-show="select.length === 0" />
          <div v-for="(org, index) in select" :key="index" :class="orgItemClass(org)">
            <div v-if="org.type === 'dept'">
              <i class="el-icon-folder-opened"></i>
              <span style="position: static" class="name">{{ org.name }}</span>
            </div>
            <div v-else-if="org.type === 'user'" style="display: flex; align-items: center">
              <el-avatar :size="35" :src="org.avatar" v-if="$isNotEmpty(org.avatar)" />
              <span v-else class="avatar">{{ getShortName(org.name) }}</span>
              <span class="name">{{ org.name }}</span>
            </div>
            <div v-else>
              <i class="iconfont icon-bumen"></i>
              <span class="name">{{ org.name }}</span>
            </div>
            <i class="el-icon-close" @click="noSelected(index)"></i>
          </div>
        </div>
      </div>
    </div>
  </w-dialog>
</template>

<script>

export default {
  name: "OrgPicker",
  components: {},
  props: {
    title: {
      default: '请选择',
      type: String
    },
    type: {
      default: 'org', //org选择部门/人员  user-选人  dept-选部门  role-选角色
      type: String
    },
    multiple: { //是否多选
      default: false,
      type: Boolean
    },
    selected: {
      default: () => {
        return []
      },
      type: Array
    },
  },
  data() {
    return {
      loading: false,
      visible: false,

      nodes: [],
      select: [
        {
          "id": 231535,
          "name": "生产管理部",
          "type": "dept"
        },
        {
          "id": 264868,
          "name": "行政人事部",
          "type": "dept"
        },
        {
          "id": 4319868,
          "name": "销售服务部",
          "type": "dept"
        },
        {
          "id": 6179678,
          "name": "研发部",
          "type": "dept"
        },
        {
          "id": 381496,
          "name": "旅人",
          "type": "user",
          "avatar": "https://pic.rmb.bdstatic.com/bjh/203726324a891b1946ba223209cb3fee.png"
        }
      ], //选中项
      search: '', //关键字
    }
  },
  methods: {
    show() {
      this.visible = true
      this.getOrgList()
    },
    orgItemClass(org) {
      return {
        'org-item': true,
        'org-dept-item': org.type === 'dept',
        'org-user-item': org.type === 'user',
        'org-role-item': org.type === 'role'
      }
    },
    getShortName(name) {
      if (name) {
        return name.length > 2 ? name.substring(1, 3) : name;
      }
      return '**'
    },
    noSelected(index) {
      this.select.splice(index, 1)
    },
    disableDept(node) {
      return this.type === 'user' && 'dept' === node.type
    },
    getOrgList() {
      // this.loading = true
      console.log(this.type)
    },
    searchUser() {
      this.loading = true
    },
    selectOk() {
      this.$emit('ok', Object.assign([], this.select.map(v => {
        v.avatar = undefined
        return v
      })))
      this.visible = false
    },
    clearSelected() {
      this.$confirm('您确定要清空已选中的项?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

      })
    },


  }
}
</script>

<style lang="less" scoped>
@containWidth: 280px;

.candidate,
.selected {
  position: absolute;
  display: inline-block;
  width: @containWidth;
  height: 400px;
  border: 1px solid #e8e8e8;
}

.picker {
  height: 402px;
  position: relative;
  text-align: left;

  .candidate {
    left: 0;
    top: 0;

    .role-header {
      padding: 10px !important;
      margin-bottom: 5px;
      border-bottom: 1px solid #e8e8e8;
    }

    .top-dept {
      margin-left: 20px;
      cursor: pointer;
      color: #38adff;
    }

    .next-dept {
      float: right;
      color: @theme-primary;
      cursor: pointer;
    }

    .next-dept-disable {
      float: right;
      color: #8c8c8c;
      cursor: not-allowed;
    }

    &>div:first-child {
      padding: 5px 10px;
    }

  }

  .selected {
    right: 0;
    top: 0;
  }

  .org-items {
    overflow-y: auto;
    height: 310px;

    .el-icon-close {
      position: absolute;
      right: 5px;
      cursor: pointer;
      font-size: larger;
    }

    .org-dept-item {
      padding: 10px 5px;

      &>div {
        display: inline-block;

        &>span:last-child {
          position: absolute;
          right: 5px;
        }
      }
    }

    .org-role-item {
      display: flex;
      align-items: center;
      padding: 10px 5px;
    }

    /deep/ .org-user-item {
      display: flex;
      align-items: center;
      padding: 5px;

      &>div {
        display: inline-block;
      }

      .avatar {
        width: 35px;
        text-align: center;
        line-height: 35px;
        background: @theme-primary;
        color: white;
        border-radius: 50%;
      }
    }

    /deep/ .org-item {
      margin: 0 5px;
      border-radius: 5px;
      position: relative;

      .el-checkbox {
        margin-right: 10px;
      }

      .name {
        margin-left: 5px;
      }

      &:hover {
        background: #f1f1f1;
      }
    }
  }
}

.selected {
  border-left: none;

  .count {
    width: calc(@containWidth - 0px);
    padding: 10px;
    display: inline-block;
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 5px;

    &>span:nth-child(2) {
      float: right;
      color: #c75450;
      cursor: pointer;
    }
  }
}

/deep/ .el-dialog__body {
  padding: 10px 20px;
}</style>
