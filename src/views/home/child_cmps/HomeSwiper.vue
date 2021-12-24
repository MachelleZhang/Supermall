<template>
	<Swiper>
		<SwiperItem v-for="(item, index) in datas" :key="index">
			<img :src="item.img" @load="imageLoaded" />
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
		},
		data() {
			return {
				isImageLoaded: false,
			}
		},
		methods: {
			imageLoaded() {
				if (!this.isImageLoaded) {
					this.isImageLoaded = true;
					this.$emit("imageLoaded");
				}
			}
		}
	}
</script>

<style scoped>

</style>
