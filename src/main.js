// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SvgIcon from '@/components/SvgIcon'
import App from './App'
import router from './router/permission.js'
import store from './store'

Vue.use(ElementUI)
Vue.component('svg-icon', SvgIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
