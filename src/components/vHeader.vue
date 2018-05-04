<template>
  <div class="header">
    <div class="item-container">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="activeIndex"
        class="el-menu-demo" mode="horizontal"
        @select="handleSelect">
        <el-menu-item index="https://github.com/infun-soso">GitHub</el-menu-item>
        <el-menu-item index="/posts">全部文章</el-menu-item>
        <el-menu-item index="/posts1/">我的文章</el-menu-item>
        <el-menu-item index="4">发表文章</el-menu-item>
      </el-menu>
    </div>
    <div class="info-box" style="line-height: 60px;margin-right: 10px">
      <div v-if="isLogin">
        <span style="color: white">Hi, {{ userName }}</span>
        <el-button type="text" @click="toLogout">退出</el-button>
      </div>
      <div v-else>
        <el-button type="text">注册</el-button>
        <el-button type="text" @click="toLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {toLogout} from '../data/fetchData'
export default {
  name: 'vheader',
  data () {
    return {
      activeIndex: '/posts',
      isrouter: true,
      isLogin: false,
      userName: ''
    }
  },
  methods: {
    handleSelect (tab, event) {

    },
    toLogin () {
      this.$router.push({path: '/signin'})
    },
    toLogout () {
      toLogout().then(res => {
        if (res.status === 1) {
          localStorage.removeItem('username')
          this.$message({
            message: res.msg,
            type: 'success',
            duration: 1600,
            onClose () {
              window.location.reload()
            }
          })
        }
      })
    }
  },
  mounted () {
    this.userName = localStorage.getItem('username')
    if (this.userName) {
      this.isLogin = true
    }
  }
}
</script>

<style>
.info-box {
  text-align: right;
  position: absolute;
   line-height: 60px;
  right: 20px;
  top: 0;
}
</style>
