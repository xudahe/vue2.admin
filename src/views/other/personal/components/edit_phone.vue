<template>
  <el-form status-icon ref="userForm" :model="userForm" :rules="rules" size="small" label-width="80px">
    <el-form-item label="手机" prop="phone">
      <el-input v-model="userForm.phone" style="width: 95%;" clearable />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="userForm.password" style="width: 95%;" clearable />
    </el-form-item>
    <el-form-item style="text-align: right;">
      <el-button @click.native="resetForm" size="small">重置</el-button>
      <el-button type="primary" @click.native="doSubmit" size="small">确认</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { encrypt } from '@/utils/encrypt'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      userForm: { phone: "", password: "" },
      rules: {
        phone: [
          { required: true, message: "请输入手机号码", trigger: "change" },
          { type: "phone", message: "请输入正确的手机号码", trigger: "change" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 3, max: 21, message: "长度在 3 到 21 个字符", trigger: "change" }
        ]
      }
    };
  },
  computed: {
    ...mapState({
      user: state => state.login.loginInfo.userinfo
    })
  },
  watch: {
    'user.phone': {
      handler() {
        this.userForm.phone = this.user.phone
      },
      immediate: true
    }
  },
  methods: {
    // 重置表单
    resetForm() {
      try {
        this.userForm = { phone: "", password: "" };
        this.$refs.userForm.resetFields();
      } catch (e) { }
    },
    doSubmit() {
      // this.$refs.userForm.validate(valid => {
      //   if (valid) {
      //     this.$http_json({
      //       url: "/api/user/updatePhone",
      //       method: "post",
      //       data: {
      // 				phone: this.userForm.phone,
      // 				password: encrypt(this.userForm.password)
      // 			}
      //     }).then(() => {
      //       this.$successMsg("修改成功");
      //       this.$emit("updateUserInfo");
      //     });
      //   } else {
      //     return false;
      //   }
      // });
    }
  }
};
</script>

<style></style>
