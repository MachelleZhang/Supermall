<template>
	<div class="tab-bar-item" @click="clickAction">
		<div v-show="!active">
			<slot name="item-icon"></slot>
		</div>
		<div v-show="active" class="active">
			<slot name="item-icon-active"></slot>
		</div>
		<div class="title" :style="activeStyle">{{ title }}</div>
	</div>
</template>

<script>
	export default {
		name: "TabbarItem",
		props: {
			title: String,
			path: String,
			activeColor: {
				type: String,
				default: '#ff8198'
			}
		},
		data() {
			return {
			}
		},
		computed: {
			active() {
				return this.$route.path.indexOf(this.path) !== -1;
			},
			activeStyle() {
				return this.active ? {color: this.activeColor} : {};
			}
		},
		methods: {
			clickAction() {
				if (this.$route.path !== this.path) {
					this.$router.push({
						path: this.path
					});
				}
			}
		}
	}
</script>

<style scoped>
	.tab-bar-item {
		flex: 1;
		height: 49px;
		text-align: center;
	}

	.tab-bar-item img {
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
		margin-bottom: 3px;
	}

	.title {
		font-size: var(--font-size);
	}

	.active {
		color: indianred;
	}
</style>
