import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/pages/signin'
import Posts from '@/pages/posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/posts'
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    }
  ]
})
