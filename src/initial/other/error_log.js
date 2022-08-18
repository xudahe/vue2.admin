import Vue from 'vue'
import store from "@/store"
import moment from 'moment' //时间格式化第三方插件

//err指代error对象，info是一个Vue特有的字符串，vm指代Vue应用本身，trace代表了组件树

Vue.config.errorHandler = function (err, vm, info) {
  store.commit("SET_ERROR_LOG", {
    err,
    info,
    url: window.location.href,
    time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss') // 错误发生的时间
  })
}

//warnHandler用来捕获Vue warning。记住在生产环境是不起作用的。
Vue.config.warnHandler = function (msg, vm, trace) {

}
