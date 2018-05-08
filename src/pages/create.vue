<template>
  <div class="create">
    <h3 class="label">标题：</h3>
    <el-input
      placeholder="请输入标题"
      v-model="title"
      clearable>
    </el-input>
    <h3 class="label">内容：</h3>
    <el-input
      type="textarea"
      :rows="16"
      placeholder="请输入内容"
      v-model="content">
    </el-input>

    <el-button class="submit" @click="handleSubmit">发表</el-button>
  </div>
</template>

<script>
import {create} from '../api/index'
export default {
  name: 'create',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    handleSubmit () {
      create(this.title, this.content).then(result => {
        let res = result.data
        if (res.status === 1) {
          this.$message({
            message: res.msg,
            type: 'success',
            duration: 1500
          })
          this.$router.push({path: '/mainpart/posts'})
        } else {
          this.$message({
            message: res.msg,
            type: 'error',
            duration: 1500
          })
        }
      })
    }
  }
}
</script>

<style>
.submit{
  margin-top: 10px
}
.label{
  margin: 10px 0;
  font-weight: 700
}
</style>
