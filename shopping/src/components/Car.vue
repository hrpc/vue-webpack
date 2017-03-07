<template>
	<div>
		<p v-text="car.length"></p>
		<p v-for="item in car">
			<p>{{item.price}}</p>
		</p>
	</div>
</template>

<script>
	import { mapGetters,mapActions } from 'vuex'
	export default {
		computed:mapGetters([
			'car'
		]),
		methods:mapActions([
			'changeStyle',
			'changePrice',
			'addItem'
		])
	}
</script>

<style>
</style>