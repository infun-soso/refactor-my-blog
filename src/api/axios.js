import axios from 'axios'
import store from '../store'
import router from '../router'

const instance = axios.create({
  baseURL: '',
  timeout: 5000
})

instance.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'
// 拦截请求
instance.interceptors.request.use(config => {
  // 每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
  if (store.state.token) {
    console.log('拦截验证token')
    config.headers.Authorization = `Bearer ${store.state.token}`
  }
  return config
},
err => {
  return Promise.reject(err)
})

// respone拦截器
instance.interceptors.response.use(
  response => {
    return response
  },
  error => { // 默认除了2XX之外的都是错误的，就会走这里
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log('token过期')
          store.dispatch('UserLogout') // 可能是token过期，清除它
          router.replace({ // 跳转到登录页面
            path: '/signin',
            query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
    }
    return Promise.reject(error.response)
  }
)

export default instance
