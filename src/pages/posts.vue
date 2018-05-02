<template>
  <div class="posts">
    <el-container>
      <el-header>
        <el-row :gutter="24">
          <el-col :span="22">
            <div class="item-container">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="GitHub" name="first">GitHub</el-tab-pane>
                <el-tab-pane label="全部文章" name="second">全部文章</el-tab-pane>
              </el-tabs>
            </div>
            </el-col>
            <el-col :span="2">
              <div class="info-box">
                <el-button type="text">注册</el-button>
                <el-button type="text">登录</el-button>
              </div>
            </el-col>
          </el-row>
        </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.info-box {
  text-align: right;
}
</style>
