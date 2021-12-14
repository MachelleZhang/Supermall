<template>
	<div id="home">
		<NavBar class="home-nav">
			<template v-slot:center>
				<div>购物街</div>
			</template>
		</NavBar>
		<Scroll class="home-content" ref="scroll" @scroll="scrollChange" :pullUpLoad="true" @pullingUp="loadMore">
			<HomeSwiper :datas="banners"></HomeSwiper>
			<RecommendView :datas="recommends"></RecommendView>
			<FeatureView :datas="features"></FeatureView>
			<TabControl class="home-tab-control" :datas="tabDatas" @tabClick="tabClick"></TabControl>
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
	import HomeSwiper from "./child_cmps/HomeSwiper";
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
			HomeSwiper,
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
			}
		},
		created() {
			this.getMultiDataInterface();
			this.getHomeListDataInterface();
		},
		methods: {
			tabClick() {
				this.getHomeListDataInterface();
			},
			backTopClick() {
				this.$refs.scroll.scrollTo(0, 0);
			},
			scrollChange(position) {
				this.bktopShow = -position.y > 1000;
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
		}
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
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 20;
	}

	.home-tab-control {
		position: sticky;
		top: 44px;
	}
</style>
