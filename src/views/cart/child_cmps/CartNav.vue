<template>
	<div>
		<NavBar class="cart-nav">
			<template v-slot:center>
				购物车({{ cartLength }})
			</template>
		</NavBar>
	</div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import { mapGetters } from "vuex";

	export default {
		name: "CartNav",
		components: {
			NavBar
		},
		computed: {
			...mapGetters(["cartLength"])
		}
	}
</script>

<style scoped>
	.cart-nav {
		position: relative;
		background-color: var(--color-tint);
		color: #ffffff;
		z-index: 11;
	}
</style>
