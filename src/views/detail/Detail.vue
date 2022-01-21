<template>
	<div>
		<DetailNav class="detail-nav" @navTabClick="navTabClick" ref="detailNav"></DetailNav>
		<Scroll class="detail-content" ref="scroll" @scroll="scrollChange"
				:probeType="3">
			<CustomerSwiper :datas="swiperData"></CustomerSwiper>
			<DetailBaseInfo :datas="baseInfo"></DetailBaseInfo>
			<DetailShopInfo :datas="shopInfo"></DetailShopInfo>
			<DetailGoodsInfo :datas="goodsInfo" @imageLoaded="goodsImageLoaded"></DetailGoodsInfo>
			<DetailParamInfo :datas="paramInfo" ref="params"></DetailParamInfo>
			<DetailCommentInfo :datas="commentInfo" ref="comment"></DetailCommentInfo>
			<GoodsList :datas="recommendInfo" @imageLoade="goodsImageLoaded" ref="recommend"></GoodsList>
		</Scroll>
		<DetailBottomBar @addCart="addCart"></DetailBottomBar>

		<BackTop @click.native="backTopClick" v-show="bktopShow"></BackTop>
	</div>
</template>

<script>
	import BackTopMixin from "common/mixins/BackTopMixin";
	import CustomerSwiper from "components/content/customer_swiper/CustomerSwiper";
	import GoodsList from "components/content/goods_list/GoodsList";
	import Scroll from "components/common/scroll/Scroll";
	import DetailNav from "./child_cmps/DetailNav";
	import DetailBaseInfo from "./child_cmps/DetailBaseInfo";
	import DetailShopInfo from "./child_cmps/DetailShopInfo";
	import DetailGoodsInfo from "./child_cmps/DetailGoodsInfo";
	import DetailParamInfo from "./child_cmps/DetailParamInfo";
	import DetailCommentInfo from "./child_cmps/DetailCommentInfo";
	import DetailBottomBar from "./child_cmps/DetailBottomBar";
	import { getDetailData } from "network/detail_req";
	import { debounce } from "utils/utils";

	export default {
		name: "Detail",
		mixins: [BackTopMixin],
		components: {
			CustomerSwiper,
			GoodsList,
			Scroll,
			DetailNav,
			DetailBaseInfo,
			DetailShopInfo,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommentInfo,
			DetailBottomBar
		},
		data() {
			return {
				swiperData: [],
				baseInfo: {},
				shopInfo: {},
				goodsInfo: {},
				paramInfo: {},
				commentInfo: [],
				recommendInfo: [],
				offsetTopYs: [], //储存各区域偏移高度
				refreshFunc: null, //刷新可滚动区域的高度，防抖函数
				offsetTopFunc: null, //更新导航跳转区域的偏移高度，防抖函数
			}
		},
		created() {
			this.getDetailDataInterface();
			this.refreshFunc = debounce(() => {
				this.$refs.scroll.refresh();
			}, 500);
			this.offsetTopFunc = debounce(() => {
				this.offsetTopYs.push(0);
				this.offsetTopYs.push(this.$refs.params.$el.offsetTop);
				this.offsetTopYs.push(this.$refs.comment.$el.offsetTop);
				this.offsetTopYs.push(this.$refs.recommend.$el.offsetTop);
			}, 500);
		},
		methods: {
			getDetailDataInterface() {
				getDetailData().then(res => {
					this.swiperData = res.topImages;
					this.baseInfo = res.baseInfo;
					this.shopInfo = res.shopInfo;
					this.goodsInfo = res.goodsInfo;
					this.paramInfo = res.paramInfo;
					this.commentInfo = res.commentInfo;
					this.recommendInfo = res.listData;
				})
			},
			scrollChange(position) {
				//回到顶部
				this.bktopShow = -position.y > 1000;

				//导航tab的选择同步更改
				let shouldSelIndex = 0;
				this.offsetTopYs.map((offset, index) => {
					if (-position.y >= offset) {
						shouldSelIndex = index;
					}
				});
				this.$refs.detailNav.setCurrentSelectIndex(shouldSelIndex);
			},
			navTabClick(index) {
				this.$refs.scroll.scrollTo(0, -this.offsetTopYs[index], 500);
			},
			addCart() {
				let product = {};
				product.title = this.baseInfo.title;
				product.price = this.baseInfo.price;
				product.image = this.swiperData[0];
				this.$store.dispatch("ADD_CART", product);
			},
			goodsImageLoaded() {
				this.refreshFunc();
				this.offsetTopFunc();
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
		height: calc(100vh - 93px);
		position: relative;
		z-index: 9;
		background-color: #fff;
	}
</style>
