<template>
	<div class="wrapper" ref="wrapper">
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from "better-scroll";

	export default {
		name: "Scroll",
		props: {
			probeType: {
				type: Number,
				default: 0
			},
			pullUpLoad: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				bscroll: null
			}
		},
		mounted() {
			this.bscroll = new BScroll(this.$refs.wrapper, {
				click: true,
				probeType: this.probeType,
				pullUpLoad: this.pullUpLoad
			});
			if (this.probeType === 2 || this.probeType === 3) {
				this.bscroll.on("scroll", position => {
					this.$emit("scroll", position);
				});
			}
			if (this.pullUpLoad) {
				this.bscroll.on("pullingUp", () => {
					this.$emit("pullingUp");
				});
			}
		},
		updated() {
			//初始化的高度太低，不能滚动，需要在加载完成后刷新一下，better-scroll才能获取正确的高度，进而可以滚动。
			//此处刷新后，可以不用再监听imageLoaded
			this.bscroll.refresh();
		},
		methods: {
			refresh() {
				this.bscroll && this.bscroll.refresh();
			},
			scrollTo(x, y, time=500) {
				this.bscroll && this.bscroll.scrollTo(x, y, time);
			},
			finishPullUp() {
				this.bscroll && this.bscroll.finishPullUp();
			},
			getOffsetY() {
				return this.bscroll ? this.bscroll.y : 0;
			}
		}
	}
</script>

<style scoped>

</style>
