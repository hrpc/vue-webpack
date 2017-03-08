<template>
	<div class="wrapper">
		<input type="text" v-model="user.name"/>
		<input type="password" name="password" id="password" v-model="user.password"/>
		<input type="password" name="password_r" id="password_r" v-model="user.password_r"/>
		<input type="submit" value="submit" @click="reg()"/>
		<p v-for="user in users">
			<span>user.name</span>
		</p>
	</div>
</template>

<script>
	import { mapGetters,mapActions } from 'vuex'
	export default {
		data (){
			return{
				user:{
					name:'',
					password:'',
					password_r:''
				}
			}
		},
		computed:{
			...mapGetters([
				'users'
			])
		},
		methods:{
//			...mapActions{[
//				'regInfo'
//			]},
			reg (){
				console.log("1")
				this.$store.dispatch('regInfo', this.user)
			}
		}
	}
</script>

<style>
</style>