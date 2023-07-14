<template>
  <el-form status-icon ref="userForm" :model="userForm" :rules="rules" size="small" label-width="80px">
    <el-form-item label="原密码" prop="oldPwd">
      <el-input v-model="userForm.oldPwd" type="password" style="width: 95%;" show-password clearable />
    </el-form-item>
    <el-form-item label="新密码" prop="newPwd">
      <el-input v-model="userForm.newPwd" type="password" style="width: 95%;" show-password clearable />
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input v-model="userForm.checkPass" type="password" style="width: 95%;" show-password clearable />
    </el-form-item>
    <el-form-item style="text-align: right;">
      <el-button @click.native="resetForm" size="small">重置</el-button>
      <el-button type="primary" @click.native="doSubmit" size="small">确认</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'
import { encrypt } from "@/utils/encrypt";
import apiSetting from "@/api/apiSetting.js"

export default {
  data() {
    var checkPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.userForm.newPwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      userForm: { oldPwd: "", newPwd: "" },
      rules: {
        oldPwd: [
          { required: true, message: "请输入原密码", trigger: "blur" },
          {
            min: 3,
            max: 21,
            message: "长度在 3 到 21 个字符",
            trigger: "change"
          }
        ],
        newPwd: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          {
            min: 3,
            max: 21,
            message: "长度在 3 到 21 个字符",
            trigger: "change"
          }
        ],
        checkPass: [{ validator: checkPassword, trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapState({
      userinfo: state => state.login.loginInfo.userinfo
    })
  },
  methods: {
    // 重置表单
    resetForm() {
      try {
        this.userForm = { oldPwd: "", newPwd: "", checkPass: "" };
        this.$refs.userForm.resetFields();
      } catch (e) { }
    },
    doSubmit() {
      let _this = this;

      this.$refs.userForm.validate(valid => {
        if (valid) {
          this.$ajax(apiSetting.UpdatePassword, {
            userId: this.userinfo.guid,
            oldPwd: encrypt(this.userForm.oldPwd),
            newPwd: encrypt(this.userForm.newPwd)
          }).then(res => {
            if (!res.data.success) {
              _this.$errorMsg(res.data.message)
            } else {
              _this.$emit("close_dialog", 'pwd')
            }
          }).catch(err => { })
        };
      })
    },
  }
}
</script>

<style></style>
