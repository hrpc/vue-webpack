<template>
	<div class="navbar">
		<h3>{{msg}}</h3>
		<router-link to="/">gen</router-link>
  		<router-link to="/home">home</router-link>
  		<router-link to="/search">search</router-link>
	</div>
</template>

<script>
	export default {
		data () {
		    return {
		      msg: '我是头部导航'
		    }
		}
	}
</script>

<style>
	.navbar{
		width: 100%;
		height: 100px;
		border: 1px solid red;
		position: fixed;
		top: 0;
	}
</style>