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
  // Do something before the request send
  return config
}, error => {
  return Promise.reject(error)
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
          store.dispatch('UserLogout') // 可能是token过期，清除它
          router.replace({ // 跳转到登录页面
            path: 'login',
            query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
    }
    return Promise.reject(error.response)
  }
)

export default instance
