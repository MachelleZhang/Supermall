<!--详情页-店铺信息-->
<template>
	<div class="detail-shop-info">
		<div class="header">
			<div class="avatar">
				<img :src="datas.shopAvatar"/>
			</div>
			<div class="title">{{ datas.shopTitle }}</div>
		</div>
		<div class="middle">
			<div class="middle-left">
				<div class="left-item">
					<div class="item-num">{{ datas.totalSellCount }}万</div>
					<div class="item-title">总销量</div>
				</div>
				<div class="left-item">
					<div class="item-num">{{ datas.totalGoods }}</div>
					<div class="item-title">全部宝贝</div>
				</div>
			</div>
			<div class="middle-line"></div>
			<div class="middle-right">
				<div v-for="item in datas.comment">
					<span>{{ item.name + '：' }}</span>
					<span :class="item.isBetter ? 'color-red':'color-green'">{{ item.score }}</span>
					<span :class="item.isBetter ? 'high-score':'low-score'">{{ item.isBetter ? "高" : "低" }}</span>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div class="enter-shop">进店逛逛</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailShopInfo",
		props: {
			datas: {
				type: Object,
				default: () => {}
			}
		},
	}
</script>

<style scoped>
	.detail-shop-info {
		padding: 20px 10px;
		border-bottom: 5px solid #eeeeee;
	}

	.detail-shop-info>.header {
		display: flex;
	}

	.detail-shop-info>.header .avatar {
		height: 40px;
		width: 40px;
		border-radius: 20px;
		border: 1px solid #eeeeee;
	}

	.detail-shop-info>.header .title {
		font-size: 16px;
		line-height: 40px;
		margin-left: 5px;
	}

	.detail-shop-info>.middle {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 10px 0;
	}

	.detail-shop-info>.middle .middle-left {
		width: 46%;
		text-align: center;
		display: flex;
		justify-content: space-around;
	}

	.detail-shop-info>.middle .middle-line {
		width: 1px;
		height: 40px;
		background-color: #eeeeee;
	}

	.detail-shop-info>.middle .middle-right {
		width: 46%;
		text-align: center;
		font-size: 12px;
	}

	.middle-left .left-item .item-num {
		font-size: 14px;
	}

	.middle-left .left-item .item-title {
		font-size: 12px;
		margin-top: 5px;
	}

	.middle-right div+div {
		margin-top: 8px;
	}

	.middle-right .color-red {
		color: red;
	}

	.middle-right .color-green {
		color: green;
	}

	.middle-right .high-score {
		margin-left: 10px;
		background-color: red;
		color: #ffffff;
	}

	.middle-right .low-score {
		margin-left: 10px;
		background-color: green;
		color: #ffffff;
	}

	.detail-shop-info>.bottom {
		display: flex;
		justify-content: center;
		margin-top: 10px;
	}

	.detail-shop-info>.bottom>.enter-shop {
		height: 24px;
		width: 100px;
		color: #5a5c60;
		background-color: #f1f3fa;
		line-height: 24px;
		font-size: 12px;
		border-radius: 5px;
		text-align: center;
	}
</style>
