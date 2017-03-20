import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router =  new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: resolve => require(['@/components/goods/Goods.vue'], resolve)
    },
    {
      path: '/sellers',
      name: 'sellers',
      component: resolve => require(['@/components/sellers/Sellers.vue'], resolve)
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: resolve => require(['@/components/ratings/Ratings.vue'], resolve)
    }
    
  ],
  linkActiveClass:'active'
})
export default router