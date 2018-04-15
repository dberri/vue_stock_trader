<template>

	<div class="row">
		<stock-card></stock-card>
	</div>
	
</template>

<script>
import StockCard from './StockCard.vue'
export default {
	components: {
		'stock-card': StockCard
	}

}

</script>