<template>
	<div class="tab-control" :class="{ 'nav-font-size': useOnNav }">
		<div class="tab-ctrl-item" v-for="(item, index) in datas" :key="index"
			 :class="{ active: index === currentIndex }" @click="itemClick(index)">
			<span :class="{ 'item-text': !useOnNav }">{{ item }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TabControl",
		props: {
			datas: {
				type: Array,
				default: () => []
			},
			//是否用于nav-bar，区别在于样式
			useOnNav: {
				type: Boolean,
				default: false
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

	.tab-control.nav-font-size {
		font-size: 12px;
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

	.tab-ctrl-item.active .item-text {
		border-bottom: 2px solid var(--color-tint);
	}
</style>
