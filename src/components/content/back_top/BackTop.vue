<template>
	<div class="back-top">
		<img src="~assets/image/common/arrow-up.svg" />
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
		bottom: 50px;
	}

	.back-top img {
		width: 32px;
		height: 32px;
		background-color: #fff;
		border-radius: 16px;
	}
</style>
