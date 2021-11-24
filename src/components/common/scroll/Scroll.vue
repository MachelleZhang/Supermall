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
		data() {
			return {
				bscroll: null
			}
		},
		mounted() {
			this.bscroll = new BScroll(this.$refs.wrapper, {
				click: true,
				probeType: 3,
				pullUpLoad: true
			});
		},
		updated() {
			console.log('update');
			this.bscroll.refresh();
		}
	}
</script>

<style scoped>

</style>
