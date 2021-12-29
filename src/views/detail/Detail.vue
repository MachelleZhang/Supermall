<template>
	<div>
		<DetailNav></DetailNav>
		<CustomerSwiper :datas="swiperData"></CustomerSwiper>
		<DetailBaseInfo :datas="baseInfo"></DetailBaseInfo>
	</div>
</template>

<script>
	import CustomerSwiper from "components/content/customer_swiper/CustomerSwiper";
	import DetailNav from "./child_cmps/DetailNav";
	import DetailBaseInfo from "./child_cmps/DetailBaseInfo";
	import { getDetailData } from "network/detail_req";

	export default {
		name: "Detail",
		components: {
			CustomerSwiper,
			DetailNav,
			DetailBaseInfo
		},
		data() {
			return {
				swiperData: [],
				baseInfo: {}
			}
		},
		created() {
			this.getDetailDataInterface();
		},
		methods: {
			getDetailDataInterface() {
				getDetailData().then(res => {
					this.swiperData = res.topImages;
					this.baseInfo = res.baseInfo;
				})
			}
		}
	}
</script>

<style scoped>

</style>
