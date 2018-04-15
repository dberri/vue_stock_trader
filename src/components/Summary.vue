<template>
	<div class="summary">
		<h1>Trade or view your portfolio</h1>
		<p>You may Save & Load your Data</p>
		<p>Click on 'End Day' to begin a new Day!</p>
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