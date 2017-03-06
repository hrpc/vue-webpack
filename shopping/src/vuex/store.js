import Vue from 'vue'
import Vuex from 'vuex'
// vuex/modules/index.js
import * as types from './mutation-types'
import getters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		iPhone6S: {
			name: 'Apple/苹果 iPhone 6S',
			desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
			price: '¥5288 - ¥6888',
			isSelected: true,
			colorImgs:{
				'银色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
				'深空灰色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
				'金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
				'玫瑰金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
			},
			activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
			storage: {
				'16GB': 5288,
				'64GB': 6088,
				'128GB': 6888
			}
		}
	},
	actions: {
		changeStyle:function({ commit }, styleUrl){
			commit('CHANGE_STYLE',styleUrl)
		},
		changePrice:function({ commit }, price){
			commit('CHANGE_PRICE',price)
		}
	},
	mutations: {
		[types.CHANGE_STYLE] (state,styleUrl){
			state.iPhone6S.activeStyleUrl = styleUrl
		},
		[types.CHANGE_PRICE] (state,price){
			state.iPhone6S.price = price
		}
	},
	getters
})