<template>
  <div class="picture card_css">
    <el-card class="box-card" shadow="hover">
      <!--工具条-->
      <v-header icon="md-podium" text="Excel列表">
        <div slot="content"></div>
        <div style="text-align: right;">

          <export-import :set-export-data="setExportData" :get-import-data="getImportData">
            <template slot="export">
              <el-button type="primary" plain>导出</el-button>
            </template>
            <template slot="import">
              <el-button type="primary" plain>导入</el-button>
            </template>
          </export-import>

        </div>
      </v-header>

      <!--列表-->
      <e-table :table-data="tableData" :table-label="tableLabel" :now-page="nowPage" :now-size="nowSize"></e-table>
    </el-card>
  </div>
</template>

<script>
import exportImport from '../../components/file/index1'

export default {
  name: 'file_manager',
  components: { exportImport },
  data() {
    return {
      tableData: [],
      tableLabel: [],

      nowPage: 1, // 当前页数
      nowSize: 15, // 当前页条数


    }
  },
  methods: {
    setExportData() {
      let exportData = {
        excelTitle: { //标题
          code: '编号',
          name: '名称'
        },
        excelData: [ //数据
          {
            code: 'DH678',
            name: '测试1'
          },
          {
            code: 'DH679',
            name: '测试2'
          }
        ],
        excelName: '导出' //文件名称
      }

      return exportData;
    },
    getImportData(excelData) {
      this.tableLabel = [];
      this.tableData = excelData;

      for (let k in excelData[0]) {
        this.tableLabel.push({
          label: k,
          param: k,
        });
      }
    }
  },

};
</script>

<style scoped>
.picture {
  height: 100%;
  width: 100%;
}
</style>
