import Vue from 'vue'
import Router from 'vue-router'

import HomeContainer from '@/containers/Home.container.vue'
import ArticleContainer from '@/containers/Article.container.vue'
import Menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeContainer
    },
    {
      path: '/article/:date/:title',
      name: 'article',
      component: ArticleContainer
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
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
