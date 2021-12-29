    
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import article from '../pages/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/about',
      name:'About',
      component:About
    },
    {
      path:'/article/:id',
      name:'article',
      component:article
    },
    {
      path:'/latestAticle/:id',
      name:'latestAticle',
      component:Home
    },
    {
      path:'/archive/:year/:month',
      name:'archive',
      component:Home
    },
    {
      path:'/target/:id',
      name:'target',
      component:Home
    },
  ]
})