<template>
  <div id="loyout">
    <el-container>
      <el-container style="height: calc(100% - 30px);">
        <el-aside :width="$store.getters.isCollapse ? '65px' : '201px'"
          style="overflow-x: hidden; border-right: solid 1px #e6e6e6;">
          <layoutAside></layoutAside>
        </el-aside>
        <el-container :style="{ width: $store.getters.isCollapse ? 'calc(100% - 65px)' : 'calc(100% - 201px)' }">
          <el-header height="60px" style="line-height: 60px;">
            <layoutHeader @showErrorLogBox="$refs.errorLogBox.dialogVisible = true"
              @showWeather="$refs.weatherLogBox.dialogVisible = true"></layoutHeader>
          </el-header>
          <el-main>
            <tagNav style="height:42px;line-height: 42px;width: 100%;"></tagNav>

            <keep-alive :include="$store.getters.cachedViews">
              <router-view style="height:calc(100% - 42px);width: 100%;"></router-view>
            </keep-alive>

            <back-top :options="{ target: '#elmain', isMove: true }" />
          </el-main>
        </el-container>
      </el-container>
      <el-footer style="height:30px;">
        <layoutBottom></layoutBottom>
      </el-footer>
    </el-container>

    <error-log ref="errorLogBox" />
    <weather-log ref="weatherLogBox" />
    <v-uploader></v-uploader>
  </div>
</template>

<script>
import layoutAside from "./aside/aside";
import layoutHeader from "./header/header";
import layoutBottom from "./footer/bottom";
import tagNav from "./header/tagNav"

import { isMobile, isSafari } from "@/utils/agent";
export default {
  name: "layout",
  components: {
    layoutHeader,
    layoutBottom,
    layoutAside,
    tagNav
  },
  methods: {
    isMobile,
    isSafari
  }
};
</script>

<style lang="scss">
li {
  list-style: none;
}

a {
  text-decoration: none;
}

%w100 {
  width: 100%;
}

%h100 {
  height: 100%;
}

#loyout,
.el-container,
ul.el-menu {
  @extend %h100;
}


#loyout {

  .el-footer,
  .el-header,
  .el-main {
    padding: 0 !important;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9 !important;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
