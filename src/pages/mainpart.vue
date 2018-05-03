<template>
  <div id="main">
    <el-container>
      <el-header>
        <v-header></v-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import vHeader from '../components/vHeader'
export default {
  name: 'mainpart',
  components: {
    'vHeader': vHeader
  }
}
</script>

<style lang="less" scoped>

</style>
