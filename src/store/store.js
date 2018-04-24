import Vue from 'vue'
import VueX from 'vuex'

import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

Vue.use(VueX);

export default new VueX.Store({
	modules: {
		stocks,
		portfolio
	}
});