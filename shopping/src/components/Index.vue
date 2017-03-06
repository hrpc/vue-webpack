<template>
	<div class="index-wrapper">
		<h1>index</h1>
		<div class="mystyles">
			<img :src="iPhone6S.activeStyleUrl" class="img-responsive" alt="">
			<div>
				<h3 v-text="iPhone6S.name"></h3>
				<p v-text="iPhone6S.desc"></p>
				<span class="default" v-for="(styleUrl,key) in iPhone6S.colorImgs" :class="{active:iPhone6S.activeStyleUrl == styleUrl}" v-on:click="changeStyle(styleUrl)">
					{{key}}
				</span>
				<div>
					<span class="default" v-for="(storage,key) in iPhone6S.storage"  v-on:click="changePrice(storage)">
						{{key}}
					</span>
				</div>
				<p v-text="iPhone6S.price"></p>
			</div>
		</div>
		
	</div>
</template>

<script>
	import { mapGetters,mapActions } from 'vuex'
	
	export default {
		computed:mapGetters([
			'iPhone6S'			
		]),
		methods:mapActions([
			'changeStyle',
			'changePrice'
		])
	}
</script>

<style scoped>
	.index-wrapper{
		width: 100%;
		padding: 10px;
		border: 1px solid greenyellow;
	}
	.index-wrapper img{
		width: 400px;
	}
	.mystyles{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.default{
		border: 1px solid gainsboro;
		cursor: pointer;
	}
	.active{
		border: 1px solid red;
	}	
</style>