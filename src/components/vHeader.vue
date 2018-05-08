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
        <el-menu-item index="/mainpart/posts">全部文章</el-menu-item>
        <el-menu-item index="/mainpart/myposts">我的文章</el-menu-item>
        <el-menu-item index="/mainpart/create">发表文章</el-menu-item>
      </el-menu>
    </div>
    <div class="info-box" style="line-height: 60px;margin-right: 10px">
      <div v-if="isLogin">
        <span style="color: white">Hi, {{ userName }}</span>
        <el-popover
          placement="down"
          width="20"
          trigger="click">
           <el-button @click="toLogout" type="text">退出</el-button>
          <img slot="reference" :src="'http://localhost:3000/images/' + avator + '.png'" class="avator" alt="">
        </el-popover>
        <!-- <img :src="'http://localhost:3000/images/' + avator + '.png'" class="avator" alt=""> -->
      </div>
      <div v-else>
        <el-button type="text">注册</el-button>
        <el-button type="text" @click="toLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {logout} from '../api/index'
export default {
  name: 'vheader',
  data () {
    return {
      activeIndex: this.$route.path,
      isrouter: true,
      isLogin: false,
      userName: '',
      avator: ''
    }
  },
  methods: {
    handleSelect (tab, event) {
      if (tab === '/mainpart/myposts') {
        this.$router.push({path: tab, query: {author: this.userName}})
      } else {
        this.$router.push({path: tab})
      }
    },
    toLogin () {
      this.$router.push({path: '/signin'})
    },
    toLogout () {
      logout().then(result => {
        let res = result.data
        if (res.status === 1) {
          this.$message({
            message: res.msg,
            type: 'success',
            duration: 1000
          })
          this.isLogin = false
          this.$store.commit('LOGOUT')
          this.$router.push({path: '/mainpart/posts'})
        }
      })
    }
  },
  created () {
    // this.activeIndex = this.$route.path
  },
  watch: {
    $route () {
      this.activeIndex = this.$route.path
    }
  },
  mounted () {
    this.avator = sessionStorage.getItem('avator')
    this.userName = sessionStorage.getItem('username')
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
.avator{
  width: 30px;
  height: 30px;
  border-radius: 50%
}
.el-popover{
  min-width: 155px;
  right: -10px;
}
</style>
