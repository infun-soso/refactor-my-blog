import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/pages/signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/signin'
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    }
  ]
})
