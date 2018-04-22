<template>
	<transition name="fade" method="out-in">
		<div class="col-xs-4">
			<div class="panel panel-info">
				<div class="panel-heading">
					{{ stock.name }}
					<small class="pull-right">{{ stock.qty }}</small>
				</div>
				<div class="panel-body">
					<p>Sell stocks</p>
					<div class="row">
						<div class="col-xs-9">
							<input type="number" class="form-control" v-model="qty" min="0">
						</div>
						<div class="col-xs-3">
							<button type="button" @click="removeFromMyStocks({name: stock.name, qty: qty, price: stock.price})" class="btn btn-sm btn-danger">Sell</button>
						</div>				
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	props: ['stock'],
	data() {
		return {
			qty: 0
		}
	},
	methods: mapActions([
		'removeFromMyStocks'
		])
}
</script>