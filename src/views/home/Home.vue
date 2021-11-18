<template>
	<div>
		<NavBar class="home-nav">
			<template v-slot:center>
				<div>购物街</div>
			</template>
		</NavBar>
		<HomeSwiper :datas="banners"></HomeSwiper>
		<RecommendView :datas="recommends"></RecommendView>
	</div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import HomeSwiper from "./child_cmps/HomeSwiper";
	import RecommendView from "./child_cmps/RecommendView";
	import { getMultiData } from "network/home_req";

	export default {
		name: "home",
		components: {
			NavBar,
			HomeSwiper,
			RecommendView
		},
		data() {
			return {
				banners: [], //轮播图数据
				recommends: [], //推荐数据
			}
		},
		created() {
			getMultiData().then(res => {
				console.log(res);
				this.banners = res.banner;
				this.recommends = res.recommend;
			});
		},
	}
</script>

<style scoped>
	.home-nav {
		background-color: var(--color-tint);
		color: #fff;
	}
</style>
