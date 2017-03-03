import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/home.vue'
import Search from './components/search.vue'

Vue.use(VueRouter);

//定义路由
const routes = [
	{
		path:'/',
		component:Home
	},
	{
		path:'/home',
		component:Home
	},{
		path:'/search',
		component:Search
	}
];
//创建router实例，然后穿routes配置
const router = new VueRouter({
	routes:routes
});

//创建和挂载根实例，要通过router配置参数注入路由
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
