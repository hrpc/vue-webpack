<template>
  <div id="app">
    <navbar>
    	
    </navbar>
	<router-view></router-view>
  </div>
</template>

<script>
	import Index from './components/Index.vue'
	import Navbar from './components/Nav.vue'
	
	export default {
		components:{Index,Navbar}
	}
</script>

<style>
#app{
	text-align: center;
}
</style>
