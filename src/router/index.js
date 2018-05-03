import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/pages/signin'
import Posts from '@/pages/posts'
import MainPart from '@/pages/mainpart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/mainpart/posts'
    },
    {
      path: '/mainpart',
      component: MainPart,
      children: [
        {
          path: 'posts',
          component: Posts
        }
      ]
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    }
  ]
})
