import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: window.sessionStorage.getItem('token'),
    username: '',
    avator: ''
  },
  getters: {
    getAvator: state => state.avator
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      state.token = data
      window.sessionStorage.setItem('token', data)
    },
    [types.AVATOR]: (state, data) => {
      state.avator = data
      window.sessionStorage.setItem('avator', data)
    },
    [types.USERNAME]: (state, data) => {
      state.username = data
      window.sessionStorage.setItem('username', data)
    },
    [types.LOGOUT]: (state) => {
      state.token = ''
      state.username = ''
      state.avator = ''
      window.sessionStorage.removeItem('token')
      window.sessionStorage.removeItem('username')
      window.sessionStorage.removeItem('avator')
    }
  },
  actions: {
    UserLogin ({commit}, data) {
      commit(types.LOGIN, data)
    },
    UserNameLogin ({commit}, data) {
      commit(types.USERNAME, data)
    },
    UserLogout ({commit}) {
      commit(types.LOGOUT)
    }
  }
})

export default store
