<template>
  <div class="task_manager card_css">
    <el-card class="box-card" shadow="hover">
      <!--工具条-->
      <v-header icon="md-podium" text="任务调度列表">
        <div slot="content"></div>
        <div style="text-align: right;">
          <!--快速查询字段-->
          <el-input v-model="filters.name" style="width:200px;padding-right: 5px;" placeholder="任务名称"></el-input>
          <!--操作按钮组-->
          <el-button type="primary" icon="el-icon-search" circle @click.native="searchData"></el-button>
          <el-button type="primary" icon="el-icon-plus" circle @click.native="plusData"></el-button>
          <el-button type="primary" icon="el-icon-refresh" circle @click.native="refreshData"></el-button>
        </div>
      </v-header>

      <!--列表-->
      <e-table :table-data="tableData" :loading="loading" :table-label="tableLabel" :table-option="tableOption"
        :now-page="nowPage" :now-size="nowSize" :refresh="refresh" @handleButton="handleButton"
        @handleSelectionChange="handleSelectionChange" @searchData="searchData"></e-table>
    </el-card>

    <!--弹出界面-->
    <el-dialog :title="formTitle" :visible.sync="formVisible" top="30px" v-model="formVisible"
      :close-on-click-modal="false">
      <el-form :model="taskForm" label-width="100px" :rules="formRules" ref="taskForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="任务名称" prop="jobName">
              <el-input v-model="taskForm.jobName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="程序集" prop="assemblyName">
              <el-col :span="17">
                <el-input v-model="taskForm.assemblyName" auto-complete="off" readonly></el-input>
              </el-col>
              <el-col :span="7">
                <el-button style="width:100%;overflow: hidden;" @click.prevent="handleTask">选择</el-button>
              </el-col>
            </el-form-item>
            <el-form-item label="触发器类型" prop="triggerType">
              <el-select v-model="taskForm.triggerType" placeholder="请选择类型">
                <el-option label="simple" value="simple"></el-option>
                <el-option label="cron" value="cron"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Cron表达式" prop="cron" v-show="taskForm.triggerType == 'cron'">
              <el-popover placement="bottom-start" trigger="click" style="width:60%;">
                <cron ref="cronSelect" :isResult="false" v-model="taskForm.cron" />
                <el-input slot="reference" v-model="taskForm.cron" placeholder="Cron表达式" readonly></el-input>
              </el-popover>
            </el-form-item>
            <el-form-item label="循环周期" prop="intervalSecond" v-show="taskForm.triggerType == 'simple'">
              <el-input v-model="taskForm.intervalSecond" autocomplete="off" placeholder="如1分钟执行一次: 60">
                <template slot="append">秒</template>
              </el-input>
            </el-form-item>
            <el-form-item label="循环次数" prop="cycleRunTimes" v-show="taskForm.triggerType == 'simple'">
              <el-col :span="16">
                <el-tooltip placement="top">
                  <div slot="content">
                    设置成0时,就意味着无限制次数运行
                  </div>
                  <el-input-number v-model="taskForm.cycleRunTimes" style="width:100%;" :min="0" auto-complete="off">
                  </el-input-number>
                </el-tooltip>
              </el-col>
              <el-col :span="8">
                <span style="float:right;color: #aaa;">(单位：次)</span>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="任务分组" prop="jobGroup">
              <el-input v-model="taskForm.jobGroup" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="执行类名" prop="className">
              <el-input v-model="taskForm.className" auto-complete="off" readonly></el-input>
            </el-form-item>
            <el-form-item label="是否激活" prop="isStart" v-show="formTitle == '新增'">
              <el-radio-group v-model="taskForm.isStart" size="small" @change="radioChane">
                <el-radio class="radio" :label="true" border>是</el-radio>
                <el-radio class="radio" :label="false" border>否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="开始时间" prop="startTime">
              <el-date-picker type="date" placeholder="执行开始时间" v-model="taskForm.startTime"></el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间" prop="endTime">
              <el-date-picker type="date" placeholder="执行结束时间" v-model="taskForm.endTime"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="执行参数" prop="jobParams">
              <el-input v-model="taskForm.jobParams" autocomplete="off" type="textarea"
                :autosize="{ minRows: 1, maxRows: 6 }"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注" prop="remark">
              <el-input v-model="taskForm.remark" autocomplete="off" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <a href="http://cron.qqe2.com/" target="_blank">Cron表达式在线生成</a>
        <el-button @click.native="formVisible = false">取消</el-button>
        <el-button type="primary" @click.native="handleSubmit" :loading="logining">提交</el-button>
      </div>
    </el-dialog>

    <!--执行记录-->
    <el-dialog :title="logTitle" :visible.sync="logVisible" v-model="logVisible" width="1100px"
      :close-on-click-modal="false">
      <div v-html="logData" style="text-align: left;"></div>
    </el-dialog>

    <!--任务选择界面-->
    <el-dialog title="选择任务" :visible.sync="namespace.editFormVisible" v-model="namespace.editFormVisible"
      :close-on-click-modal="false">
      <el-table ref="singleTable" :data="namespace.tableData" highlight-current-row
        @current-change="handleTaskCurrentChange" style="width: 100%">
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column property="nameSpace" label="命名空间" width="200">
        </el-table-column>
        <el-table-column property="nameClass" label="类名" width="200">
        </el-table-column>
        <el-table-column property="remark" label="备注">
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="namespace.editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="selectTask" :loading="namespace.editLoading">提交</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { debounce } from '@/api/control/index.js'

export default {
  name: 'task_manager',
  components: {},
  data() {
    return {
      logining: false, //提交中
      loading: false, //加载中
      filters: { //筛选条件
        name: ""
      },
      tableData: [],
      tableLabel: [
        { label: '任务名称', param: 'jobName' },
        { label: '任务分组', param: 'jobGroup' },
        { label: '触发器类型', param: 'triggerType' },
        { label: 'Cron表达式', param: 'cron' },
        { label: '执行间隔(秒)', param: 'intervalSecond' },
        { label: '执行次数', param: 'runTimes' },
        {
          label: '最后执行时间', param: 'performTime', sortable: true, width: '160',
          formatter: row => {
            return this.$isNull(row.performTime) ? "" : this.$formatDate(new Date(row.performTime), true);
          }
        },
        {
          label: '运行状态', param: 'jobStatus', width: '80',
          render: (h, params) => {
            return h('el-tag', {
              props: {
                type: params.row.jobStatus == '未启动' ? 'primary':(params.row.jobStatus == '运行中' ? 'success':(params.row.jobStatus == '已停止' ? 'warning':'primary')),
                size: 'mini',
              },
              style: {
                cursor: 'pointer'
              },
              on: {
                click: e => {
                  e.stopPropagation();
                  this.jobStatus(params.row)
                }
              }
            }, params.row.jobStatus)
          },
        },
      ],
      tableOption: {
        label: '操作',
        width: '200',
        options: [
          { label: '编辑', type: 'primary', icon: 'el-icon-edit', methods: 'handleEdit' },
          { label: '日志', type: 'info', icon: 'el-icon-document', methods: 'handleHistory' },
          { label: '删除', type: 'danger', icon: 'el-icon-delete', methods: 'handleDelete' },
        ]
      },
      //数据自动刷新间隔，showRefresh是否显示 ,isRefresh是否自动刷新，timer刷新时间
      refresh: {
        showRefresh: true,
        isRefresh: true,
        timer: 120,
      },

      nowPage: 1, // 当前页数
      nowSize: 15, // 当前页条数

      sels: {}, //列表选中列

      formTitle: '',
      formVisible: false, //界面是否显示
      formRules: {
        jobName: [{ required: true, message: '任务名称必填', trigger: 'blur' }],
        jobGroup: [{ required: true, message: '任务分组必填', trigger: 'blur' }],
        cron: [{ required: true, message: 'Cron表达式必填', trigger: 'blur' }],
        intervalSecond: [{ required: true, message: '执行间隔时间必填', trigger: 'blur' }],
        triggerType: [{ required: true, message: '触发器类型必填', trigger: 'blur' }],
        className: [{ required: true, message: '执行类名必填', trigger: 'blur' }],
        assemblyName: [{ required: true, message: '程序集必填', trigger: 'blur' }],
      },

      logTitle: '触发器日志',
      logVisible: false,
      logData: '',

      //表单数据
      initForm: {
        id: 0,
        jobName: "",
        jobGroup: "",
        remark: "",
        startTime: "",
        endTime: "",
        triggerType: 'cron', //触发器类型
        cron: "",
        intervalSecond: "", //执行间隔时间
        jobStatus: 1, // 1未启动, 2运行中, 3已停止
        isStart: false, //是否激活
        enabled: "",
        className: "", //执行类名
        assemblyName: "", //程序集
        cycleRunTimes: 0, //循环次数
        jobParams: "", //执行参数

      },
      taskForm: {},

      namespace: {
        tableData: [],
        currentRow: null,
        editFormVisible: false,
        editLoading: false
      },
    }
  },
  methods: {
    refreshData() {
      this.loading = true;
      this.searchData();
    },
    searchData() {
      let _this = this;

      this.$ajax(this.$apiSet.getTasksQzInfo, {
        name: this.filters.name
      }).then(res => {
        _this.loading = false;
        if (!res.data.success) {
          _this.$errorMsg(res.data.message)
        } else {
          _this.tableData = res.data.response;
        }
      }).catch(err => { })
    },
    handleButton(val) {
      switch (val.methods) {
        case 'handleEdit':
          this.handleEdit(val.row);
          break;
        case 'handleDelete':
          this.handleDelete(val.row);
          break;
        case 'handleHistory':
          this.handleHistory(val.row);
          break;
        default:
          break;
      }
    },
    handleSelectionChange(val) {
      this.sels = val;
    },
    //删除
    handleDelete(row) {
      let _this = this
      this.$showMsgBox({
        msg: `<p>是否删除【${row.jobName}】任务?</p>`,
        type: 'warning',
        isHTML: true
      }).then(() => {
        _this.$ajax(this.$apiSet.deleteTask, {
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
    radioChane(value) {
      this.taskForm.jobStatus = value ? 2 : 1;
    },
    //显示编辑界面
    handleEdit(row) {
      this.formTitle = "编辑";
      this.formVisible = true;
      this.taskForm = JSON.parse(JSON.stringify(row));
    },
    //显示新增界面
    plusData() {
      this.formTitle = "新增";
      this.formVisible = true;
      this.taskForm = JSON.parse(JSON.stringify(this.initForm));
    },
    handleSubmit: debounce(function () {
      if (this.taskForm.triggerType == 'cron') this.taskForm.intervalSecond = '';
      if (this.taskForm.triggerType == 'simple') this.taskForm.cron = '';

      let apiUrl = this.formTitle == '编辑' ? this.$apiSet.putTasksQz : this.$apiSet.postTasksQz;
      let _this = this;

      this.logining = true;
      this.$ajax(apiUrl, this.taskForm)
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
    jobStatus(row) {
      let _this = this;
      let apiUrl = "", state = "";
      switch (row.jobStatus) {
        case '未启动': // 1 未启动 ==> 启动
          state = "启动";
          apiUrl = this.$apiSet.getStartJob;
          break;
        case '运行中': // 2 运行中 ==> 停止
          state = "停止";
          apiUrl = this.$apiSet.getStopJob;
          break;
        case '已停止': // 3 已停止 ==> 重启
          state = "重启";
          apiUrl = this.$apiSet.getReCovery;
          break;
      }
      this.$showMsgBox({
        msg: `<p>是否<span style='color:red;'>${state}</span>【${row.jobName}】任务?</p>`,
        type: 'warning',
        isHTML: true
      }).then(() => {
        _this.$ajax(apiUrl, {
          id: row.id,
        }).then(res => {
          if (!res.data.success) {
            _this.$errorMsg(res.data.message)
          } else {
            _this.searchData();
            _this.$successMsg(res.data.message)
          }
        }).catch(err => { })
      }).catch(err => { })
    },
    handleHistory(row) {
      this.logData = row.tasksLog;
      this.logTitle = row.jobName + "日志";
      this.logVisible = true;
    },

    getTaskNameSpace() {
      let _this = this;

      this.$ajax(this.$apiSet.getTaskNameSpace, {}).then(res => {
        if (!res.data.success) {
          _this.$errorMsg(res.data.message)
        } else {
          this.namespace.tableData = res.data.response;
        }
      }).catch(err => { })
    },
    handleTask() {
      this.namespace.editFormVisible = true;
      this.getTaskNameSpace();
    },
    handleTaskCurrentChange(val) {
      this.namespace.currentRow = val;
    },
    selectTask() {
      if (!this.namespace.currentRow) {
        this.$message.error("请选择要添加的任务");
        return;
      }
      this.taskForm.assemblyName = this.namespace.currentRow.nameSpace;
      this.taskForm.className = this.namespace.currentRow.nameClass;
      this.namespace.editFormVisible = false;
      this.namespace.currentRow = null;
    },
  },
  mounted() {
    let _this = this;
    this.refreshData();
  },
  beforeDestroy() {
  },
};
</script>

<style scoped>
.task_manager {
  height: 100%;
  width: 100%;
}
</style>
