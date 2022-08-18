export default {
  state: {
    mapload: false, //监听地图是否加载完成
    mapscale: -1,   //监听地图比例尺

    mapitems: [], //地图窗口组件id名称(分屏使用)
    mapitemsload: Object, //分屏预加载图层
    mapitemslayers: [], //分屏预加载图层
    layertree: [], //图层获取树
    ishowsz: false, //是否显示十字丝
  },
  mutations: {
    mapload (state, arg) {
      state.mapload = arg;
    },
    mapscale(state, arg) {
      arg.scale = arg.scale % 2 ? arg.scale + 1 : arg.scale;
      state.mapscale = arg;
    },
    layertree(state, arg) {
      state.layertree = arg;
    },
    mapitems(state, arg) {
      state.mapitems = arg;
    },
    mapitemsload(state, arg) {
      state.mapitemsload = arg;
    },
    mapitemslayers(state, arg) {
      state.mapitemslayers = arg;
    },
    ishowsz(state, arg) {
      state.ishowsz = arg;
    },
  },
  actions: {
    mapload ({commit}, arg) {
      commit("mapload", arg);
    },
    mapscale ({commit}, arg) {
      commit("mapscale", arg);
    },
    layertree ({commit}, arg) {
      commit("layertree", arg);
    },
    mapitems ({commit}, arg) {
      commit("mapitems", arg);
    },
    mapitemsload ({commit}, arg) {
      commit("mapitemsload", arg);
    },
    mapitemslayers ({commit}, arg) {
      commit("mapitemslayers", arg);
    },
    ishowsz ({commit}, arg) {
      commit("ishowsz", arg);
    },
  }
}
