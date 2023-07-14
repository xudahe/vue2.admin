<!-- 
  transition 过渡模式：
    in-out：新元素先进行过渡，完成之后 当前元素过渡离开。
    out-in：当前元素先进行过渡，完成之后 新元素过渡进入。 
-->


<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { toggleGrayMode, setTheme } from "@/utils/index";
import { location } from "@/utils/location.js";

export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
  watch: {
    $route(to, from) {
      console.log("当前路由：", to);
    },
  },
  mounted() {
    function checkIE() {
      return (
        "-ms-scroll-limit" in document.documentElement.style &&
        "-ms-ime-align" in document.documentElement.style
      );
    }
    if (checkIE()) {
      //①当URL的片段标识符更改时，将触发hashchange事件（跟在#符号后面的URL部分，包括#符号）
      //②hashchange事件触发时，事件对象会有hash改变前的URL（e.oldURL）和hash改变后的URL（e.newURL）两个属性：
      window.addEventListener(
        "hashchange",
        (e) => {
          var currentPath = window.location.hash.slice(1);
          if (currentPath != "" && this.$route.path !== currentPath) {
            this.$router.push(currentPath);
          }
        },
        false
      );
    }
  },
  methods: {
    async initAamp() {
      // 已载入高德地图API，则直接初始化地图
      if (window.AMap && window.AMapUI) {
        await location.initMap("map-container"); //获取当前客户端位置
      }
    }
  },
  created() {
    this.initAamp();

    this.$store.commit("SET_THEME_GRAY", this.$store.state.theme.themeGray);
    this.$store.commit("SET_THEME_NAME", this.$store.state.theme.themeName);
  },
  //生命周期函数--实例销毁之前调用
  beforeDestroy() {
    /**
     * 假设有三个页面，分别为A、B、C页面，其中B页面定义了beforeDestroy生命周期函数。
     * 页面执行顺序是A -> B -> C,当从B到C时，beforeDestroy 函数会执行，但由B点击浏览器返回按钮时返回A时，beforeDestroy 不触发。
     */
  },
};

/**
 *  https://zhuanlan.zhihu.com/p/149523091
 * 
 *  window.location 属性一览表
 * .origin URL基础地址，包括协议名、域名和端口号
 * .protocol协议 (http: 或 https:)
 * .host域名+端口号
 * .hostname域名
 * .port端口号
 * .pathname路径(以/开头)
 * .search查询字符串，以?开头
 * .hash页面锚点，以#开头.href完整 URL
 *  window.location.href     → 'https://www.jianshu.com/search?q=JS#comments'
                  .origin   → 'https://www.jianshu.com'
                  .protocol → 'https:'
                  .host     → 'www.jianshu.com'
                  .hostname → 'www.jianshu.com'
                  .port     → ''
                  .pathname → '/search/'
                  .search   → '?q=JS'
                  .hash     → '#comments'
 */
</script>

<style lang="less">
#app {
  height: 100%;
  width: 100%;
}
</style>
