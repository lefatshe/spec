import Vue from 'vue'
import Router from 'vue-router'
import BaseVue from '@/components/base'
import MainPage from '@/components/main'
import DefaultPage from '@/components/default'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/locked',
      name: 'DefaultPage',
      component: DefaultPage
    }
  ]
})
