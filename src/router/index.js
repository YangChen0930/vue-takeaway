import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/goods/goods.vue'], resolve)
    },
    {
      path: '/goods',
      component: resolve => require(['../components/goods/goods.vue'], resolve)
    },
    {
      path: '/ratings',
      component: resolve => require(['../components/ratings/ratings.vue'], resolve)
    },
    {
      path: '/seller',
      component: resolve => require(['../components/seller/seller.vue'], resolve)
    }
  ]
})
