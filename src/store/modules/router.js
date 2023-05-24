import {
  defaultRouter,
  addRouter
} from "@/router/index"
import Router from "@/router/index"

const routerData = {
  state: {
    defaultRouter: [], //默认路由
    addRouters: [], //动态添加的路由
    routers: [], //合并后的总路由

    regRouters: "|", //已注册的路由名称
  },
  mutations: {
    setRouters: (state, routers) => {
      state.addRouters = routers;
      state.defaultRouter = defaultRouter;
      state.routers = state.defaultRouter.concat(state.addRouters);
      eachSelect(state.routers);
      console.log("路由信息：",state)

      //vue-router使用addRoute动态添加layout主界面的子路由
      for (const key in state.addRouters) {
        Router.addRoute('layout', state.addRouters[key]);
      }

      function eachSelect(routers) {
        for (let j = 0; j < routers.length; j++) {
          state.regRouters += routers[j].path + "|";

          if (routers[j].children && routers[j].children.length) {
            eachSelect(routers[j].children);
          }
        }
      }
    }
  },
  actions: {
    newRoutes({
      commit
    }, role) {
      //  通过递归路由表，删除掉没有权限的路由
      function eachSelect(routers, userRole) {
        for (let j = 0; j < routers.length; j++) {
          routers[j].meta = {
            title: dataList[routers[j].name] || routers[j].name
          };

          if (routers[j].meta && routers[j].meta.role && routers[j].meta.role.length && routers[j].meta.role.indexOf(userRole) === -1) {
            routers.splice(j, 1)
            j = j !== 0 ? j - 1 : j;
          }
          if (routers[j].children && routers[j].children.length) {
            eachSelect(routers[j].children, userRole);
          }
        }
      }

      eachSelect(addRouter, role);
      commit('setRouters', addRouter);
    }
  }
}

//可以通过后端返回数据
var dataList = {
  "user_manager": "用户管理",
  "dept_manager": "部门管理",
  "role_manager": "角色管理",
  "menu_manager": "菜单管理",
  "picture_manager": "图片管理",
  "task_manager": "定时任务",
  "card": "卡片",
  "print": "打印",

}

export default routerData