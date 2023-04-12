<template>
  <div id="header">
    <span class="hideAside" @click="collapse">
      <i :class="$store.getters.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" style="font-size:0.24rem;"></i>
    </span>

    <screen-record></screen-record>
    <ul class="personal">
      <li class="fullScreen" @click="fullScreen">
        <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
          <i class="fa fa-arrows-alt fa-lg"></i>
        </el-tooltip>
      </li>
      <li>
        <div style="display:-webkit-box;cursor: pointer;" @click="$emit('showWeather')">
          <img class="weathers_img" :src="weather[0].imgUrl" />
          <div class="weathers_type">{{ weather[0].weather }}</div>
          <div class="weathers_text">{{ weather[0].temperature }}℃</div>
        </div>
      </li>
      <li>
        <el-tooltip class="item" effect="dark" :content="tooltipContent" placement="bottom">
          <el-badge :max="99" :value="$store.getters.errorLogList.length" style="cursor: pointer;"
            @click.native="$emit('showErrorLogBox')">
            <!-- <svg-icon :class="$store.getters.errorLogList.length == 0 ? 'bug-f' : 'bug-t'" icon-class="bug" /> -->
            <el-button icon="el-icon-bell" circle size="mini"></el-button>
          </el-badge>
        </el-tooltip>
      </li>
      <li>
        <colorPicker></colorPicker>
      </li>
      <li>
        <el-dropdown trigger="click" class="avatar-dropdown">
          <span class="el-dropdown-link"> {{ loginInfo.userinfo.loginName }}</span>
          <el-dropdown-menu slot="dropdown" style="top: 38px;">
            <el-dropdown-item @click.native="$router.push('/home')">
              <i class="el-icon-s-home" />首页
            </el-dropdown-item>
            <el-dropdown-item @click.native="$router.push('/personal')">
              <i class="el-icon-s-custom" />个人中心
            </el-dropdown-item>
            <el-dropdown-item @click.native="logout">
              <i class="fa fa-paper-plane" />退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li>
        <el-avatar size="small" :src="avatar" style="margin-top: 50%;"></el-avatar>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import screenRecord from "@/components/recording/index1";

export default {
  name: "Header",
  components: { screenRecord },
  computed: {
    ...mapGetters(["loginInfo", "weather"]), //天气数据
    tooltipContent() {
      return this.$store.getters.errorLogList.length == 0 ? `无异常` : `${this.$store.getters.errorLogList.length} 个异常`
    },
  },
  data() {
    return {
      isfullScreen: true,
      avatar: "https://himg.bdimg.com/sys/portrait/item/public.1.d0bbce53.jn3BCDx37C9aK8sqBwSfvQ.jpg",
      isFlod: true,
    }
  },
  methods: {
    collapse() {
      this.$store.dispatch("collapse")
    },
    // 退出登录
    logout() {
      window.sessionStorage.clear();
      window.localStorage.clear();
      // window.location.reload(); //会降低性能
      this.$store.dispatch("LogOut").then(() => {
        this.$router.push({ path: "/login" });
      });
    },
    fullScreen() {
      if (this.isfullScreen) {
        var docElm = document.documentElement
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen()
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen()
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen()
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen()
        }
        this.isfullScreen = false
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
        this.isfullScreen = true
      }
    },
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
$top: top;
$bottom: bottom;
$left: left;
$right: right;
$leftright: (
  $left,
  $right
);

%w100 {
  width: 100%;
}

%h100 {
  height: 100%;
}

%cursor {
  cursor: pointer;
}

@mixin set-value($side, $value) {
  @each $prop in $leftright {
    #{$side}-#{$prop}: $value;
  }
}

#header {
  // height: 60px;
  // line-height: 60px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;

  .hideAside {
    padding-left: 20px;
    @extend %cursor;
  }

  .personal {
    display: flex;
    flex-direction: row;

    li {
      @include set-value(margin, 13px);
      font-size: 0.12rem;
    }

    .fullScreen {
      @extend %cursor;
    }

    .el-dropdown-link {
      @extend %cursor;
    }
  }

  .weathers_img {
    position: relative;
    top: 0.1rem;
    width: 0.3rem;
    height: 0.3rem;
  }

  .weathers_type {
    // color: #FFFFFF;
    left: 0rem;
    position: relative;
    font-size: 0.12rem;
    font-family: "eras medium itc";
  }

  .weathers_text {
    // color: #FFFFFF;
    left: 0.05rem;
    position: relative;
    font-size: 0.12rem;
    font-family: "eras medium itc";
  }

  .bug-t {
    width: 24px !important;
    height: 24px !important;
    color: red;
    vertical-align: middle;
  }

  .bug-f {
    width: 24px !important;
    height: 24px !important;
    color: rgba(0, 0, 0, 0.5);
    vertical-align: middle;
  }

  ::v-deep .el-badge__content.is-fixed {
    top: 14px !important;
    line-height: 14px !important;
    padding: 0px 3px !important;
    cursor: pointer;
  }
}
</style>
