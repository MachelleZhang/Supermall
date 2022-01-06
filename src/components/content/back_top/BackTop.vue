<template>
	<div class="back-top">
		<img src="~assets/image/common/arrow-up.png" />
	</div>
</template>

<script>
	export default {
		name: "BackTop"
	}
</script>

<style scoped>
	.back-top {
		position: fixed;
		right: 8px;
		bottom: 60px;
		z-index: 9999;
		width: 32px;
		height: 32px;
		border-radius: 16px;
		box-shadow: 2px 2px 8px #ddd;
	}

	.back-top img {
		width: 32px;
		height: 32px;
	}
</style>
