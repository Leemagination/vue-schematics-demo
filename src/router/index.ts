import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect:'/default'
  },
  {
    path: '/default',
    name: 'default',
    component: () => import(/* webpackChunkName: "default" */ '../views/defaultPage/defaultPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
