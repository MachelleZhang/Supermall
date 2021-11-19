<template>
	<div class="feature">
		<div class="feature-title">本周流行</div>
		<div class="feature-item" v-for="(item, index) in datas" :key="index">
			<a :href="item.link">
				<img :src="item.img" />
				<div>{{ item.title }}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "FeatureView",
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
	.feature {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 10px;
	}

	.feature-title {
		text-align: center;
		font-size: 24px;
		width: 100%;
		margin: 10px 0;
	}

	.feature-item {
		flex: 1;
		font-size: 12px;
		width: 25%;
		min-width: 25%;
		max-width: 25%;
		text-align: center;
		margin-bottom: 10px;
	}

	.feature-item img {
		margin: 5px 10px 5px;
		border-radius: 50%;
		background-color: darkorange;
	}
</style>
