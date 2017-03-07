import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './routers'

import './assets/css/reset.css'

new Vue({
 	store,
 	router,
	render: h => h(App)
}).$mount('#app')
