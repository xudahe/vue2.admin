<!-- Excel导入导出组件（纯前端） -->
<template>
  <span>
    <input ref="upload" type="file" @change="importFile(this)" id="imFile" value multiple hidden accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
    <a id="downlink"></a>
    <span @click="downloadFile">
      <slot name="export">
        <el-button class="button">导出excel</el-button>
      </slot>
    </span>
    <span @click="uploadFile">
      <slot name="import">
        <el-button class="button">上传 Excel 文件页面表格预览</el-button>
      </slot>
    </span>
    <!-- 错误信息提示 -->
    <el-dialog title="提示" v-model="errorDialog" size="tiny">
      <span>{{ errorMsg }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="errorDialog=false">确认</el-button>
      </span>
    </el-dialog>
  </span>
</template>

<script>
// FileReader共有4种读取方法：
// 1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
// 2.readAsBinaryString(file)：将文件读取为二进制字符串
// 3.readAsDataURL(file)：将文件读取为Data URL
// 4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'

import axios from 'axios'
var XLSX = require('xlsx')

export default {
  name: 'ProgExportImport',
  data() {
    return {
      fullscreenLoading: false, // 加载中
      imFile: '', // 导入文件el对象
      outFile: '', // 导出文件el对象
      errorDialog: false, // 错误信息弹窗
      errorMsg: '', // 错误信息内容
      excelTitle: {}, // excel标题
      excelData: [] // excel处理数据
    }
  },
  props: {
    setExportData: {
      type: Function,
      default: function () {
        console.warn('未传递获取excel导出数据方法')
      }
    },
    getImportData: {
      type: Function,
      default: function () {
        console.warn('未传递设置excel导入数据方法')
      }
    }
  },
  mounted() {
    this.imFile = document.getElementById('imFile')
    this.outFile = document.getElementById('downlink')
  },
  methods: {
    uploadFile: function () { // 导入文件点击事件
      this.imFile.click()
    },
    downloadFile: function () { // 导出文件点击事件
      let exportData = this.setExportData()
      this.excelTitle = exportData.excelTitle
      this.excelData = exportData.excelData
      let data = [{}, {}]
      for (let k in this.excelData[0]) { // 设置第1行为数据库字段行
        if (this.excelData[0].hasOwnProperty(k)) {
          data[0][k] = k
          data[1][k] = this.excelTitle[k] // 中文标题
        }
      }
      data = data.concat(this.excelData)
      this.downloadExl(data, exportData.excelName || '导出文件')
    },
    exportData() { //导出data数据
      // let tableData = [
      //   ['任务号','项目名称','任务类型','提交人', '提交时间', '面积(平方千米)', '任务状态']
      // ] // 表格表头
      // this.PageList.forEach(item => {
      //   let rowData = []
      //   rowData = [
      //     item.TASKNO,
      //     item.PRJNAME,
      //     item.FUNCTIONNAME,
      //     item.USERID,
      //     item.SUBMITTIME,
      //     (item.AREA / 1000000).toFixed(3),
      //     item.TASKSTATUS,
      //   ]
      //   tableData.push(rowData)
      // })
      // let ws = XLSX.utils.aoa_to_sheet(tableData)
      // let wb = XLSX.utils.book_new()
      // XLSX.utils.book_append_sheet(wb, ws, '任务中心') // 工作簿名称
      // XLSX.writeFile(wb, '数据.xlsx') // 保存的文件名
    },
    importFile: function () { // 导入excel
      let _this = this;

      //-------------------------------------附件上传到服务端------------------------------------------
      // let formData = new FormData();
      // for (let i = 0; i < e.target.files.length; i++) {
      //   formData.append("file", e.target.files[i]);
      // }
      // if (e.target.files.length > 0) {
      //   this.$Loading.start();
      // } else {
      //   return;
      // }
      // formData.append("name", "PKWT"); //文件夹名称（最好写死）
      // let url = mapconfig.webservices + "Paikou/Upload_File";
      // let config = {
      //   headers: { "Content-Type": "multipart/form-data" }
      // };

      // axios.post(url, formData, config).then(function (response) {
      //   _this.$Loading.finish();
      //   _this.handleFormatTrue(response.data);
      // });

      //-------------------------------------解析导入的excel数据------------------------------------------
      this.fullscreenLoading = true
      let obj = this.imFile
      if (!obj.files) {
        this.fullscreenLoading = false
        return
      }
      var f = obj.files[0]
      var reader = new FileReader()
      let $t = this
      reader.onload = function (e) {
        var data = e.target.result
        if ($t.rABS) {
          $t.wb = XLSX.read(btoa(this.fixdata(data)), { // 手动转化
            type: 'base64'
          })
        } else {
          $t.wb = XLSX.read(data, {
            type: 'binary'
          })
        }

        const sheets2JSONOpts = {
          //header: 1, //为1表示excel的第一行不为标题，直接内容解析为json
          defval: '', //给defval赋值为空的字符串
        }

        //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
        //wb.Sheets[Sheet名]获取第一个Sheet的数据
        let json = XLSX.utils.sheet_to_json($t.wb.Sheets[$t.wb.SheetNames[0]], sheets2JSONOpts)
        $t.dealFile(json) // $t.analyzeData(json): 解析导入数据
      }
      if (this.rABS) {
        reader.readAsArrayBuffer(f)
      } else {
        reader.readAsBinaryString(f)
      }
    },
    downloadExl: function (json, downName, type) { // 导出到excel
      
      let keyMap = [] // 获取键
      for (let k in json[0]) {
        if (json[0].hasOwnProperty(k)) {
          keyMap.push(k)
        }
      }
      let tmpdata = [] // 用来保存转换好的json
      json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
        v: v[k] || '',
        position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
      }))).reduce((prev, next) => prev.concat(next)).forEach(function (v) {
        tmpdata[v.position] = {
          v: v.v
        }
      })

      let outputPos = Object.keys(tmpdata) // 设置区域,比如表格从A1到D10
      let tmpWB = {
        SheetNames: ['sheet'], // 保存的表标题
        Sheets: {
          'sheet': Object.assign({},
            tmpdata, // 内容
            {
              '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] // 设置填充区域
            })
        }
      }
      let tmpDown = new Blob([this.s2ab(XLSX.write(tmpWB,
        { bookType: (type || 'xlsx'), bookSST: false, type: 'binary' } // 这里的数据是用来定义导出的格式类型
      ))], {
        type: ''
      }) // 创建二进制对象写入转换好的字节流
      var href = URL.createObjectURL(tmpDown) // 创建对象超链接
      this.outFile.download = downName + this.$namDate(new Date()) + '.xlsx' // 下载名称
      this.outFile.href = href // 绑定a标签
      this.outFile.click() // 模拟点击实现下载
      setTimeout(function () { // 延时释放
        URL.revokeObjectURL(tmpDown) // 用URL.revokeObjectURL()来释放这个object URL
      }, 100)
    },
    analyzeData: function (data) { // 此处可以解析导入数据
      data.splice(0, 1) // 去除第一行（中文标题行）
      return data
    },
    dealFile: function (data) { // 处理导入的数据
      this.imFile.value = ''
      this.fullscreenLoading = false

      if (data.length <= 0) {
        this.errorDialog = true
        this.errorMsg = '所选表格数据为空,请重新选择'
      } else {
        console.log(data)
        this.excelData = data
        this.getImportData(data)
      }
    },
    s2ab: function (s) { // 字符串转字符流
      var buf = new ArrayBuffer(s.length)
      var view = new Uint8Array(buf)
      for (var i = 0; i !== s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xFF
      }
      return buf
    },
    getCharCol: function (n) { // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
      let s = ''
      let m = 0
      while (n > 0) {
        m = n % 26 + 1
        s = String.fromCharCode(m + 64) + s
        n = (n - m) / 26
      }
      return s
    },
    fixdata: function (data) { // 文件流转BinaryString
      var o = ''
      var l = 0
      var w = 10240
      for (; l < data.byteLength / w; ++l) {
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
      }
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
      return o
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>