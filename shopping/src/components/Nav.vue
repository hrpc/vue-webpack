<template>
	<div class="nav-wrapper">
		<router-link to="/" class="nav">iphone6s</router-link>
		<router-link to="/car" class="nav">car<span>{{car.length}}</span></router-link>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		computed:mapGetters([
			'car'
		]),
	}
</script>

<style scoped>
	.nav-wrapper{
		width: 100%;
		height: 100px;
		border: 1px solid red;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.nav-wrapper .nav{
		width: 100px;
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
	}
</style>