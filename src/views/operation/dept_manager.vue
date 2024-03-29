<template>
  <div class="dept_manager card_css">
    <el-card class="box-card" shadow="hover">
      <!--工具条-->
      <v-header icon="md-podium" text="部门列表">
        <div slot="content"></div>
        <div style="text-align: right;">
          <!--快速查询字段-->
          <el-input v-model="filters.name" style="width:160px;padding-right: 5px;" placeholder="部门名称"></el-input>
          <!--操作按钮组-->
          <el-tooltip content="查询">
            <el-button type="primary" icon="el-icon-search" circle @click.native="searchData"></el-button>
          </el-tooltip>
          <el-tooltip content="新增">
            <el-button type="primary" icon="el-icon-plus" circle @click.native="plusData"></el-button>
          </el-tooltip>
          <el-tooltip content="刷新">
            <el-button type="primary" icon="el-icon-refresh" circle @click.native="refreshData"></el-button>
          </el-tooltip>
        </div>
      </v-header>

      <!--列表-->
      <e-table :table-data="tableData" :loading="loading" :table-label="tableLabel" :table-option="tableOption"
        :now-page="nowPage" :now-size="nowSize" @handleButton="handleButton"
        @handleSelectionChange="handleSelectionChange" @searchData="searchData"></e-table>
    </el-card>

    <!--弹出界面-->
    <el-dialog :title="formTitle" :visible.sync="formVisible" v-model="formVisible" :close-on-click-modal="false">
      <el-form :model="deptForm" label-width="80px" :rules="formRules" ref="deptForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="部门名称" prop="deptName">
              <el-input v-model="deptForm.deptName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="负责人" prop="deptUser">
              <el-select v-model="deptForm.deptUser" placeholder="请选择部门负责人" filterable clearable style="width: 100%;">
                <el-option :label="item.realName" :value="item.id" :key="index" v-for="(item, index) in userData">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="备注" prop="remark">
              <el-input v-model="deptForm.remark" autocomplete="off" type="textarea"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="部门编码" prop="deptCode">
              <el-input v-model="deptForm.deptCode" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="上级部门" prop="parentId" filterable clearable>
              <el-select v-model="deptForm.parentId" placeholder="请选择上级部门" filterable clearable style="width: 100%;">
                <el-option :label="item.deptName" :value="item.id" :key="index" v-for="(item, index) in tableData">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="状态" prop="enabled">
              <el-radio-group v-model="deptForm.enabled">
                <el-radio :label="false" border>正常</el-radio>
                <el-radio :label="true" border>禁用</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="formVisible = false">取消</el-button>
        <el-button type="primary" @click.native="handleSubmit" :loading="logining">提交</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { debounce } from '@/api/control/index.js'
import apiSetting from "@/api/apiSetting.js"

export default {
  name: 'dept_manager',
  components: {},
  data() {
    return {
      logining: false, //提交中
      loading: false, //加载中

      filters: {
        name: ""
      },
      tableData: [],
      tableLabel: [
        { label: '部门编码', param: 'deptCode' },
        { label: '部门名称', param: 'deptName' },
        { label: '部门负责人', param: 'deptUser' },
        { label: '备注', param: 'remark' },
        {
          label: '更新时间', param: 'createTime', sortable: true, width: '160',
          formatter: row => {
            return this.$formatDate(new Date(this.$isNull(row.modifyTime) ? row.createTime : row.modifyTime), true);
          }
        },
        {
          label: '状态', param: 'enabled', width: '80',
          render: (h, params) => {
            if (!params.row.enabled) {
              return h('el-tag', {
                props: {
                  type: 'success',
                  size: 'mini',
                },
                style: {
                  cursor: 'pointer'
                },
                on: {
                  click: e => {
                    e.stopPropagation(); //阻止row-click事件冒泡
                    this.disable(params.row)
                  }
                }
              }, '正常')
            }
            else {
              return h('el-tag', {
                props: {
                  type: 'danger',
                  size: 'mini',
                },
                style: {
                  cursor: 'pointer'
                },
                on: {
                  click: e => {
                    e.stopPropagation(); //阻止row-click事件冒泡
                    this.disable(params.row)
                  }
                }
              }, '禁用')
            }
          },
        },
      ],
      tableOption: {
        label: '操作',
        width: '160',
        options: [
          { label: '', type: 'primary', icon: 'el-icon-edit', methods: 'handleEdit' },
          { label: '', type: 'danger', icon: 'el-icon-delete', methods: 'handleDelete' },
        ]
      },

      nowPage: 1, // 当前页数
      nowSize: 15, // 当前页条数

      sels: {}, //列表选中列

      formTitle: '',
      formVisible: false, //界面是否显示
      formRules: {
        // deptName: [{ required: true, message: "请输入部门名称", trigger: "blur" }],
      },
      //表单数据
      initForm: {
        id: 0,
        deptCode: "",
        deptName: "",
        deptUser: "",
        parentId: "",
        remark: '',
        enabled: false
      },
      deptForm: {},
      userData: [],

    }
  },
  methods: {
    //获取部门列表
    searchData() {
      let _this = this;
      this.$ajax(apiSetting.getDeptInfo, {
        key: this.filters.name
      }).then(res => {
        _this.loading = false;
        if (!res.data.success) {
          _this.$errorMsg(res.data.message)
        } else {
          _this.tableData = res.data.response;
        }
      }).catch(err => {
        _this.loading = false;
      })
    },
    getUserData() {
      let _this = this;
      this.$ajax(apiSetting.getUserInfo)
        .then(res => {
          if (!res.data.success) {
            _this.$errorMsg(res.data.message)
          } else {
            _this.userData = res.data.response;
          }
        }).catch(err => { })
    },
    handleButton(val) {
      if (val.methods == 'handleEdit') this.handleEdit(val.index, val.row)
      if (val.methods == 'handleDelete') this.handleDelete(val.index, val.row)
    },
    handleSelectionChange(val) {
      this.sels = sels;
    },
    disable(row) {
      let _this = this;
      this.$showMsgBox({
        msg: `<p>是否${row.enabled ? `启用` : `禁用`}【${row.deptName}】部门?</p>`,
        type: 'warning',
        isHTML: true
      }).then(() => {
        this.$ajax(apiSetting.disableDept, {
          id: row.id,
          falg: !row.enabled
        }).then(res => {
          if (!res.data.success) {
            _this.$errorMsg(res.data.message)
          } else {
            _this.searchData();
            _this.$successMsg(res.data.message)
          }
        }).catch(err => { })
      }).catch(() => { });
    },
    //删除
    handleDelete(index, row) {
      let _this = this
      this.$showMsgBox({
        msg: `<p>您确定要删除【${row.deptName}】部门?</p>`,
        type: 'warning',
        isHTML: true
      }).then(() => {
        this.$ajax(apiSetting.deleteDept, {
          id: row.id
        }).then(res => {
          if (!res.data.success) {
            _this.$errorMsg(res.data.message)
          } else {
            _this.searchData();
            _this.$successMsg(res.data.message)
          }
        }).catch(err => { })
      }).catch(() => { });
    },
    //显示编辑界面
    handleEdit(index, row) {
      this.formTitle = "编辑";
      this.formVisible = true;
      this.deptForm = JSON.parse(JSON.stringify(row));
    },
    //显示新增界面
    plusData() {
      this.formTitle = "新增";
      this.formVisible = true;
      this.deptForm = JSON.parse(JSON.stringify(this.initForm));
    },
    handleSubmit: debounce(function () {
      if (this.$isNull(this.deptForm.deptName))
        return this.$warnMsg("部门名称不能为空！")

      let apiUrl = this.formTitle == '编辑' ? apiSetting.putDept : apiSetting.postDept;
      let _this = this;

      this.logining = true;
      this.$ajax(apiUrl, this.deptForm)
        .then(res => {
          this.logining = false;

          if (!res.data.success) {
            _this.$errorMsg(res.data.message)
          } else {
            _this.formVisible = false;
            _this.searchData();
            _this.$successMsg(res.data.message)
          }
        }).catch(err => {
          this.logining = false;
        })
    }, 1000),
    refreshData() {
      this.loading = true;
      this.searchData();
      this.getUserData();
    },
  },
  mounted() {
    this.refreshData()
  }
};
</script>

<style scoped>
.dept_manager {
  height: 100%;
  width: 100%;
}
</style>
