<template>
  <section>
    <el-table ref="table" v-loading="loading" element-loading-text="" :data="dataList" :height="tableHeight" border fit highlight-current-row tooltip-effect="dark" style="width:100%;margin-top: 3px;" :header-cell-style="{background:'#f2f2f2',color:'#606266'}" @row-click="handleRowClick" @sort-change="handleSortChange" @selection-change="handleSelectionChange">
      <template v-for="(item,index) in tableLabel">
        <el-table-column v-if="item.type" :type="item.type" :key="index"></el-table-column>
        <el-table-column v-else :width="item.width ? item.width : ''" :key="index + 1" :align="item.align ? item.align : 'center'" :label="item.label" :prop="item.param" :sortable="item.sortable ? true : false">
          <template slot-scope="scope">

            <template v-if="item.render">
              <ex-slot :render="item.render" :row="scope.row" :index="scope.$index" :column="item"></ex-slot>
            </template>
            <template v-else-if="item.param == 'image'">
              <img v-for="item in scope.row[item.param]" :src="item" style="width: 30px;margin-right:5px;	cursor:pointer;" v-viewer/>
            </template>
            <template v-else-if="item.formatter">
              <span v-html="item.formatter(scope.row)"></span>
            </template>
            <template v-else>
              <span>{{scope.row[item.param]}}</span>
            </template>

          </template>
        </el-table-column>
      </template>
      <el-table-column v-if="tableOption.label" :width="tableOption.width" :label="tableOption.label" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <template v-for="(item,index) in tableOption.options">
            <!-- <el-button  v-if="item.label" :key="index" :type="item.type" :icon="item.icon" @click.native="handleButton(item.methods,scope.row,index)" size="mini">
              {{item.label}}
            </el-button> -->
            <el-button  :key="index" :type="item.type" :icon="item.icon" @click.native="handleButton(item.methods,scope.row,index)" size="mini">
            </el-button>
            <!-- <el-popconfirm v-if="item.type=='danger'" :key="index" confirm-button-text='??????' cancel-button-text='??????' icon="el-icon-info" icon-color="red" title="??????????????????????????????" cancelButtonType="ghost" @confirm="handleButton(item.methods,scope.row,index)" @cancel="()=>{}">
              <el-button slot="reference" :type="item.type" :icon="item.icon" style="margin-right:5px;" size="mini"></el-button>
            </el-popconfirm> -->
          </template>
        </template>
      </el-table-column>
    </el-table>
    <el-row >
      <el-col :span="4" v-if="showRefresh">
        <div style="margin-top: 10px;">
          <el-checkbox v-model="refresh.isRefresh">????????????</el-checkbox>
          <span style="color: green;">{{second}}s</span>
        </div>
      </el-col>
      <el-col :span="showRefresh ? 20:24">
        <pagination ref="pagination" :now-page.sync="nowPage" :now-size.sync="nowSize" :total="tableData.length" @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange" />
      </el-col>
    </el-row>
  </section>
</template>

<script>

/**
 * @description ????????????elementUI table???????????????????????????
 * @description ??????????????? <e-table :table-data="tableData" :table-label="tableLabel" :table-option="tableOption" ></e-table>
 */

// ????????????????????????
var exSlot = {
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, data) => {
    const params = {
      row: data.props.row,
      index: data.props.index
    }
    if (data.props.column) params.column = data.props.column
    return data.props.render(h, params)
  }
}

import pagination from "../pagination/index"
export default {
  name: "e-table",
  components: {
    exSlot,
    pagination
  },
  props: {
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    tableLabel: {
      type: Array,
      default: () => {
        return []
      }
    },
    tableOption: {
      type: Object,
      default: () => {
        return {}
      }
    },
    loading: { //?????????
      type: Boolean,
      default: false
    },
    refresh: { //showRefresh???????????? isRefresh???????????????timer????????????
      type: Object,
      default: () => {
        return { showRefresh: false, isRefresh: false, timer: 120, }
      }
    },

    nowPage: { // ????????????
      type: Number,
      default: 1
    },
    nowSize: { // ???????????????
      type: Number,
      default: 10
    },
  },
  data() {
    return {
      currentPage: this.nowPage,
      pageSize: this.nowSize,
      tableHeight: 310,

      second: 0, //???????????????
    }
  },
  computed: {
    dataList() {
      return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
    },
  },
  mounted() {
    this.second = this.refresh.timer;

    let timer = setInterval(() => {
      if (!this.refresh.isRefresh) return;
      if (this.second == 0) {
        this.$emit('searchData');  //???????????????'searchData'????????????????????????????????????
        this.second = this.refresh.timer;
      } else {
        this.second--;
      }
    }, 1000);

    this.$once("hook:beforeDestroy", () => {
      this.second = this.refresh.timer;
      clearInterval(timer);
    });
  },
  methods: {
    handleButton(methods, row, index) {  //??????????????????
      this.$emit('handleButton', { 'methods': methods, 'row': row, 'index': index })
    },
    handleSortChange(val) {  //???????????????????????????????????????????????????????????????
      this.$emit('handleSortChange', val)
    },
    handleRowClick(val) {  //??????????????????????????????????????????
      this.$emit('handleRowClick', val)
    },
    handleSelectionChange(val) { //?????????????????????????????????????????????
      this.$emit('handleSelectionChange', val)
    },

    initialPage(currentPage, pageSize) { //???????????????
      this.currentPage = currentPage;
      this.pageSize = pageSize;
    },
    handleSizeChange(val) {
      this.initialPage(val.currentPage, val.pageSize);
    },
    handleCurrentChange(val) {
      this.initialPage(val.currentPage, val.pageSize);
    },
    initialTable() {
      let docm1 = document.getElementsByClassName("el-card")
      this.tableHeight = docm1 != undefined ? docm1[docm1.length - 1].offsetHeight - 90 : _this.tableHeight;
    },
  },
  created() {
    let _this = this;

    setTimeout(() => {
      _this.initialTable();
    }, 100);

    window.addEventListener("resize", this.initialTable);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.initialTable);
  },
}
</script>