<template>
	<div class="recommend">
		<div class="recommend-item" v-for="(item, index) in datas" :key="index">
			<a :href="item.link">
				<img :src="item.img" />
				<div>{{ item.title }}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "RecommendView",
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
	.recommend {
		display: flex;
		padding: 10px 0 20px;
		border-bottom: 10px solid #eee;
	}

	.recommend-item {
		flex: 1;
		font-size: var(--font-size);
		text-align: center;
	}

	.recommend-item img {
		margin: 5px 10px 10px;
		border-radius: 50%;
		background-color: var(--color-tint);
	 }
</style>
