<template>
	<div id="mz-swiper">
		<div class="swiper" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
			<slot></slot>
		</div>
		<div class="indicator">
			<slot name="indicator">
				<div class="indi-item"></div>
			</slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Swiper",
		props: {
			interval: {
				type: Number,
				default: 3000
			},
			animDuration: {
				type: Number,
				default: 300
			}
		},
		data() {
			return {
				playTimer: null, //定时器对象
				swiperStyle: {},
				slideCount: 0, //滚动元素个数
				totalWidth: 0, //滚动宽度
				scrolling: false, //滚动标识
				currentIndex: 0, //当前索引
			}
		}, //data-end
		mounted() {
			setTimeout(() => {
				this.handleDom();
				this.startTimer();
			}, this.interval);
		},
		methods: {
			// 在前后添加一个节点，模拟无限滚动
			handleDom() {
				let swiperEl = document.querySelector('.swiper');
				let slideEls = document.getElementsByClassName('slide');
				this.slideCount = slideEls.length;
				if (this.slideCount > 1) {
					let cloneFirst = slideEls[0].cloneNode(true);
					let cloneLast = slideEls[this.slideCount - 1].cloneNode(true);
					swiperEl.insertBefore(cloneLast, slideEls[0]);
					swiperEl.appendChild(cloneFirst);
					this.totalWidth = swiperEl.offsetWidth;
					this.swiperStyle = swiperEl.style;
				}
				this.setTransform(-this.totalWidth);
			},
			startTimer() {
				this.playTimer = setInterval(() => {
					this.currentIndex += 1;
					this.scrollContent(-this.currentIndex * this.totalWidth);
				}, this.interval);
			},
			stopTimer() {
				clearInterval(this.playTimer);
			},
			scrollContent(currentPosition) {
				// 保存滚动状态
				this.scrolling = true;

				// 滚动内容
				this.swiperStyle.transition ='transform '+ this.animDuration + 'ms';
				this.setTransform(currentPosition);

				// 位置修正
				this.checkPosition();

				// 释放滚动状态
				this.scrolling = false;
			},
			checkPosition() {
				// 关闭动画
				this.swiperStyle.transition = "0ms";

				// 位置校正
				if (this.currentIndex >= this.slideCount + 1) {
					this.currentIndex = 1;
					this.setTransform(-this.currentIndex * this.totalWidth);
				} else if (this.currentIndex <= 0) {
					this.currentIndex = this.slideCount;
					this.setTransform(-this.currentIndex * this.totalWidth);
				}
			},
			setTransform(position) {
				this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
				this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
				this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
			},
			touchstart(e) {

			},
			touchmove(e) {

			},
			touchend(e) {

			},
		}, //methods-end
	}
</script>

<style scoped>
	#mz-swiper {
		overflow: hidden;
		position: relative;
	}

	.swiper {
		display: flex;
	}
</style>
