<template>
	<NavBar>
		<template v-slot:left>
			<div class="back-img" @click="backClick">
				<img src="~assets/image/common/back-arrow.png">
			</div>
		</template>
		<template v-slot:center>
			<div class="nav-tab-control">
				<TabControl :datas="tabDatas" :useOnNav="true"></TabControl>
			</div>
		</template>
	</NavBar>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import TabControl from "components/content/tab_control/TabControl";

	export default {
		name: "DetailNav",
		components: {
			NavBar,
			TabControl
		},
		data() {
			return {
				tabDatas: ['商品', '参数', '评论', '推荐']
			}
		},
		methods: {
			backClick() {
				this.$router.back();
			}
		}
	}
</script>

<style scoped>
	.back-img {
		padding-top: 7px;
		height: 37px;
	}

	.back-img>img {
		width: 26px;
		height: 26px;
	}

	.nav-tab-control {
		padding-top: 2px;
	}
</style>
