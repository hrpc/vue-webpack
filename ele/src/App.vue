<template>
	<div id="app">
		<v-header :seller="seller"></v-header>
		<router-view></router-view>
	</div>
</template>

<script>
	import Header from '@/components/header/Header.vue'
	export default {
		name: 'app',
		components: {
			'v-header': Header
		},
		data() {
			return {
				seller: {}
			}
		},
		created() {
			this.$http.get('/api/seller').then((response) => {
				console.log(response.data)
				this.seller = response.data.data
			})
		},
		mounted() {
			this.$router.push('goods')
		}
	}
</script>

<style>

</style>