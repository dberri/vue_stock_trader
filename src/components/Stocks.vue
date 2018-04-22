<template>

	<div class="row">
		<stock-card v-for="stock in market" :stock="stock"></stock-card>
	</div>
	
</template>

<script>
import StockCard from './StockCard.vue'
export default {
	components: {
		'stock-card': StockCard
	},
	computed: {
		market() {
			return this.$store.getters.market;
		}
	}

}

</script>