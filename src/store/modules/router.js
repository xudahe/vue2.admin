import { defaultRouter, addRouter } from "@/router/index";
import Router from "@/router/index";
import store from "@/store";

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
      console.log("路由信息：", state);

      //vue-router使用addRoute动态添加layout主界面的子路由
      for (const key in state.addRouters) {
        Router.addRoute("layout", state.addRouters[key]);
      }

      function eachSelect(routers) {
        for (let j = 0; j < routers.length; j++) {
          state.regRouters += routers[j].path + "|";

          if (routers[j].children && routers[j].children.length) {
            eachSelect(routers[j].children);
          }
        }
      }
    },
  },
  actions: {
    newRoutes({ commit }, role) {
      let menus = store.getters.loginInfo.menuinfo, title = '';
      let navTitle = function (path, routerARR) {
        for (let i = 0; i < routerARR.length; i++) {
          if (routerARR[i].className === ('/' + path)) {
            title = routerARR[i].menuName;
            break;
          } else {
            if (routerARR[i].children && routerARR[i].children.length > 0) {
              navTitle(path, routerARR[i].children);
            }
          }
        }

        return title || path;
      };


      //  通过递归路由表，删除掉没有权限的路由
      function eachSelect(routers, userRole) {
        for (let j = 0; j < routers.length; j++) {

          routers[j].meta = {
            title: navTitle(routers[j].name, menus) || routers[j].name
          };

          if (
            routers[j].meta &&
            routers[j].meta.role &&
            routers[j].meta.role.length &&
            routers[j].meta.role.indexOf(userRole) === -1
          ) {
            routers.splice(j, 1);
            j = j !== 0 ? j - 1 : j;
          }
          if (routers[j].children && routers[j].children.length) {
            eachSelect(routers[j].children, userRole);
          }
        }
      }

      eachSelect(addRouter, role);
      commit("setRouters", addRouter);
    },
  },
};

export default routerData;
