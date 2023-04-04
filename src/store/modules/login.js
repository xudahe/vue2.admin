export default {
  state: {
    loginInfo: "", // 每次刷新都要通过token请求个人信息来筛选动态路由
    loginToken: "", //登录token
    tokenExpire: "", //token过期时间

    freeLogin: false, //true为免账号登录
  },
  mutations: {
    SET_LOGIN_INFO (state, data) {
      state.loginInfo = data
      window.localStorage.setItem("loginInfo", JSON.stringify(data));
    },
    SET_LOGIN_TOKEN(state, data) {
      state.loginToken = data;
      window.localStorage.setItem("loginToken", data);
    },
    SET_TOKEN_EXPIRE(state, data) {
      state.tokenExpire = data;
      window.localStorage.setItem("tokenExpire", data);
    },
    SET_FREE_lOGIN(state, data) {
      state.freeLogin = data;
    },
  },
  actions: {
    SET_LOGIN_INFO ({commit}, data) {
      commit("SET_LOGIN_INFO", data)
    },
  }
}
