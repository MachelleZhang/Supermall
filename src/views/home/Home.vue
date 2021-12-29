<template>
	<div id="home">
		<NavBar class="home-nav">
			<template v-slot:center>
				<div>购物街</div>
			</template>
		</NavBar>

		<TabControl class="home-tab-control" :datas="tabDatas" v-show="isFixedControl"
					@tabClick="tabClick" ref="fixedHomeTabControl">
		</TabControl>

		<Scroll class="home-content" ref="scroll" @scroll="scrollChange"
				:probeType="3" :pullUpLoad="true" @pullingUp="loadMore">
			<CustomerSwiper :datas="banners" @imageLoaded="swiperImageLoaded"></CustomerSwiper>
			<RecommendView :datas="recommends"></RecommendView>
			<FeatureView :datas="features"></FeatureView>
			<TabControl :datas="tabDatas" @tabClick="tabClick" ref="homeTabControl"></TabControl>
			<GoodsList :datas="goods"></GoodsList>
		</Scroll>

		<BackTop @click.native="backTopClick" v-show="bktopShow"></BackTop>
	</div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import Scroll from "components/common/scroll/Scroll";
	import TabControl from "components/content/tab_control/TabControl";
	import GoodsList from "components/content/goods_list/GoodsList";
	import BackTop from "components/content/back_top/BackTop";
	import CustomerSwiper from "components/content/customer_swiper/CustomerSwiper";
	import RecommendView from "./child_cmps/RecommendView";
	import FeatureView from "./child_cmps/FeatureView";
	import { getMultiData, getHomeListData } from "network/home_req";

	export default {
		name: "home",
		components: {
			NavBar,
			Scroll,
			TabControl,
			GoodsList,
			BackTop,
			CustomerSwiper,
			RecommendView,
			FeatureView
		},
		data() {
			return {
				banners: [], //轮播图数据
				recommends: [], //推荐数据
				features: [], //本周流行数据
				tabDatas: ["流行", "新款", "精选"], //tab control数据
				goods: [], //商品列表数据
				bktopShow: false, //回到顶部显示标志
				currentPage: 1,//当前页
				tabControlOffsetTop: 0, //tab-control的偏移量，用于吸顶效果
				isFixedControl: false, //tab-control是否吸顶
				saveOffsetY: 0, //滚动偏移量保存
			}
		},
		created() {
			this.getMultiDataInterface();
			this.getHomeListDataInterface();
		},
		activated() {
			this.$refs.scroll.scrollTo(0, this.saveOffsetY, 0);
			this.$refs.scroll.refresh();
		},
		deactivated() {
			this.saveOffsetY = this.$refs.scroll.getOffsetY();
		},
		methods: {
			tabClick(index) {
				this.$refs.homeTabControl.currentIndex = index;
				this.$refs.fixedHomeTabControl.currentIndex = index;
				this.getHomeListDataInterface();
			},
			backTopClick() {
				this.$refs.scroll.scrollTo(0, 0);
			},
			scrollChange(position) {
				this.bktopShow = -position.y > 1000;
				this.isFixedControl = -position.y > this.tabControlOffsetTop;
			},
			loadMore() {
				if (this.currentPage > 3) {
					console.log("没有更多数据了");
				} else {
					console.log("加载更多");
					this.currentPage += 1;
					this.getHomeListDataInterface();
				}
				setTimeout(() => {
					this.$refs.scroll.finishPullUp();
				}, 3000);
			},
			//轮播图图片加载完成事件
			swiperImageLoaded() {
				this.tabControlOffsetTop = this.$refs.homeTabControl.$el.offsetTop;
			},
			// network
			getMultiDataInterface() {
				getMultiData().then(res => {
					this.banners = res.banner;
					this.recommends = res.recommend;
					this.features = res.feature;
				});
			},
			getHomeListDataInterface() {
				getHomeListData().then(res => {
					if (this.currentPage === 1) {
						this.goods = res;
					} else {
						this.goods = [...this.goods, ...res];
					}
				});
			}
		},//methods-end
	}
</script>

<style scoped>
	#home {
		height: 100vh;
		position: relative;
	}

	.home-content {
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}

	.home-nav {
		background-color: var(--color-tint);
		color: #fff;
		/*使用原生滚动时，导航栏需要吸顶，使用better-scroll后不再需要*/
		/*position: fixed;*/
		/*left: 0;*/
		/*right: 0;*/
		/*top: 0;*/
		/*z-index: 20;*/
	}

	.home-tab-control {
		/*开启定位，z-index才能生效*/
		position: relative;
		z-index: 9;
	}
</style>
