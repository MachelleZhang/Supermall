<template>
	<Swiper class="customer-swiper">
		<SwiperItem v-for="(item, index) in datas" :key="index">
			<img :src="item.img" @load="imageLoaded" />
		</SwiperItem>
	</Swiper>
</template>

<script>
	import { Swiper, SwiperItem } from "components/common/swiper";

	export default {
		name: "CustomerSwiper",
		components: {
			Swiper,
			SwiperItem
		},
		props: {
			datas: {
				type: Array,
				default: () => []
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
	.customer-swiper {
		height: 300px;
	}
</style>
