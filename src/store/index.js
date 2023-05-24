import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import layout from './modules/layout';
import router from './modules/router';
import login from './modules/login';
import error from './modules/error';
import workflow from './modules/workflow';

const store = new Vuex.Store({
  state: {
    //缓存组件，该值是组件中定义的name值，include 名称匹配的组件会被缓存，exclude 名称匹配的组件不被缓存。
    cachedViews: ["t-gdmap", "t-echartMap", "paper"],

    drag_com: "",
    drag_ref: "",
    weather: JSON.parse(localStorage.getItem("weather")) || [{
      "province": "江苏",
      "city": "南京市",
      "adcode": "320100",
      "weather": "多云",
      "temperature": 27,
      "windDirection": "西",
      "windPower": "≤3",
      "humidity": "74",
      "reportTime": "2023-05-04 15:35:28",
      "info": "OK",
      "imgUrl": "/image/weather/weather04.png"
    }], //天气数据
  },
  mounted() {

  },
  modules: {
    layout,
    router,
    login,
    error,
    workflow
  },
  // 执行同步操作改变state   this.$store.commit("", data)
  mutations: {
    saveWeather(state, data) {
      state.weather = data;
      window.localStorage.setItem("weather", JSON.stringify(data));
    },
  },
  // 执行异步操作，但不能直接改变state   this.$store.dispatch("", data);
  // actions的方法最终还是通过调用mutations的方法来实现修改vuex的状态的
  actions: {
    // 退出登录
    LogOut({
      commit
    }) {
      return new Promise((resolve, reject) => {
        commit('SET_LOGIN_INFO', '');
        commit('SET_ACCESS_TOKEN', '');
        commit('SET_REFRESH_TOKEN', '');
        commit('SET_TOKEN_EXPIRE', '');

        resolve();
      })
    }
  },
  // Getters相当于vue中的computed计算属性，getter的返回值根据它的依赖被缓存起来，且只有当它的依赖值发生改变时才会重新计算。
  // Getters可以用于监听，state中的值的变化，返回计算后的结果。
  getters: {
    accessToken: state => state.login.accessToken,
    refreshToken: state => state.login.refreshToken,
    tokenExpire: state => state.login.tokenExpire,
    
    loginInfo: state => state.login.loginInfo,

    weather: state => state.weather,
    cachedViews: state => state.cachedViews,

    addRouters: state => state.router.addRouters,
    regRouters: state => state.router.regRouters,
    defaultRouter: state => state.router.defaultRouter,
    routers: state => state.router.routers,

    isCollapse: state => state.layout.isCollapse,
    uniquerouter: state => state.layout.uniquerouter,
    tabnavBox: state => state.layout.tabnavBox,
    openNav: state => state.layout.openNav, //当前打开tab面包屑
    errorLogList: state => state.error.errorLogList,
  },
})

export default store;