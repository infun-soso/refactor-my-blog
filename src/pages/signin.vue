<template>
  <div class="signin">
    <el-form ref="form" :model="form" class="login-form">
      <div class="title-container">
        <h3>Login Form</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <!-- <svg-icon icon-class="user" /> -->
        </span>
        <el-input name="username" type="text" v-model="form.username" autoComplete="on" placeholder="username" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <!-- <svg-icon icon-class="password" /> -->
        </span>
        <el-input name="password" :type="passwordType" v-model="form.password" autoComplete="on" placeholder="password" />
        <span class="show-pwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>

      <el-button type="primary" style="width:100%;margin-bottom:30px;">Login</el-button>

    </el-form>
  </div>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      form: {
        username: 'admin',
        password: '111111'
      },
      passwordType: 'password'
    }
  }
}
</script>

<style lang="less">
.signin {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: #2d3a4b;
}
.signin .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
}
.title-container h3{
    font-size: 26px;
    font-weight: 900;
    color: #eee;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
}
.svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }

  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    }
  .el-input input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #eee;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #2d3a4b inset !important;
        -webkit-text-fill-color: #fff !important;
      }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
</style>
