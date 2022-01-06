<template>
	<div class="goods-list">
		<GoodsListItem v-for="(item, index) in datas" :key="index" :itemData="item" @imageLoaded="imageLoaded">
		</GoodsListItem>
	</div>
</template>

<script>
	import GoodsListItem from "./GoodsListItem";

	export default {
		name: "GoodsList",
		components: {
			GoodsListItem
		},
		props: {
			datas: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		methods: {
			imageLoaded() {
				this.$emit("imageLoaded");
			}
		}
	}
</script>

<style scoped>
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 2px;
	}
</style>
