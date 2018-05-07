<template>
  <div class="posts">
    <el-card v-for="(item, index) in posts" :key="index" shadow="always">
      <div class="post-item">
        <router-link :to="'/posts/' + item.id">
          <img :src="'http://localhost:3000/images/' + item.avator + '.png'" alt="">
          <div class="post-title">
            {{ item.title }}
          </div>
          <div class="post-markdown">
            {{ item.md }}
          </div>
        </router-link>
      </div>
      <div class="item-detail">
        <span>author: {{ item.name }}</span>
        <span>评论: {{ item.comments }}</span>
        <span>浏览: {{ item.pv }}</span>
        <span class="moment">{{ item.moment }}</span>
      </div>
    </el-card>
    <Pagination :pageSize="10" :totalItem="500"></Pagination>
  </div>
</template>

<script>
import {getPosts} from '../api/index'
import Pagination from '../components/Pagination'
export default {
  name: 'posts',
  components: {Pagination},
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    getPosts().then(result => {
      let res = result.data
      this.posts = res.data.allPosts
    })
  }
}
</script>

<style lang="scss" scoped>

.el-card {
  margin: 10px 0
}
.post-item img {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 5px;
}
.post-title,.post-markdown {
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  margin-left: 55px;
  border-bottom: 1px solid #F2F6FC
}
.item-detail{
  margin-left: 55px;
  margin-top: 20px;
  .moment{
    float: right;
  }
}
</style>
