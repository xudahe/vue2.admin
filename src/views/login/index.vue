<!-- 应用系统登录 -->
<template>
  <div class="login-page">
    <div class="container">
      <div class="container-left">

      </div>
      <div class="container-right">
        <el-form :model="loginForm" status-icon ref="loginForm" label-position="left" label-width="0px"
          class="login-form">
          <div class="div-title">账号登录</div>
          <div class="div-content">
            <el-row :span="24" style="height: 100%;">
              <el-form-item prop="username" style="border-bottom: 1px solid #eeeeee;">
                <el-col :span="6">
                  <Icon type="ios-people" :size="20" />
                  <span style="font-size: 0.16rem;">&nbsp;账&nbsp;&nbsp;&nbsp;号：</span>
                </el-col>
                <el-col :span="18">
                  <el-input type="text" v-model="loginForm.username" autocomplete="off" placeholder="请输入账号" clearable
                    @keydown.enter.native="nextFocus(0)" />
                </el-col>
              </el-form-item>
              <el-form-item prop="username" style="border-bottom: 1px solid #eeeeee;">
                <el-col :span="6">
                  <Icon type="ios-lock" :size="20" />
                  <span style="font-size: 0.16rem;">&nbsp;密&nbsp;&nbsp;&nbsp;码：</span>
                </el-col>
                <el-col :span="18">
                  <el-input type="text" v-model="loginForm.password" autocomplete="off" placeholder="请输入密码" show-password
                    @keydown.enter.native="nextFocus(1)" />
                </el-col>
              </el-form-item>
              <el-form-item prop="code" style="border-bottom: 1px solid #eeeeee;">
                <el-col :span="6">
                  <Icon type="md-images" :size="20" />
                  <span style="font-size: 0.16rem;">&nbsp;验证码：</span>
                </el-col>
                <el-col :span="12">
                  <el-input type="text" v-model="loginCode" autocomplete="off" placeholder="请输入验证码" clearable
                    @keydown.enter.native="nextFocus(2)" />
                </el-col>
                <el-col :span="6">
                  <div class="login-code" @click="setRefreshCode">
                    <s-identify :identifyCode="identifyCode" :fontSizeMax="25" :contentWidth="80"></s-identify>
                  </div>
                </el-col>
              </el-form-item>
              <el-form-item style="width:100%;">
                <el-col :span="24">
                  <el-button type="primary" style="width:100%;" @click.native.prevent="loginSubmit" :loading="logining">
                    {{ loadName }}
                  </el-button>
                </el-col>
              </el-form-item>
              <el-col :span="12" style="text-align: left;">
                <el-checkbox v-model="checkboxValue" class="rememberme">记住密码</el-checkbox>
              </el-col>
              <el-col :span="12" style="text-align: right;">
                <a>忘记密码？</a>
              </el-col>
            </el-row>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import apiSetting from "@/api/apiSetting.js"

import Cookies from "js-cookie";
import { encrypt, decrypt } from "@/utils/encrypt"; //密码加密
import {
  setStore,
  getStore,
} from '@/utils/storage'

var publicPath = process.env.BASE_URL;
export default {
  data() {
    return {
      activeIndex: '1',

      loadName: "登录",
      timeCode: null,
      timeCount: 60, //验证码刷新时间
      timeSum: 0,
      loginCode: "",
      identifyCode: "",
      identifyCodes: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
      ],

      logining: false,
      loginForm: {
        username: "admin",
        password: "111111"
      },
      checkboxValue: true
    };
  },
  methods: {
    // this.tabs = Array.from(new Set(this.tabs)); //去除数组重复项

    //产生随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.timeSum = JSON.parse(JSON.stringify(this.timeCount));
      this.identifyCode = "";
      for (let i = 0; i < 4; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
      this.loginCode = JSON.parse(JSON.stringify(this.identifyCode))
      console.log("验证码：" + this.loginCode);
    },
    //自动重置验证码
    setRefreshCode() {
      if (!this.$isNull(this.timeCode)) {
        clearInterval(this.timeCode);
      }

      this.refreshCode();

      let _this = this;
      this.timeSum = JSON.parse(JSON.stringify(this.timeCount));
      this.timeCode = setInterval(() => {
        if (_this.timeSum > 1 && _this.timeSum <= _this.timeCount)
          _this.timeSum--;
        else {
          _this.refreshCode();
          _this.timeSum = _this.timeCount;
        }
      }, 1000);
    },
    cookies() {
      let name = Cookies.get("XUDH-UID");
      let psw = Cookies.get("XUDH-PSW");
      if (name && name != undefined) {
        this.loginForm.username = name;
      }
      if (psw && psw != undefined) {
        this.loginForm.password = decrypt(psw);
        this.checkboxValue = true;
      }
      if (name == undefined || psw == undefined) {
        this.$router.push({ path: "/login" });
      }
    },
    nextFocus(index) { //按下回车键,聚焦下一个input
      if (index < 2) {
        this.$refs["loginForm"].$el[index + 1].focus();
      } else {
        this.loginSubmit();
      }
    },
    loginStart() {
      this.logining = true;
      this.loadName = "登录中...";
      this.$loading.showLoading();
    },
    loginEnd() {
      this.logining = false;
      this.loadName = "登录成功";
      this.$loading.hideLoading();
    },
    loginError() {
      this.$notify({ type: "error", message: `登录失败！`, duration: 1000 });
      this.logining = false;
      this.loadName = "登录";
      this.$loading.hideLoading();
      this.setRefreshCode();
    },
    loginSubmit() {
      let _this = this;

      if (!this.loginForm.username) return this.$errorMsg("请输入用户名");
      if (!this.loginForm.password) return this.$errorMsg("请输入密码");

      this.loginStart();

      //获取Token
      this.$ajax(apiSetting.requestToken, {
        name: this.loginForm.username,
        pass: encrypt(this.loginForm.password)
      })
        .then(res => {
          if (!res.data.success) {
            _this.loginError();
            _this.$errorMsg(res.data.message);
          } else {
            if (_this.checkboxValue == true) {
              Cookies.set("XUDH-UID", _this.loginForm.username, { expires: 3 }); // 3天后失效
              Cookies.set("XUDH-PSW", encrypt(_this.loginForm.password), { expires: 3 });
            }
            var source = res.data.response;

            var curTime = new Date();
            var expiredate = new Date(curTime.setSeconds(curTime.getSeconds() + source.expires_in));

            _this.$store.commit("SET_TOKEN_EXPIRE", expiredate); // 保存token过期时间
            _this.$store.commit("SET_ACCESS_TOKEN", source.token); // 保存token

            _this.$notify({
              type: "success",
              message: `成功获取令牌，等待服务器返回用户信息...`,
              duration: 2000
            });

            _this.getLoginByToken(source.token);
          }
        })
        .catch(err => {
          _this.loginError();
        });
    },
    getLoginByToken(token) {
      var _this = this;
      this.$ajax(apiSetting.getLoginByToken, {
        token: token
      }).then(res => {
        if (!res.data.success) {
          _this.loginError();
          _this.$errorMsg(res.data.message);
        } else {
          loadScripts([`${publicPath}config/loading.js`]).then((e) => {
            _this.loginEnd();

            let loginInfo = res.data.response;

            setStore({
              name: 'loginInfo',
              content: loginInfo
            });

            //后期从接口获取theme值
            _this.$store.commit("SET_THEME_NAME", _this.$store.state.theme.themeName);

            setTimeout(() => {
              _this.$router.push({ path: "/home" }); //登录成功之后重定向到首页

              _this.$notify({
                type: "success",
                message: `登录成功 \n 欢迎管理员：${loginInfo.realName}！Token 将在 ${_this.$formatDate(_this.$store.getters.tokenExpire, true)}后过期！`,
                duration: 3000
              });
            }, 1000);

          })
        }
      }).catch(err => {
        _this.loginError();
      });
    },
    handleSelect(key, keyPath) {
      this.activeIndex = key;
    },
  },
  mounted() {
    // 状态保持清除后刷新页面(只刷新当前页面一次)
    // if (window.location.href.indexOf("#reloaded") == -1) {
    //   window.location.href = window.location.href + "#reloaded";
    //   window.location.reload();
    // }

    this.$store.commit("SET_THEME_NAME", "");
    this.$store.commit("SET_THEME_GRAY", "");

    this.cookies();
    this.setRefreshCode();

    this.$nextTick(() => {
      this.$refs["loginForm"].$el[0].focus();
    })
  },
  created() {

  },
  beforeDestroy() {
    document.onkeydown = undefined;
    window.clearInterval(this.timeCode);
  },
  destroyed() {
    window.clearInterval(this.timeCode);
  }
};
</script>

<style lang="less">
.login-page {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #00a7f5 50%, #0cb3ff 50%); //渐变背景

  .el-input__inner {
    border: none !important;
  }
}

.login-form {
  height: 100%;
}

.div-title {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  letter-spacing: 3px;
  font-size: 0.28rem;
  font-weight: bold;
}

.div-content {
  margin-top: 0.25rem;
  height: calc(100% - 0.85rem);
}

.login-page .container {
  width: 1200px;
  height: 500px;
  color: #868484;
  border-radius: 5px;
  box-shadow: 0 0 25px #cac6c6; //添加阴影

  /* 方法一：这个方法要知道div的宽度和高度。对div使用绝对布局position:absolute;并把top和left的值都设置为50%；50%就是指页面窗口的宽度和高度的50%；最后将div左移和上移，左移和上移的大小为div宽度和高度的一半。 */
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // margin-left: -450px;
  // margin-top: -200px;

  /* 方法二：div使用绝对定位position：absolute，并且设置left和top的值都为50%。使用css3的transform属性。transform：translate（-50%，-50%）。 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /*  方法三：对div使用绝对布局position:absolute;并设置top，left，right，bottom的值相等，但不一定都等于0；并且设置margin:auto。*/
  // position: absolute;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // margin: auto;
}

.login-page .container .container-left {
  width: 50%;
  height: 100%;
  float: left;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;

  background-image: url('@/assets/login/login-left.jpg');
  background-size: 100% 100%;
}


.login-page .container .container-right {
  width: 50%;
  height: 100%;
  float: left;
  background: #fff;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

  color: #868484;
  font-weight: 400;
  padding: 15px 65px;
}
</style>
