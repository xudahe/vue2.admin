import { setStore, getStore } from "@/utils/storage";

import { setTheme } from "@/utils/index.js";

export default {
  state: {
    themeName: getStore({ name: 'themeName' }) || "001", //主题样式
  },
  mutations: {
    SET_THEME_NAME: (state, data) => {
      state.themeName = data;
      setStore({ name: "themeName", content: state.themeName, });
      setTheme(state.themeName);
    },
  },
  actions: {},
};
