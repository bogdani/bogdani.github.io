import Vue from 'vue'
import Router from 'vue-router'

import Hero from './views/Hero'
import Web from './views/Web'
import Logo from './views/Logo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hero',
      component: Hero
    },
    {
      path: '/web',
      name: 'Web',
      component: Web
    },
    {
      path: '/logo',
      name: 'Logo',
      component: Logo
    },
    {
      path: '*',
      redirect: '/'
  	}
  ],
})
