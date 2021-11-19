<template>
	<div id="home">
		<NavBar class="home-nav">
			<template v-slot:center>
				<div>购物街</div>
			</template>
		</NavBar>
		<HomeSwiper :datas="banners"></HomeSwiper>
		<RecommendView :datas="recommends"></RecommendView>
		<FeatureView :datas="features"></FeatureView>
		<TabControl class="home-tab-control" :datas="tabDatas"></TabControl>
		<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li><li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li><li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li><li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li><li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li><li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li><li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li><li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li><li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li><li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li><li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li><li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import TabControl from "components/content/tab_control/TabControl";
	import HomeSwiper from "./child_cmps/HomeSwiper";
	import RecommendView from "./child_cmps/RecommendView";
	import FeatureView from "./child_cmps/FeatureView";
	import { getMultiData } from "network/home_req";

	export default {
		name: "home",
		components: {
			NavBar,
			TabControl,
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
			}
		},
		created() {
			getMultiData().then(res => {
				this.banners = res.banner;
				this.recommends = res.recommend;
				this.features = res.feature;
			});
		},
	}
</script>

<style scoped>
	#home {
		padding-top: 44px;
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
