<template>
	<div>
		<NavBar class="home-nav">
			<template v-slot:center>
				<div>购物街</div>
			</template>
		</NavBar>
		<Swiper :interval="1000">
			<SwiperItem>
				<img src="~assets/image/tabbar/home.svg" />
			</SwiperItem>
			<SwiperItem>
				<img src="~assets/image/tabbar/cart.svg" />
			</SwiperItem>
			<SwiperItem>
				<img src="~assets/image/tabbar/category.svg" />
			</SwiperItem>
			<SwiperItem>
				<img src="~assets/image/tabbar/profile.svg" />
			</SwiperItem>
		</Swiper>

	</div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import { Swiper, SwiperItem } from "components/common/swiper";

	export default {
		name: "home",
		components: {
			NavBar,
			Swiper,
			SwiperItem
		}
	}
</script>

<style scoped>
	.home-nav {
		background-color: var(--color-tint);
		color: #fff;
	}
</style>
