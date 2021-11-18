<template>
	<Swiper>
		<SwiperItem v-for="(item, index) in datas" :key="index">
			<img :src="item.img" />
		</SwiperItem>
	</Swiper>
</template>

<script>
	import { Swiper, SwiperItem } from "components/common/swiper";

	export default {
		name: "HomeSwiper",
		components: {
			Swiper,
			SwiperItem
		},
		props: {
			datas: {
				type: Array,
				default() {
					return [];
				}
			}
		}
	}
</script>

<style scoped>

</style>
