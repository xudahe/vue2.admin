export default {
  state: {
    loginInfo: "", // 每次刷新都要通过token请求个人信息来筛选动态路由
    
    accessToken: '', //访问token
    refreshToken: '', //刷新token
    tokenExpire: '', //token过期时间
  },
  mutations: {
    SET_LOGIN_INFO (state, data) {
      state.loginInfo = data
      window.localStorage.setItem("loginInfo", JSON.stringify(data));
    },
    SET_ACCESS_TOKEN(state, data) {
      state.accessToken = data;
      window.localStorage.setItem("accessToken", data);
    },
    SET_REFRESH_TOKEN: (state, data) => {
      state.refreshToken = data;
      window.localStorage.setItem("refreshToken", data);
    },
    SET_TOKEN_EXPIRE(state, data) {
      state.tokenExpire = data;
      window.localStorage.setItem("tokenExpire", data);
    },
  },
  actions: {
    SET_LOGIN_INFO ({commit}, data) {
      commit("SET_LOGIN_INFO", data)
    },
  }
}
