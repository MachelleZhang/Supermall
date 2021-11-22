<template>
	<div class="goods-list-item">
		<img :src="itemData.img" />
		<div class="info">
			<p>{{ itemData.title }}</p>
			<span class="price">{{ itemData.price }}</span>
			<span class="collect">{{ itemData.cfav }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "GoodsListItem",
		props: {
			itemData: {
				type: Object,
				default() {
					return {};
				}
			}
		}
	}
</script>

<style scoped>
	.goods-list-item {
		width: 48%;
		margin-bottom: 10px;
		overflow: hidden;
	}

	.goods-list-item img {
		border-radius: 5px;
		background-color: #eee;
	}

	.info {
		font-size: 12px;
		text-align: center;
	}

	.info p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 2px 0 5px;
	}

	.info .price {
		color: var(--color-high-text);
	}

	.info .collect {
		position: relative;
		margin-left: 22px;
	}

	.info .collect::before {
		content: '';
		position: absolute;
		left: -16px;
		width: 14px;
		height: 14px;
		background: url("~assets/image/tabbar/cart.svg") 0 0/14px 14px;
	}
</style>
