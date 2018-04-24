<template>

	<div class="row">
		<portfolio-stock-card v-for="stock in stocks" :stock="stock"></portfolio-stock-card>
	</div>
	
</template>

<script>
import {mapGetters} from 'vuex'
import PortfolioStockCard from './PortfolioStockCard.vue'

export default {
	components: {
		'portfolio-stock-card': PortfolioStockCard
	},
	computed: {
		...mapGetters({
			stocks: 'stockPortfolio'
		})
	}

}

</script>