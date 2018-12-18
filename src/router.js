import Vue from 'vue'
import Router from 'vue-router'

import readArticle from '@/views/readArticle'
import goHome from '@/views/goHome'
import seePresentation from '@/views/seePresentation'

// falta este
import openMenu from '@/views/openMenu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: goHome
    },
    {
      path: '/article/:date/:title',
      name: 'article',
      component: readArticle
    },
    {
      path: '/menu',
      name: 'menu',
      component: openMenu
    },
    {
      path: '/presentation',
      name: 'presentation',
      component: seePresentation
    },
    {
      path: '/',
      name: 'presentation',
      component: seePresentation
    },

    /*
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
    */
  ]
})
