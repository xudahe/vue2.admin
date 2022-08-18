import Vue from 'vue'
import router from "./index"
import store from "@/store"
import {
  saveRefreshtime
} from '@/api/axios/index';

//导入进度条插件 -- npm install --save nprogress
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

// 配置NProgress进度条选项 —— 动画效果
NProgress.configure({
  ease: 'ease',
  speed: 500
})

// 全局路由拦截-进入页面前执行
router.beforeEach((to, from, next) => {
  NProgress.start(); //显示进度条

  let arrStr = store.getters.regRouters;
  if (arrStr != "|" && arrStr.indexOf(to.path) == -1) {
    Vue.prototype.$message({
      message: `路由【${to.path}】没有注册，请核实！`,
      type: 'error'
    });
    return NProgress.done();
  }

  if (store.getters.freeLogin) {
    getAddRouters()
    next()
  } else {

    if (!validataToken()) {
      next()
    }

    if (store.getters.token) {
      if (to.path === "/login") {
        next()
      } else {
        if (store.getters.info == "") {
          getAddRouters()
          next({
            path: to.path
          })
        } else {
          next()
        }
      }
    } else {
      if (to.path === "/login") {
        next()
      } else {
        next({
          path: "/login"
        })
      }
    }
  }
})

// 全局后置钩子-常用于结束动画等
router.afterEach(() => {
  NProgress.done() //完成进度(进度条消失)
})

//验证Token
function validataToken() {
  var curTime = new Date()
  var refreshtime = new Date(Date.parse(window.localStorage.refreshtime))
  // 如果在用户操作的活跃期内，刷新Token过期时间
  if (window.localStorage.refreshtime && (curTime <= refreshtime)) {
    saveRefreshtime(); //刷新Token过期时间

    if (!store.state.token) {
      store.commit("saveToken", window.localStorage.Token)
    }
    if (!store.state.tokenExpire) {
      store.commit("saveTokenExpire", window.localStorage.TokenExpire)
    }

    return true
  } else {
    return false
  }
}

function getAddRouters() {
  // 省略 axios 请求代码 通过 token 向后台请求用户权限等信息
  let userInfo = JSON.parse(window.localStorage.userInfo ? window.localStorage.userInfo : null);

  store.dispatch("getInfo", {
    userinfo: userInfo,
    roleinfo: userInfo.roleInfoList,
    menuinfo: userInfo.menuInfoList,
    deptInfo: userInfo.deptInfoList,
  })

  store.dispatch("newRoutes", store.getters.info.roleinfo)
  router.addRoutes(store.getters.addRouters) //动态添加路由
}

// 路由跳转前都是会经过beforeEach，而beforeEach可以通过next来控制到底去哪个路由。根据这个特性我们就可以在beforeEach中设置一些条件来控制路由的重定向。
// to: Route: 即将要进入的目标路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参