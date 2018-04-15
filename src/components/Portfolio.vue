<template>

	<div class="row">
		<portfolio-stock-card></portfolio-stock-card>
	</div>
	
</template>

<script>
import PortfolioStockCard from './PortfolioStockCard.vue'
export default {
	components: {
		'portfolio-stock-card': PortfolioStockCard
	}

}

</script>