import Vue from 'vue'

// Markdown （mavonEditor）编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

// 引入前端错误日志
import './other/error_log'
// 引入区域loading效果
import loading from './other/loading'
Vue.use(loading)
// 引入icon组件
import '@/icons'
// 引入UI框架
import './UI/elementUI'
import './UI/iviewUI'
// 引入全局样式
import '@/global/css/elementUI.less'
import '@/global/css/IviewUI.less'
// 引入全局自定义样式
import '@/global/css/index.css'
import '@/global/css/animation.css'
import '@/global/css/button.css'
// 引入css样式初始化
import 'normalize.css/normalize.css'
// 引入第三方图标库：https://www.thinkcmf.com/font/search.html，例如：<i class="fa fa-minus"></i>
import "font-awesome/css/font-awesome.css" //
// 引入上传插件
import uploader from 'vue-simple-uploader'
Vue.use(uploader)
// 引入全局提示模块
import Message from '@/api/message'
// 引入二次封装的axios模块d
import axios from '@/api/axios/index'
import apiSet from "@/api/axios/apiSetting" //请求接口
// 结合 promise 封装原生ajax
import http from '@/api/axios/http'
Vue.use(http)
// 引入websocket模块
import Socket from '@/api/websocket'
// 引入时间格式化函数
import Date from '@/api/date'
// 引入获取URL参数函数
import UrlQuery from '@/api/other/url_query'
// 引入设置样式函数
import SetStyle from '@/api/dom/set_style'
// 引入页面样式函数
import SetPage from '@/api/dom/page_class'
// 引入设置元素类模块
import SetClass from '@/api/dom/set_class'
// 引入插入元素模块
import InsertAfter from '@/api/dom/insert_after'
// 引入文本复制模块
import Copy from '@/api/dom/copy'
// 引入全屏函数
import FullScreen from '@/api/other/full_screen'
// 引入文件下载模块
import Download from '@/api/file/download'
// 引入图片读取模块
import ReadImg from '@/api/file/get_file_image'
// 引入文件读取模块
import ReadFile from '@/api/file/get_file'
// 引入txt内容读取模块
import getTxt from '@/api/file/get_txt'
// 引入文件预览模块
import PreviewFile from '@/api/file/preview_file'
// 引入图片加载动画模块
import ImageLoad from '@/api/other/image_load'
// 引入数组模块
import ArrayMethod from '@/api/array'
// 引入导出excel模块
import exportExcel from '@/api/file/export_excel'
// 引入导出图片模块
import exportFile from '@/api/file/export_file'
// 引入全局配置模块
import defaultConfig from '@/global/js/config'

import {
  isNull,
  isNum
} from '@/utils/validate'

/**
 * @description 添加axios实例
 * 数据请求
 */
Vue.prototype.$ajax = axios
Vue.prototype.$apiSet = apiSet;

/**
 * @description 创建websocket实例
 * @param {Object} option 
 * @returns {WebSocket}
 */
Vue.prototype.$createSokect = Socket

/**
 * @description 引入全局提示
 * @param {String} msg 提示内容
 */
Vue.prototype.$successMsg = Message.successMsg
Vue.prototype.$warnMsg = Message.warnMsg
Vue.prototype.$errorMsg = Message.errorMsg

/**
 * @description 引入全局通知
 * @param {String} msg 通知内容
 * @param {String} title 标题
 */
Vue.prototype.$successTip = Message.successTip
Vue.prototype.$warnTip = Message.warnTip
Vue.prototype.$errorTip = Message.errorTip

/**
 * @description 引入全局弹框
 * @param {String} title 标题
 * @param {String} msg 内容
 * @param {Boolean} isHTML 内容是否为html
 */
Vue.prototype.$showMsgBox = Message.showMsgBox

/**
 * @description 引入全局弹框
 * @param {String} title 标题
 * @param {String} msg 内容
 * @param {Boolean} isHTML 内容是否为html
 */
Vue.prototype.$showTipDiy = Message.showTipDiy

/**
 * @description 引入时间格式化函数
 * @param {String | Date} date 日期格式化
 */
Vue.prototype.$formatDate = Date.formatDate

/**
 * @description 根据时间转换为文件名称
 */
Vue.prototype.$namDate = Date.namDate

/**
 * @description 获取url后的参数
 * @returns {Object}
 */
Vue.prototype.$urlQuery = UrlQuery

/**
 * @description 日期差(date_2 - date_1)
 * @param {String | Date} date_1
 * @param {String | Date} date_2
 * @returns {Number} 返回日期差
 */
Vue.prototype.$dateDiff = Date.dateDiff

/**
 * @description 获取指定日期
 */
Vue.prototype.$setDay = Date.setDay
Vue.prototype.$setMonth = Date.setMonth
Vue.prototype.$setYear = Date.setYear
Vue.prototype.$setDate = Date.setDate
Vue.prototype.$fromNow = Date.fromNow

/**
 * @description 给元素设置样式
 * @param {DOM Object} ele DOM元素
 * @param {String} ruleName CSS属性
 * @param {String} value CSS值
 */
Vue.prototype.$setStyle = SetStyle.setStyle

/**
 * @description 给元素设置内联样式（温馨提示：会覆盖原有样式）
 * @param {DOM Object} ele DOM元素
 * @param {String} rule CSS写法
 */
Vue.prototype.$setCssText = SetStyle.setCssText

/**
 * @description 设置全局样式
 * @param {String} css css代码
 * @param {String} className 类名
 */
Vue.prototype.$createStyle = SetStyle.createStyle

/**
 * @description 设置全屏函数与取消全屏函数
 * @param {DOM Object} element DOM元素
 */
Vue.prototype.$setFullScreen = FullScreen.requestFullScreen
Vue.prototype.$cancelFullScreen = FullScreen.cancelFullScreen

/**
 * @description 添加与删除类
 * @param {DOM Object} element DOM元素
 * @param {String} className DOM元素
 */
Vue.prototype.$addClass = SetClass.addClass
Vue.prototype.$removeClass = SetClass.removeClass

/**
 * @description 获取类名
 * @param {DOM Object} element DOM元素
 */
Vue.prototype.$getClassName = SetClass.getClassName

/**
 * @description 获取图片文件地址与文件信息
 * @param {Number} limit 限制图片大小/MB
 * @returns {Promise}
 */
Vue.prototype.$getImgFile = ReadImg.getImgFile

/**
 * @description 获取文件地址与文件信息
 * @param {Number} limit 限制文件大小/MB
 * @returns {Promise}
 */
Vue.prototype.$getFile = ReadFile

/**
 * @description 获取txt内容
 * @returns {Promise}
 */
Vue.prototype.$getTxt = getTxt

/**
 * @description 获取图片文件地址与文件信息
 * @param {String} url 文件地址
 */
Vue.prototype.$previewFile = PreviewFile

/**
 * @description 下载文件
 * @param {String} url 下载路径
 * @param {String} fileName 文件名称
 * @param {Boolean} isBlob 是否为二进制文件
 */
Vue.prototype.$download = Download

/**
 * @description 文本复制
 * @param {DOM | String} obj 要复制的内容或DOM文本节点
 * @returns {Promise}
 */
Vue.prototype.$copyText = Copy

/**
 * @description 插入元素
 * @param {DOM Object} newEle 新元素
 * @param {DOM Object} nowEle 旧元素
 */
Vue.prototype.$insertAfter = InsertAfter

/**
 * @description 图片加载动画模块
 * @param {String} url
 */
Vue.prototype.$imageLoad = ImageLoad

/**
 * @description 排序（只排字段值为数字和日期）
 * @param {Array} list 需要排序的数组
 * @param {Boolean} isDes 是否倒序
 * @param {String} property 如果排序元素为对象，可指定需要排序的字段
 * @returns {Array} 返回新的数组
 */
Vue.prototype.$sortList = ArrayMethod.sortList

/**
 * @description 排序
 * @param {Array} list 需要排序的数组
 * @param {Boolean} isDes 是否倒序
 * @param {String} property 如果排序元素为对象，可指定需要排序的字段
 * @returns {Array} 返回新的数组
 */
Vue.prototype.$searchResult = ArrayMethod.searchResult

/**
 * @description 去重
 * @param {Array} arr 需要去重的数组
 * @param {String} key 数组元素为对象，可传入key值进行排序（对象键值为一层）
 * @returns {Array} 返回新的数组
 */
Vue.prototype.$removeRepeat = ArrayMethod.removeRepeat

/**
 * @description 导出excel
 * @param {DOM} obj 
 * @param {String} name 
 */
Vue.prototype.$exportExcel = exportExcel

/**
 * @description 导出图片
 * @param {Array} fileList 文件地址数组
 * @param {fileName} fileName 压缩文件名称
 */
Vue.prototype.$exportFile = exportFile

/**
 * @description 全局通用配置
 */
Vue.prototype.$defaultConfig = defaultConfig

/**
 * @description 检验
 */
Vue.prototype.$isNull = isNull //非空验证
Vue.prototype.$isNum = isNum //数字验证

/**
 * @description 全局element-resize-detector监听DOM元素宽度变化
 * 
 *  let that = this;
    this.$erd.listenTo(document.getElementById("bar"), function (element) {
        that.$nextTick(function () {
            //使echarts尺寸重置
            that.myEcharts.resize();
        })
    })
 */
import ElementResizeDetectorMaker from "element-resize-detector"
Vue.prototype.$erd = ElementResizeDetectorMaker()

// 阻止显示生产模式的消息
Vue.config.productionTip = false


Vue.prototype.$isNotEmpty = function(obj){
  return (obj !== undefined && obj !== null && obj !== '' && obj !== 'null')
}

Vue.prototype.$deepCopy = function (obj){return JSON.parse(JSON.stringify(obj))}