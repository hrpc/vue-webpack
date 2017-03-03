import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
	reList = [],//搜索结果列表
	likeList = []//订阅列表
};

export default new Vuex.Store({
	state,
	mutations,
	actions
})
