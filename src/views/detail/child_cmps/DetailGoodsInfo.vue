<!--详情页-商品信息-->
<template>
	<div class="detail-goods-info">
		<div>
			<div class="top-line"></div>
			<div class="desc">{{ datas.desc }}</div>
			<div class="bottom-line"></div>
		</div>
		<div v-for="item in datas.images">
			<img :src="item"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailGoodsInfo",
		props: {
			datas: {
				type: Object,
				default: () => {}
			}
		},
	}
</script>

<style scoped>
	.detail-goods-info {
		margin-top: 10px;
	}

	.detail-goods-info .top-line {
		height: 1px;
		width: 100px;
		background-color: #000;
		position: relative;
		top: 10px;
		left: 10px;
	}

	.detail-goods-info .top-line::before {
		content: "";
		height: 4px;
		width: 4px;
		position: absolute;
		top: -4px;
		left: 0;
		background-color: #000;
	}

	.detail-goods-info .desc {
		font-size: 12px;
		padding: 20px 10px;
	}

	.detail-goods-info .bottom-line {
		height: 1px;
		width: 100px;
		background-color: #000;
		position: relative;
		top: -10px;
		left: calc(100% - 110px)
	}

	.detail-goods-info .bottom-line::before {
		content: "";
		height: 4px;
		width: 4px;
		position: absolute;
		top: -4px;
		right: 0;
		background-color: #000;
	}
</style>
