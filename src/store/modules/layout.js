import { setStore, getStore } from "@/utils/storage";

export default {
  state: {
    isCollapse: false,
    uniquerouter: true, //是否只保持一个子菜单的展开
    openNav: {},
    tabnavBox: getStore({ name: "addTab" }) || [
      {
        title: "home",
        path: "/home",
      },
    ],
  },
  mutations: {
    addTab(state, arg) {
      state.isActive = arg.path;
      if (state.tabnavBox[0] && state.tabnavBox[0].name !== "home") {
        state.tabnavBox.unshift({
          title: "首页",
          name: "home",
          path: "/home",
        });
      }

      for (let i = 0; i < state.tabnavBox.length; i++) {
        if (state.tabnavBox[i].path === arg.path) {
          return false;
        }
      }
      state.tabnavBox.push({
        title: arg.title,
        name: arg.name,
        path: arg.path,
      });

      setStore({
        name: "addTab",
        content: state.tabnavBox,
      });
    },
    openMenu(state, arg) {
      state.openNav = arg;
    },
    removeTab(state, arg) {
      let index = state.tabnavBox.findIndex(function (value, key) {
        return value.path === arg.tabItem.path;
      });
      state.tabnavBox.splice(index, 1);
      if (arg.tabItem.path === arg.fullPath) {
        let tabActive = state.tabnavBox[index] || state.tabnavBox[index - 1];
        arg.router.push(tabActive.path);
      }
      if (state.tabnavBox.length == 1) arg.router.push("/home");

      setStore({
        name: "addTab",
        content: state.tabnavBox,
      });
    },
    removeLeftTab(state, arg) {
      let index = state.tabnavBox.findIndex(function (value, key) {
        return value.path === arg.tabItem.path;
      });
      state.tabnavBox.splice(1, index - 1);
      arg.router.push(arg.tabItem.path);
      if (state.tabnavBox.length == 1) arg.router.push("/home");

      setStore({
        name: "addTab",
        content: state.tabnavBox,
      });
    },
    removeRightTab(state, arg) {
      let index = state.tabnavBox.findIndex(function (value, key) {
        return value.path === arg.tabItem.path;
      });
      state.tabnavBox.splice(index + 1, state.tabnavBox.length);
      arg.router.push(arg.tabItem.path);
      if (state.tabnavBox.length == 1) arg.router.push("/home");

      setStore({
        name: "addTab",
        content: state.tabnavBox,
      });
    },
    removeOtherTab(state, arg) {
      state.tabnavBox = [
        {
          title: "首页",
          name: "home",
          path: "/home",
        },
      ];
      if (arg.all) {
        return arg.router.push("/home");
      }

      state.tabnavBox.push(arg.tabItem);
      arg.router.push(arg.tabItem.path);
      if (state.tabnavBox.length == 1) arg.router.push("/home");

      setStore({
        name: "addTab",
        content: state.tabnavBox,
      });
    },
    collapse(state, arg) {
      state.isCollapse = !state.isCollapse;
    },
  },
  actions: {
    addTab({ commit }, arg) {
      commit("addTab", arg);
    },
    openMenu({ commit }, arg) {
      commit("openMenu", arg);
    },
    removeTab({ commit }, arg) {
      commit("removeTab", arg);
    },
    removeLeftTab({ commit }, arg) {
      commit("removeLeftTab", arg);
    },
    removeRightTab({ commit }, arg) {
      commit("removeRightTab", arg);
    },
    removeOtherTab({ commit }, arg) {
      commit("removeOtherTab", arg);
    },
    collapse({ commit }, arg) {
      commit("collapse", arg);
    },
  },
};
