<template>
  <div class="menu_manager card_css">
    <el-card class="box-card" shadow="hover">
      <!--工具条-->
      <v-header icon="md-podium" text="菜单列表">
        <div slot="content"></div>
        <div style="text-align: right;">
          <!--快速查询字段-->
          <el-input v-model="filters.name" style="width:160px;padding-right: 5px;" placeholder="菜单名称"></el-input>
          <!--快速查询字段-->
          <el-select v-model="filters.parentId" style="width:160px !important;padding-right: 5px;" placeholder="父级菜单"
            filterable clearable @change="searchData">
            <el-option v-for="(item, index) in parentData" :key="index" :label="item.menuName" :value="item.guid">
            </el-option>
          </el-select>
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
      <el-form :model="menuForm" label-width="80px" :rules="formRules" ref="menuForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="路由地址" prop="className">
              <el-input v-model="menuForm.className" autocomplete="off" placeholder="请输入路由地址" clearable></el-input>
            </el-form-item>
            <el-form-item label="系统名称" prop="systemId">
              <el-select v-model="menuForm.systemId" placeholder="请选择系统名称" filterable clearable style="width: 100%;">
                <el-option :label="item.systemName" :value="item.guid" :key="index"
                  v-for="(item, index) in platformData"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="加载方式" prop="loadWay">
              <el-select v-model="menuForm.loadWay" placeholder="请选择系统名称" style="width: 100%;">
                <el-option label="右侧" value="右侧"></el-option>
                <el-option label="顶部" value="顶部"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="缓存组件" prop="cache">
              <el-radio-group v-model="menuForm.cache">
                <el-radio :label="true">要缓存</el-radio>
                <el-radio :label="false">不缓存</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="菜单名称" prop="menuName">
              <el-input v-model="menuForm.menuName" autocomplete="off" placeholder="请输入菜单名称" clearable></el-input>
            </el-form-item>
            <el-form-item label="父级菜单" prop="parentId">
              <el-select v-model="menuForm.parentId" placeholder="请选择父级菜单" filterable clearable style="width: 100%;">
                <el-option :label="item.menuName" :value="item.guid" :key="index" v-for="(item, index) in parentData">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="加载序号" prop="index">
              <el-input v-model="menuForm.index" autocomplete="off" placeholder="请输入加载序号" clearable></el-input>
            </el-form-item>
            <el-form-item label="菜单状态" prop="enabled">
              <el-radio-group v-model="menuForm.enabled">
                <el-radio :label="false">正常</el-radio>
                <el-radio :label="true">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="菜单图标" prop="icon">
              <el-popover placement="bottom-start" width="400" trigger="click" @show="$refs['iconSelect'].reset()">
                <IconSelect ref="iconSelect" @selected="selected" />
                <el-input slot="reference" v-model="menuForm.icon" placeholder="点击选择图标" readonly>
                  <svg-icon v-if="menuForm.icon" slot="prefix" :icon-class="menuForm.icon" class="el-input__icon"
                    style="height: 32px;width: 16px;" />
                  <i v-else slot="prefix" class="el-icon-search el-input__icon" />
                  <i slot="suffix" class="el-icon-circle-close el-input__icon" v-if="menuForm.icon"
                    style="cursor: pointer" @click="menuForm.icon = ''" />
                </el-input>
              </el-popover>
            </el-form-item>
            <el-form-item label="备注" prop="remark">
              <el-input v-model="menuForm.remark" autocomplete="off" type="textarea"></el-input>
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

export default {
  name: 'menu_manager',
  data() {
    return {
      logining: false, //提交中
      loading: false, //加载中

      filters: {
        name: "",
        parentId: "",
      },
      parentData: [],
      tableData: [],
      tableLabel: [
        // { label: '标识', param: 'id', width: '60', },
        // { label: '系统名称', param: 'systemName'},
        { label: '路由地址', param: 'className' },
        { label: '菜单名称', param: 'menuName' },
        { label: '父级菜单', param: 'parentName' },
        { label: '备注', param: 'remark' },
        { label: '排序', param: 'index', width: '60' },
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

      sels: {}, //列表选中列

      nowPage: 1, // 当前页数
      nowSize: 15, // 当前页条数

      formTitle: '',
      formVisible: false, //界面是否显示
      formRules: {
        // className: [{ required: true, message: "请输入菜单类名", trigger: "blur" }],
        // menuName: [{ required: true, message: "请输入菜单名称", trigger: "blur" }],
      },
      //表单数据
      initForm: {
        id: 0,
        systemName: '',//后台改完之后会移除该参数
        systemId: '',
        className: '',
        menuName: '',
        icon: '',
        parentId: '',
        loadWay: '',
        index: '',
        enabled: false,
        remark: '',
        cache: '',
      },
      menuForm: {},

      platformData: [],
    }
  },
  methods: {
    //获取菜单列表
    searchData() {
      let _this = this;
      this.$ajax(this.$apiSet.getMenuInfo, {
        menuName: this.filters.name,
        parentId: this.filters.parentId,
      })
        .then(res => {
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
    getParentData() {
      let _this = this;
      this.$ajax(this.$apiSet.GetParentMenu)
        .then(res => {
          if (!res.data.success) {
            _this.$errorMsg(res.data.message)
          } else {
           _this.parentData = res.data.response;
          }
        }).catch(err => { })
    },
    handleButton(val) {
      if (val.methods == 'handleEdit') this.handleEdit(val.index, val.row)
      if (val.methods == 'handleDelete') this.handleDelete(val.index, val.row)
    },
    handleSelectionChange(val) {
      this.sels = val;
    },
    disable(row) {
      let _this = this;
      this.$showMsgBox({
        msg: `<p>是否${row.enabled ? `启用` : `禁用`}【${row.menuName}】菜单?</p>`,
        type: 'warning',
        isHTML: true
      }).then(() => {
        this.$ajax(this.$apiSet.disableMenu, {
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
        msg: `<p>您确定要删除【${row.menuName}】菜单?</p>`,
        type: 'warning',
        isHTML: true
      }).then(() => {
        this.$ajax(this.$apiSet.deleteMenu, {
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
      this.menuForm = Object.assign({}, row);
    },
    //显示新增界面
    plusData() {
      this.formTitle = "新增";
      this.formVisible = true;
      this.menuForm = JSON.parse(JSON.stringify(this.initForm));
    },
    //获取系统列表
    getSystemData() {
      let _this = this;
      this.$ajax(this.$apiSet.getSystemInfo, {}).then(res => {
        if (!res.data.success) {
          _this.$errorMsg(res.data.message)
        } else {
          _this.platformData = res.data.response;
        }
      }).catch(err => { })
    },
    // 选择icon
    selected(name) {
      this.menuForm.icon = name;
    },
    handleSubmit: debounce(function () {
      let _this = this;

      // this.menuForm.icon = this.$isNull(this.menuForm.icon) ? "el-icon-edit-outline" : this.menuForm.icon;//图标暂时写死
      this.menuForm.icon = "el-icon-edit-outline"

      if (this.$isNull(this.menuForm.className))
        return this.$warnMsg("路由地址不能为空！")
      if (this.$isNull(this.menuForm.menuName))
        return this.$warnMsg("菜单名称不能为空！")
      if (this.$isNull(this.menuForm.index))
        return this.$warnMsg("加载序号不能为空！")

      if (this.menuForm.className.slice(0, 1) != "/") {
        this.menuForm.className = "/" + this.menuForm.className;
      }

      let apiUrl = this.formTitle == '编辑' ? this.$apiSet.putMenu : this.$apiSet.postMenu;

      this.logining = true;
      this.$ajax(apiUrl, this.menuForm)
        .then(res => {
          this.logining = false;

          if (!res.data.success) {
            _this.$errorMsg(res.data.message)
          } else {
            _this.formVisible = false;
            _this.searchData();
            _this.getParentData();
            _this.$successMsg(res.data.message)
          }
        }).catch(err => {
          this.logining = false;
        })
    }, 1000),
    refreshData() {
      this.loading = true;
      this.searchData();
      this.getParentData();
    },
  },
  mounted() {
    this.refreshData();
    this.getSystemData();
  }
};
</script>

<style scoped>
.menu_manager {
  height: 100%;
  width: 100%;
}
</style>
