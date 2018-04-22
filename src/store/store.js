import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX);

export const store = new VueX.Store({
	state: {
		funds: 10000.00,
		portfolioValue: 0,
		market: [
			{
				'name': 'BMW',
				'price': 85,
				'qty': 1250
			},
			{
				'name': 'Apple',
				'price': 100,
				'qty': 960
			}
		],
		myStocks: [],
	},
	getters: {
		funds: (state) => {
			return state.funds;
		},
		market: (state) => {
			return state.market;
		},
		myStocks: (state) => {
			return state.myStocks;
		}
	},
	mutations: {
		insertIntoMyStocks: (state, payload) => {
			// Find object name
			let stockName = payload.name;

			// Find if the stock is inside the portfolio
			let stockToUpdate = state.myStocks.filter(stock => stock.name === stockName);

			// If stock is not in the portfolio, insert it
			if (stockToUpdate.length === 0) {
				state.myStocks.push(payload);
			} else {
				// otherwise update
				state.myStocks.forEach(obj => {
					if (obj.name === stockName) {
						obj.qty += payload.qty;
					}
				})
			}

			// Remove money from wallet
			state.funds -= payload.qty * payload.price;

			// Remove the quantity of stocks from the market
			state.market.forEach(obj => {
				if (obj.name === stockName) {
					obj.qty -= payload.qty;
				}
			})

		},
		removeFromMyStocks: (state, payload) => {

			state.myStocks.forEach(obj => {
				if (obj.name === payload.name) {
					obj.qty -= payload.qty;
				}
			})

			state.myStocks = state.myStocks.filter(obj => {
				return obj.qty !== 0;
			})

			// Remove money from wallet
			state.funds += payload.qty * payload.price;

			// Remove the quantity of stocks from the market
			state.market.forEach(obj => {
				if (obj.name === payload.name) {
					obj.qty += payload.qty;
				}
			})
		}
	},
	actions: {
		insertIntoMyStocks({commit}, payload) {
			commit('insertIntoMyStocks', payload);
		},
		removeFromMyStocks({commit}, payload) {
			commit('removeFromMyStocks', payload);
		}
	},
	modules: {
		
	}
});