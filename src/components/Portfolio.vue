<template>

	<div class="row">
		<portfolio-stock-card v-for="stock in myStocks" :stock="stock"></portfolio-stock-card>
	</div>
	
</template>

<script>
import PortfolioStockCard from './PortfolioStockCard.vue'
export default {
	components: {
		'portfolio-stock-card': PortfolioStockCard
	},
	computed: {
		myStocks() {
			return this.$store.getters.myStocks;
		}
	}

}

</script>