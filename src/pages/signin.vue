<template>
  <div class="login-container">
    <el-form ref="form" :model="form" :rules="ruleForm" class="login-form">
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <i class="el-icon-edit"></i>
        </span>
        <el-input name="username" type="text" v-model="form.username" autoComplete="on" placeholder="username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-document"></i>
        </span>
        <el-input name="password" :type="passwordType" v-model="form.password" autoComplete="on" placeholder="password" />
        <span class="show-pwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>

      <el-button type="primary" style="width:50%;margin-bottom:30px;" @click="handleLogin">Login</el-button>
      <el-button type="primary" style="width:49%;margin-bottom:30px;margin:0;" @click="handleSignUp">Register</el-button>

    </el-form>
  </div>
</template>

<script>
import {toLogin} from '../api/index'
export default {
  name: 'signin',
  data () {
    return {
      form: {
        username: 'wangyanfeng',
        password: '123456'
      },
      passwordType: 'password',
      ruleForm: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleLogin () {
      toLogin(this.form.username, this.form.password).then(result => {
        let res = result.data
        if (res.status === 1) {
          this.$message({
            message: res.msg,
            type: 'success',
            duration: 1500
          })
          this.$store.dispatch('UserLogin', res.data.token)
          // this.$router.push({ path: '/mainpart/posts' })
        }
      })
    },
    handleSignUp () {
      console.log('sign-up')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
}
</style>
