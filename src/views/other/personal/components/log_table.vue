<template>
  <div class="log_table">
    <el-Divider>
      <span>操作日志</span>
    </el-Divider>

    <el-table :data="tableData" border fit highlight-current-row tooltip-effect="dark" style="width:100%;"
      :header-cell-style="{ background: '#f2f2f2', color: '#606266' }" :height="tableHeight">
      <el-table-column prop="user" label="操作人" align="center" width="100">
      </el-table-column>
      <el-table-column prop="url" label="请求地址" align="center">
      </el-table-column>
      <el-table-column prop="clientIP" label="客户端IP" align="center">
      </el-table-column>
      <el-table-column prop="beginTime" label="请求时间" align="center">
      </el-table-column>
    </el-table>

    <!-- <e-table :table-data="tableData" :table-label="tableLabel" :now-page="nowPage" :now-size="nowSize"></e-table> -->
  </div>
</template>

<script>
import apiSetting from "@/api/apiSetting.js"

export default {
  data() {
    return {
      tableHeight: 310,

      tableData: [],
      tableLabel: [
        { label: '操作人', param: 'user', width: "100" },
        { label: '请求地址', param: 'url' },
        { label: '客户端IP', param: 'clientIP' },
        // { label: 'IP来源', param: 'address' },
        // { label: '请求耗时', param: 'opTime' },
        {
          label: '请求时间', param: 'beginTime',
          formatter: row => {
            return this.$formatDate(new Date(row.beginTime), true);
          }
        },
      ],
    };
  },
  methods: {
    getAccessLogs() {
      let _this = this;
      this.$ajax(apiSetting.getAccessLogs)
        .then(res => {
          if (!res.data.success) {
            _this.$errorMsg(res.data.message)
          } else {
            _this.tableData = res.data.response;
          }
        })
        .catch(err => { })
    },
    initialTable() {
      let docm1 = document.getElementsByClassName("log_table")
      this.tableHeight = docm1 != undefined ? docm1[0].offsetHeight - 33 : this.tableHeight;
    },
  },
  mounted() {
    this.getAccessLogs();


    setTimeout(() => {
      this.initialTable();
    }, 200);
    window.addEventListener("resize", this.initialTable);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.initialTable);
  }
};
</script>

<style>
.log_table {
  height: calc(100% - 20px);
  width: 100%;
}
</style>
