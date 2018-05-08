import store from '../store'
import Vue from 'vue'
import router from './index'

router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    if (store.state.username) {
      next()
    } else {
      Vue.prototype.$message.error('请先登录')
      router.replace({ // 跳转到登录页面
        path: '/signin',
        query: { redirect: to.path } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
