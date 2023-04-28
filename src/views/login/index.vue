<!-- 应用系统登录 -->
<template>
  <div class="login-container">
    <el-form :model="loginForm" status-icon ref="loginForm" label-position="left" label-width="0px"
      class="demo-ruleForm login-page">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">帐号登陆</el-menu-item>
        <el-menu-item index="2">短信登陆</el-menu-item>
      </el-menu>
      <el-row :span="24" style="margin-top: 22px;">
        <el-form-item prop="username" style="border-bottom: 1px solid #eeeeee;">
          <el-col :span="6">
            <Icon type="ios-people" :size="20" />&nbsp;用户名：
          </el-col>
          <el-col :span="18">
            <el-input type="text" v-model="loginForm.username" autocomplete="off" placeholder="请输入用户民" clearable
              @keydown.enter.native="nextFocus(0)" />
          </el-col>
        </el-form-item>
        <el-form-item prop="username" style="border-bottom: 1px solid #eeeeee;">
          <el-col :span="6">
            <Icon type="ios-lock" :size="20" />&nbsp;密&nbsp;&nbsp;&nbsp;码：
          </el-col>
          <el-col :span="18">
            <el-input type="text" v-model="loginForm.password" autocomplete="off" placeholder="请输入密码" show-password
              @keydown.enter.native="nextFocus(1)" />
          </el-col>
        </el-form-item>
        <el-form-item prop="code" style="border-bottom: 1px solid #eeeeee;">
          <el-col :span="6">
            <Icon type="md-images" :size="20" />&nbsp;验证码：
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
            <el-button type="primary" style="width:100%;" @click.native.prevent="loginSubmit" :loading="logining">{{
              loadName }}</el-button>
          </el-col>
        </el-form-item>
        <el-col :span="12">
          <el-checkbox v-model="checkboxValue" class="rememberme">记住密码</el-checkbox>
        </el-col>
        <el-col :span="12" style="text-align: right;">
          <a>忘记密码</a>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from "js-cookie";
import { encrypt, decrypt } from "@/utils/encrypt"; //密码加密

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
      console.log(this.loginCode);
    },
    //自动重置验证码
    setRefreshCode() {
      window.clearInterval(this.timeCode);
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
      let name = Cookies.get("UID");
      let psw = Cookies.get("PSW");
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
      this.$ajax(this.$apiSet.requestToken, {
        name: this.loginForm.username,
        pass: encrypt(this.loginForm.password)
      })
        .then(res => {
          if (!res.data.success) {
            _this.loginError();
            _this.$errorMsg(res.data.message);
          } else {
            if (_this.checkboxValue == true) {
              Cookies.set("UID", _this.loginForm.username, { expires: 3 });
              Cookies.set("PSW", encrypt(_this.loginForm.password), {
                expires: 3
              });
            }
            var source = res.data.response;

            var curTime = new Date();
            var expiredate = new Date(curTime.setSeconds(curTime.getSeconds() + source.expires_in));

            _this.$store.commit("SET_TOKEN_EXPIRE", expiredate); // 保存token过期时间
            _this.$store.commit("SET_ACCESS_TOKEN", source.token); // 保存token
            window.localStorage.refreshtime = expiredate; //保存刷新时间，这里的和过期时间一致，但每次操作都会进一步刷新改时间

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
      this.$ajax(this.$apiSet.getLoginByToken, {
        token: token
      }).then(res => {
        if (!res.data.success) {
          _this.loginError();
          _this.$errorMsg(res.data.message);
        } else {
          loadScripts(['./AppSetting.js']).then((e) => {
            _this.loginEnd();

            let loginInfo = res.data.response;
            window.localStorage.loginInfo = JSON.stringify(loginInfo);

            setTimeout(() => {
              let refreshtime = new Date(Date.parse(window.localStorage.refreshtime));

              _this.$router.push({ path: "/home" }); //登录成功之后重定向到首页

              _this.$notify({
                type: "success",
                message: `登录成功 \n 欢迎管理员：${loginInfo.realName}！Token 将在 ${_this.$formatDate(refreshtime, true)}后过期！`,
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
    // 清除状态保持
    window.localStorage.clear()
    window.sessionStorage.clear();
    // 状态保持清除后刷新页面(只刷新当前页面一次)
    if (window.location.href.indexOf("#reloaded") == -1) {
      window.location.href = window.location.href + "#reloaded";
      window.location.reload();
    }

    this.cookies();
    this.setRefreshCode();

    this.$nextTick(() => {
      this.$refs["loginForm"].$el[0].focus();
    })
  },
  created() {
    var _self = this;
    // document.onkeydown = function (e) {
    //   var key = window.event.keyCode;
    //   if (key == 13 || key == 100) {
    //     //对主键盘和小键盘的Enter都管用
    //     _self.loginSubmit();
    //   }
    // };
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
.login-container {
  width: 100%;
  height: 100%;
  padding: 8% 50%;
  background-image: linear-gradient(120deg,
      #00a7f5 45%,
      #0cb3ff 40%); //渐变背景

  .el-input__inner {
    border: none !important;
  }

  .login-page {
    color: #868484;
    font-weight: 400;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    width: 400px;
    padding: 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6; //添加阴影
  }

  label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
  }
}
</style>
