import { setStore, getStore } from "@/utils/storage";

export default {
  state: {
    loginInfo: "", // 不要从localStorage中读取，目的是进行路由注册

    accessToken: getStore({ name: "accessToken" }) || "", //访问token
    refreshToken: getStore({ name: "refreshToken" }) || "", //刷新token
    tokenExpire: getStore({ name: "tokenExpire" }) || "", //token过期时间
  },
  mutations: {
    SET_LOGIN_INFO(state, data) {
      state.loginInfo = data;
      setStore({
        name: "loginInfo",
        content: state.loginInfo,
      });
    },
    SET_ACCESS_TOKEN(state, data) {
      state.accessToken = data;
      setStore({
        name: "accessToken",
        content: state.accessToken,
      });
    },
    SET_REFRESH_TOKEN: (state, data) => {
      state.refreshToken = data;
      setStore({
        name: "refreshToken",
        content: state.refreshToken,
      });
    },
    SET_TOKEN_EXPIRE(state, data) {
      state.tokenExpire = data;
      setStore({
        name: "tokenExpire",
        content: state.tokenExpire,
      });
    },
  },
  actions: {
    SET_LOGIN_INFO({ commit }, data) {
      commit("SET_LOGIN_INFO", data);
    },
  },
};
