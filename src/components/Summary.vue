<template>
	<div class="summary">
		<h1>Trade or view your portfolio</h1>
		<h6>You may Save & Load your Data</h6>
		<h6>Click on 'End Day' to begin a new Day!</h6>
		<hr>
		<h4><b>Your funds: {{ funds }}</b></h4>
	</div>
</template>

<script>
	export default {
		computed: {
			funds() {
        		return this.$store.getters.funds;
        	}
		}
	}
</script>

<style scoped>
	.summary {
		padding: 20px;
		border: 1px solid black;
	}
</style>