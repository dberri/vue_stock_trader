import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX);

export const store = {
	state: {
		funds: 10000.00,
		portfolioValue: 0,
		stocks: {},
	},
	getters: {
		funds: (state) => {
			return state.funds;
		}
	},
	mutations: {
		
	},
	actions: {
		
	},
	modules: {
		
	}
}