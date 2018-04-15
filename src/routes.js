import Summary from './components/Summary.vue';
import Portfolio from './components/Portfolio.vue';
import Stocks from './components/Stocks.vue';

export const routes = [
	{
		path: '', 
		name: 'home',
		components: {
			default: Summary
		}
	},
	{
		path: '/portfolio',
		name: 'portfolio',
		components: {
			default: Portfolio
		}
	},
	{
		path: '/stocks',
		name: 'stocks',
		components: {
			default: Stocks
		}
	}
]