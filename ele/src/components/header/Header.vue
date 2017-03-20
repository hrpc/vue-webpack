<template>
	<div class="header">
		<div class="header-wrapper">
			<div class="content-wrapper">
				<div class="avatar">
					<img width="64" height="64" :src="seller.avatar"/>
				</div>
			</div>
			<div class="intro-wrapper"></div>
		</div>
		<div class="tab">
			<div class="tab-item">
				<router-link to="/goods">商品</router-link>
			</div>
			<div class="tab-item">
				<router-link to="ratings">评论</router-link>
			</div>
			<div class="tab-item">
				<router-link to="sellers">商家</router-link>
			</div>
		</div>
	</div>	
</template>

<script type="text/ecmascript-6">
	export default{
		props:['seller']
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped="scoped">
	.tab
		display:flex
		width:100%
		height:40px
		line-height:40px
		.tab-item
			text-align:center
			flex:1
			& > a
				display:block
				font-size:14px
				color:rgb(77,85,93)
				&.active
					color:rgb(240,20,20) 
				
</style>