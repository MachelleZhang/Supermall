<template>
	<div>
		<CartNav></CartNav>
		<CartList></CartList>
	</div>
</template>

<script>
	import CartNav from "./child_cmps/CartNav";
	import CartList from "./child_cmps/CartList";

	export default {
		name: "Cart",
		components: {
			CartNav,
			CartList
		}
	}
</script>

<style scoped>

</style>
