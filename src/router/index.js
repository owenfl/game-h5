import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '*',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../components/home'], resolve)
    },
    {
      path: '/detail',
      name: 'detail',
      component: resolve => require(['../components/detail'], resolve)
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: resolve => require(['../components/schedule'], resolve)
    },
    {
      path: '/scheduling',
      name: 'scheduling',
      component: resolve => require(['../components/scheduling'], resolve)
    },
    {
      path: '/fixtures',
      name: 'fixtures',
      component: resolve => require(['../components/fixtures'], resolve)
    },
    {
      path: '/scheduleend',
      name: 'scheduleend',
      component: resolve => require(['../components/scheduleend'], resolve)
    },


    {
      path: '/my',
      name: 'my',
      component: resolve => require(['../components/my'], resolve)
    },

    {
      path: '/subs',
      name: 'subscribe',
      component: resolve => require(['../components/subscribe'], resolve)
    },

    {
      path: '/register',
      name: 'register',
      component: resolve => require(['../common/register'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../common/login'], resolve)
    },
    {
      path: '/forget',
      name: 'forget',
      component: resolve => require(['../common/forget'], resolve)
    },
    {
      path: '/menu',
      name: 'menu',
      component: resolve => require(['../common/menu'], resolve)
    },
  ]
})