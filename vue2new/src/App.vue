<template>
  <div id="app">
  		<navBar></navBar>
  		<div class="navbar-2">
  		</div>
  		<div class="app-body">
  			<router-view></router-view>
  			<sideBar></sideBar>
  		</div>
  </div>
</template>

<script>
	//引入组件在App.vue里组装
	import navBar from './components/navBar.vue';
	import sideBar from './components/sideBar.vue';
	
	export default {
		components:{navBar,sideBar}
	}
</script>

<style>
	*{
		box-sizing: border-box;
	}
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	  position: relative;
	}
	
	h1, h2 {
	  font-weight: normal;
	}
	
	ul {
	  list-style-type: none;
	  padding: 0;
	}
	
	li {
	  display: inline-block;
	  margin: 0 10px;
	}
	
	a {
	  color: #42b983;
	}
	.app-body{
		display: flex;
	}
	.navbar-2{
		height: 100px;
		width: 10px;
	}
</style>
