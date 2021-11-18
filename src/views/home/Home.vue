<template>
	<div>
		<NavBar class="home-nav">
			<template v-slot:center>
				<div>购物街</div>
			</template>
		</NavBar>
		<HomeSwiper :datas="banners"></HomeSwiper>
	</div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import HomeSwiper from "./child_cmps/HomeSwiper";
	import { getMultiData } from "network/home_req";

	export default {
		name: "home",
		components: {
			NavBar,
			HomeSwiper
		},
		data() {
			return {
				banners: [], //轮播图数据
			}
		},
		created() {
			getMultiData().then(res => {
				console.log(res);
				this.banners = res.banner;
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
