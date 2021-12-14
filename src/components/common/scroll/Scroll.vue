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
			this.bscroll.on("scroll", position => {
				this.$emit("scroll", position);
			});
			this.bscroll.on("pullingUp", () => {
				this.$emit("pullingUp");
			});
		},
		updated() {
			//初始化的高度太低，不能滚动，需要在加载完成后刷新一下，better-scroll才能获取正确的高度，进而可以滚动。
			this.bscroll.refresh();
		},
		methods: {
			scrollTo(x, y, time=500) {
				this.bscroll.scrollTo(x, y, time);
			},
			finishPullUp() {
				this.bscroll.finishPullUp();
			}
		}
	}
</script>

<style scoped>

</style>
