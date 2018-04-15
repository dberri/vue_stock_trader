<template>
	<div class="container">
		<navbar></navbar>

		<div class="row">
			<div class="col-xs-12">
				<transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
	components: {
		Navbar
	}
}

</script>

<style>

body {
	padding: 30px;
}
/* Transitions */
.fade-enter-active, .fade-leave-active {
	transition: all .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.fade-enter {
	transform: translateX(500px);
}
.fade-leave-to {
	transform: translateX(-500px);
}

</style>
