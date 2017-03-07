<template>
	<div class="index-wrapper">
		<div class="mystyles">
			<img :src="iPhone6S.activeStyleUrl" class="img-responsive" alt="">
			<div>
				<h3 v-text="iPhone6S.name"></h3>
				<p v-text="iPhone6S.desc"></p>
				<span class="default" v-for="(styleUrl,key) in iPhone6S.colorImgs" :class="{active:iPhone6S.activeStyleUrl == styleUrl}" v-on:click="changeStyle(styleUrl)">
					{{key}}
				</span>
				<div>
					<span class="default" v-for="(storage,key) in iPhone6S.storage" 
					 v-on:click="changePrice(storage)">
						{{key}}
					</span>
				</div>
				<p v-text="iPhone6S.price"></p>
				<button @click="addItem()">加入购物车</button>
				<div v-if="car.length != 0">
					<p v-for="item in car">
						<p v-text="item.price"></p>
					</p>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import { mapGetters,mapActions } from 'vuex'
	export default {
		computed:mapGetters([
			'iPhone6S',
			'car'
		]),
		methods:mapActions([
			'changeStyle',
			'changePrice',
			'addItem'
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
		width: 300px;
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