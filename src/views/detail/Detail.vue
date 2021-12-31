<template>
	<div>
		<DetailNav class="detail-nav"></DetailNav>
		<Scroll class="detail-content" ref="scroll">
			<CustomerSwiper :datas="swiperData"></CustomerSwiper>
			<DetailBaseInfo :datas="baseInfo"></DetailBaseInfo>
			<DetailShopInfo :datas="shopInfo"></DetailShopInfo>
			<DetailGoodsInfo :datas="goodsInfo" @imageLoaded="goodsImageLoaded"></DetailGoodsInfo>
			<DetailParamInfo :datas="paramInfo"></DetailParamInfo>
		</Scroll>
	</div>
</template>

<script>
	import CustomerSwiper from "components/content/customer_swiper/CustomerSwiper";
	import Scroll from "components/common/scroll/Scroll";
	import DetailNav from "./child_cmps/DetailNav";
	import DetailBaseInfo from "./child_cmps/DetailBaseInfo";
	import DetailShopInfo from "./child_cmps/DetailShopInfo";
	import DetailGoodsInfo from "./child_cmps/DetailGoodsInfo";
	import DetailParamInfo from "./child_cmps/DetailParamInfo";
	import { getDetailData } from "network/detail_req";

	export default {
		name: "Detail",
		components: {
			CustomerSwiper,
			Scroll,
			DetailNav,
			DetailBaseInfo,
			DetailShopInfo,
			DetailGoodsInfo,
			DetailParamInfo
		},
		data() {
			return {
				swiperData: [],
				baseInfo: {},
				shopInfo: {},
				goodsInfo: {},
				paramInfo: {}
			}
		},
		created() {
			this.getDetailDataInterface();
		},
		methods: {
			getDetailDataInterface() {
				getDetailData().then(res => {
					console.log(res);
					this.swiperData = res.topImages;
					this.baseInfo = res.baseInfo;
					this.shopInfo = res.shopInfo;
					this.goodsInfo = res.goodsInfo;
					this.paramInfo = res.paramInfo;
				})
			},
			goodsImageLoaded() {
				this.$refs.scroll.refresh();
			}
		}
	}
</script>

<style scoped>
	.detail-nav {
		position: relative;
		z-index: 10;
		background-color: #fff;
	}

	.detail-content {
		height: calc(100vh - 44px);
		position: relative;
		z-index: 9;
		background-color: #fff;
	}
</style>
