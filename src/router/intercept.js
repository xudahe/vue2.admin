import Vue from 'vue'
import router from "./index"
import store from "@/store"
import {
  isNull
} from '@/utils/validate'
import {
  setStore,
  getStore,
} from '@/utils/storage'

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
    NProgress.done();

    Vue.prototype.$message({
      message: `路由【${to.path}】没有注册，请核实！`,
      type: 'error'
    });

    next({
      path: "/home"
    });
    return;
  }

  if (!isNull(store.getters.accessToken)) {
    if (to.path === "/login") {
      next()
    } else {
      if (isNull(store.getters.loginInfo)) {
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
})

// 全局后置钩子-常用于结束动画等
router.afterEach(() => {
  NProgress.done() //完成进度(进度条消失)
})

// 注册系统菜单
function getAddRouters() {
  // 省略 axios 请求代码 通过 token 向后台请求用户权限等信息
  let loginInfo = getStore({
    name: 'loginInfo'
  });
  store.dispatch("SET_LOGIN_INFO", {
    userinfo: !isNull(loginInfo.userinfo) ? loginInfo.userinfo : loginInfo,
    roleinfo: !isNull(loginInfo.roleinfo) ? loginInfo.roleinfo : loginInfo.roleInfoList,
    menuinfo: !isNull(loginInfo.menuinfo) ? loginInfo.menuinfo : loginInfo.menuInfoList,
    deptInfo: !isNull(loginInfo.deptInfo) ? loginInfo.deptInfo : loginInfo.deptInfoList,
  })
  console.log("登录信息：", store.getters.loginInfo)

  store.dispatch("newRoutes", store.getters.loginInfo.roleinfo)
}

// 路由跳转前都是会经过beforeEach，而beforeEach可以通过next来控制到底去哪个路由。根据这个特性我们就可以在beforeEach中设置一些条件来控制路由的重定向。
// to: Route: 即将要进入的目标路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参