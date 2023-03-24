import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from "./store"

Vue.use(Vuex)

//全局事件总线 eventBus
// Vue.prototype.$eventBus = new Vue();

//api模块初始化。引用第三方插件
import '@/initial/modules'

//全局过滤器初始化。在如下路径文件下全局注册过滤器即可。
import filters from '@/initial/filter/index'
// 全局注册过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

//全局指令初始化。在如下路径文件下全局注册指令即可。
import directives from '@/initial/directives/index'
// 全局注册指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, {
    // 只调用一次，指令第一次绑定到元素时调用
    bind: directives[key].bind || (() => {}),
    // 被绑定元素插入父节点时调用
    inserted: directives[key].inserted || (() => {}),
    // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
    update: directives[key].update || (() => {}),
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
    componentUpdated: directives[key].componentUpdated || (() => {}),
    // 只调用一次，指令与元素解绑时调用
    unbind: directives[key].unbind || (() => {})
  })
})

//全局组件初始化。最终读取src/components下的所有index.vue文件进行组件注册。
//注意：自动注册组件依赖组件名称，因此，请在封装组件时给组件加上name字段。
const req = require.context('@/components', true, /index\.vue$/)
//全局注册组件
req.keys().forEach(val => {
  const component = req(val).default
  Vue.component(component.name, component)
})

import './router/intercept.js' //路由拦截

//图片点击放大预览
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)
Viewer.setDefaults({
  Options: {
    'inline': true, // 是否启用inline模式
    'button': true, // 是否显示右上角关闭按钮
    'navbar': true, // 是否显示缩略图底部导航栏
    'title': true, // 是否显示当前图片标题，默认显示alt属性内容和尺寸
    'toolbar': true, // 是否显示工具栏
    'tooltip': true, // 放大或缩小图片时，是否显示缩放百分比，默认true
    'fullscreen': true, // 播放时是否全屏，默认true
    'loading': true, // 加载图片时是否显示loading图标，默认true
    'loop': true, // 是否可以循环查看图片，默认true
    'movable': true, // 是否可以拖得图片，默认true
    'zoomable': true, // 是否可以缩放图片，默认true
    'rotatable': true, // 是否可以旋转图片，默认true
    'scalable': true, // 是否可以翻转图片，默认true
    'toggleOnDblclick': true, // 放大或缩小图片时，是否可以双击还原，默认true
    'transition': true, // 使用 CSS3 过度，默认true
    'keyboard': true, // 是否支持键盘，默认true
    'zoomRatio': 0.1, // 鼠标滚动时的缩放比例，默认0.1
    'minZoomRatio': 0.01, // 最小缩放比例，默认0.01
    'maxZoomRatio': 100, // 最大缩放比例，默认100
    'url': 'data-source' // 设置大图片的 url
  }
})


import FormControls from './views/workflow/formControls/index.js'
Vue.use(FormControls)

// 设置浏览器标题
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

Vue.prototype.$store = store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')