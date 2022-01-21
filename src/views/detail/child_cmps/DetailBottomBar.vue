<template>
	<div class="detail-bottom-bar">
		<div class="left-block">
			<div>
				<i class="bt-icon img-service"></i>
				<div class="bt-title">客服</div>
			</div>
			<div>
				<i class="bt-icon img-shop"></i>
				<div class="bt-title">店铺</div>
			</div>
			<div>
				<i class="bt-icon img-fav"></i>
				<div class="bt-title">收藏</div>
			</div>
		</div>
		<div class="add-cart" @click="addToCart">
			<span>加入购物车</span>
		</div>
		<div class="buy">
			<span>购买</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailBottomBar",
		methods: {
			addToCart() {
				this.$emit("addCart");
			}
		}
	}
</script>

<style scoped>
	.detail-bottom-bar {
		background-color: #ffffff;
		height: 49px;
		position: relative;
		z-index: 12;
		box-shadow: 0 -1px 2px #ccc;
		display: flex;
		text-align: center;
	}

	.detail-bottom-bar>.add-cart {
		width: 25%;
		font-size: 12px;
		line-height: 49px;
		color: #5a5c60;
		background-color: #ffd933;
	}

	.detail-bottom-bar>.buy {
		width: 25%;
		font-size: 12px;
		line-height: 49px;
		color: #ffffff;
		background-color: #ff6d8e;
	}

	.detail-bottom-bar>.left-block {
		width: 50%;
		display: flex;
		justify-content: space-evenly;
	}

	.detail-bottom-bar>.left-block .bt-title {
		height: 20px;
		line-height: 20px;
		font-size: 12px;
		color: #5a5c60;
	}

	.detail-bottom-bar>.left-block .bt-icon {
		display: inline-block;
		background-size: 20px 20px;
		background-position: center center;
		background-repeat: no-repeat;
		height: 20px;
		width: 20px;
		margin-top: 5px;
	}

	.detail-bottom-bar>.left-block .img-service {
		background-image: url("~assets/image/detail/service.png");
	}

	.detail-bottom-bar>.left-block .img-shop {
		background-image: url("~assets/image/detail/shop.png");
	}

	.detail-bottom-bar>.left-block .img-fav {
		background-image: url("~assets/image/detail/star.png");
	}
</style>
