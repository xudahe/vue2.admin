<template>
  <div id="loyout">
    <el-container>
      <layoutAside></layoutAside>
      <el-container direction="vertical">
        <layoutHeader @showErrorLogBox="$refs.errorLogBox.dialogVisible = true" @showWeather="$refs.weatherLogBox.dialogVisible = true"></layoutHeader>
        <el-main id="elmain" class="elmain">
          <transition name="main" mode="out-in">
            <keep-alive :include="$store.getters.cachedViews">
              <router-view v-transition></router-view>
            </keep-alive>
          </transition>
          <back-top :options="{ target: '#elmain', isMove: true }" />
        </el-main>
        <!-- <el-footer>
          <layoutBottom></layoutBottom>
        </el-footer> -->
      </el-container>
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
import { isMobile, isSafari } from "@/utils/agent";
export default {
  name: "layout",
  components: {
    layoutHeader,
    layoutBottom,
    layoutAside
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

$top: top;
$bottom: bottom;
$left: left;
$right: right;
$leftright: ($left, $right);
%w100 {
  width: 100%;
}

%h100 {
  height: 100%;
}

%cursor {
  cursor: pointer;
}

html,
body,
#loyout,
.el-container,
#asideNav,
ul.el-menu {
  @extend %h100;
}

@mixin set-value($side, $value) {
  @each $prop in $leftright {
    #{$side}-#{$prop}: $value;
  }
}
// .login-box {
//     @include set-value(top, 5px);
// }

#loyout {
  #elmain {
    background-color: #fff;
    padding: 5px !important;
  }

  .el-footer {
    height: 0.3rem !important;
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
