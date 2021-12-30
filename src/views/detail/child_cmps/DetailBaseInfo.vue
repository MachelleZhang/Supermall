<template>
	<div class="detail-base-info">
		<div class="title">{{ datas.title }}</div>
		<div class="price">
			<div class="cur-price">￥{{ datas.price }}</div>
			<div class="old-price">￥{{ datas.oldPrice }}</div>
			<div class="discount-desc">
				<span>{{ datas.discountDesc }}</span>
			</div>
		</div>
		<div class="stat">
			<div>销量：{{ datas.sellCount }}</div>
			<div>收藏：{{ datas.favCount }}</div>
			<div>{{ datas.otherDesc }}</div>
		</div>
		<div class="extend-info">
			<div>
				<i class="icon-check-circle"></i>
				<span>{{ datas.backDay }}</span>
			</div>
			<div>
				<i class="icon-check-circle"></i>
				<span>{{ datas.sendHour }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailBaseInfo",
		props: {
			datas: {
				type: Object,
				default: () => {}
			}
		},
	}
</script>

<style scoped>
	.detail-base-info {
		padding: 10px;
		border-bottom: 5px solid #eeeeee;
	}

	.detail-base-info>.title {
		font-size: 18px;
		color: #464646;
		margin-bottom: 10px;
	}

	.detail-base-info>.price {
		display: flex;
		height: 30px;
		margin-bottom: 10px;
	}

	.price>.cur-price {
		color: #ff5777;
		font-size: 24px;
		line-height: 30px;
	}

	.price>.old-price {
		color: #a3a3a3;
		font-size: 14px;
		text-decoration: line-through;
		padding-top: 11px;
	}

	.price>.discount-desc {
		text-align: center;
		line-height: 30px;
	}

	.price>.discount-desc>span {
		margin-left: 10px;
		color: #ffffff;
		font-size: 14px;
		background-color: #ff5777;
		border-radius: 15px;
		padding: 0 10px;
	}

	.detail-base-info>.stat {
		display: flex;
		font-size: 12px;
		color: #a3a3a3;
		justify-content: space-between;
		padding: 10px 0;
		border-bottom: 1px solid #eeeeee;
	}

	.detail-base-info>.extend-info {
		display: flex;
		font-size: 13px;
		color: #535353;
		justify-content: space-between;
		margin-top: 10px;
		line-height: 20px;
	}

	.extend-info .icon-check-circle {
		display: inline-block;
		background-image: url("~assets/image/detail/check-circle.svg");
		background-size: 15px 15px;
		background-position: center center;
		background-repeat: no-repeat;
		height: 15px;
		width: 15px;
		vertical-align: text-top;
		margin-right: 3px;
	}
</style>
