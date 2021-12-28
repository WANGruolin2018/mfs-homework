// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
import NotFound from './components/NotFound'
import About from './components/About'
import Home from './components/Home'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router,
  template:"<router-view></router-view>"
})

