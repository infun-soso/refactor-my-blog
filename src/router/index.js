import Vue from 'vue'
import Router from 'vue-router'

const _import_ = file => () => import('../pages/' + file + '.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/mainpart/posts'
    },
    {
      path: '/mainpart',
      component: _import_('mainpart'),
      children: [
        {
          path: 'posts',
          component: _import_('posts')
        },
        {
          path: 'create',
          meta: {login: true},
          component: _import_('create')
        },
        {
          path: 'myposts',
          component: _import_('myposts')
        }
      ]
    },
    {
      path: '/signin',
      name: 'signin',
      component: _import_('signin')
    }
  ]
})
