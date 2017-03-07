import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import Car from './components/Car.vue'

Vue.use(Router)

export default new Router({
	routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
  ]
})
