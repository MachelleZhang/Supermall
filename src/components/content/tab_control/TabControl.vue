<template>
	<div class="tab-control">
		<div class="tab-ctrl-item" v-for="(item, index) in datas" :key="index"
			 :class="{ active: index === currentIndex }" @click="itemClick(index)">
			<span>{{ item }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TabControl",
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
				currentIndex: 0,
			}
		},
		methods: {
			itemClick(index) {
				this.currentIndex = index;
				this.$emit('tabClick', index);
			}
		}
	}
</script>

<style scoped>
	.tab-control {
		display: flex;
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 15px;
		background-color: #fff;
	}

	.tab-ctrl-item {
		flex: 1;
	}

	.tab-ctrl-item span {
		padding: 5px;
	}

	.tab-ctrl-item.active {
		color: var(--color-tint);
	}

	.tab-ctrl-item.active span {
		border-bottom: 2px solid var(--color-tint);
	}
</style>
