<template>
  <div id="asideNav">
    <div class="logo-name">
      <p v-if="$store.getters.isCollapse">XU</p>
      <p v-else>vue-Admin</p>
    </div>
    <el-menu :default-active="$route.path" class="el-menu-vertical" :class="{ 'is-menu-span': $store.getters.isCollapse }"
      @select="selectmenu" mode="vertical" :collapse="$store.getters.isCollapse" :router="$store.getters.uniquerouter"
      :unique-opened="$store.getters.uniquerouter" :collapse-transition="true">
      <menu-tree :menuData="$store.getters.loginInfo.menuinfo"></menu-tree>
    </el-menu>
  </div>
</template>

<script>
import menuTree from "./menuTree";

export default {
  name: "asideNav",
  components: {
    menuTree
  },
  watch: {
    // 监听浏览器直接输入路由，将此路由添加到tabnavBox
    "$route.path": function (val) {
      this.selectmenu(val);
    }
  },
  methods: {
    selectmenu(key) {
      let router = this.$store.getters.routers;
      let name = "";

      let navTitle = function (path, routerARR) {
        for (let i = 0; i < routerARR.length; i++) {
          if (routerARR[i].path === path) {
            name = routerARR[i].name;
            break;
          } else {
            if (routerARR[i].children && routerARR[i].children.length > 1) {
              navTitle(path, routerARR[i].children);
            }
          }
        }

        return name;
      };

      this.$store.dispatch("addTab", {
        title: navTitle(key, router),
        path: key
      });
    },
  }
};
</script>

<style >
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.is-menu-span .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
</style>

<style lang="scss">
#asideNav {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .logo-name {
    // background-color: #03152a !important;
    width: 100%;
    font-weight: 300;
    z-index: 999;

    p {
      cursor: pointer;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 16px;
      color: #5e6d82;
    }
  }

  .el-menu {
    flex: 1;
    overflow: inherit;
    border-right: none;

    .fa {
      vertical-align: middle;
      margin-right: 5px;
      width: 24px;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>
