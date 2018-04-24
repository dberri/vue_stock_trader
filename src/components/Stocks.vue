<template>

	<div class="row">
		<stock-card v-for="stock in stocks" :stock="stock"></stock-card>
	</div>
	
</template>

<script>
import StockCard from './StockCard.vue'
export default {
	components: {
		'stock-card': StockCard
	},
	computed: {
		stocks() {
			return this.$store.getters.stocks
		}
	}

}

</script>