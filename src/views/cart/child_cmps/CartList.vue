<template>
	<div>
		<Scroll class="cart-scroll">
			<ul>
				<li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
				<li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
				<li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
				<li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
				<li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
				<li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
			</ul>
		</Scroll>
	</div>
</template>

<script>
	import Scroll from "components/common/scroll/Scroll";

	export default {
		name: "CartList",
		components: {
			Scroll
		}
	}
</script>

<style scoped>
	.cart-scroll {
		height: calc(100vh - 93px);
	}
</style>
