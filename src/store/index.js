import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: window.sessionStorage.getItem('token'),
    username: ''
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      state.token = data
      window.sessionStorage.setItem('token', data)
    },
    [types.LOGOUT]: (state) => {
      state.token = ''
      window.sessionStorage.removeItem('token')
    }
  },
  actions: {
    UserLogin ({commit}, data) {
      commit(types.LOGIN, data)
    },
    UserLogout ({commit}) {
      commit(types.LOGIN)
    }
  }
})

export default store
