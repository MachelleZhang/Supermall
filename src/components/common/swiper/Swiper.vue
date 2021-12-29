<template>
	<div id="mz-swiper">
		<div class="common-swiper" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
			<slot></slot>
		</div>
		<div class="indicator">
			<slot name="indicator">
				<div class="indi-item" v-for="(item, index) in slideCount" :class="{active: index === currentIndex-1}" :key="index"></div>
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
			},
			moveRadio: {
				type: Number,
				default: 0.25
			}
		},
		data() {
			return {
				playTimer: null, //定时器对象
				swiperStyle: {},
				slideCount: 0, //滚动元素个数
				totalWidth: 0, //滚动宽度
				scrolling: false, //滚动标识
				currentIndex: 1, //当前索引
				startX: 0, //拖动手势的起始x坐标
				distance: 0, //拖动距离
			}
		}, //data-end
		mounted() {
			setTimeout(() => {
				this.handleDom();
				this.startTimer();
			}, 300);
		},
		methods: {
			// 处理dom
			handleDom() {
				let swiperEl = document.querySelector('.common-swiper');
				let slideEls = document.getElementsByClassName('slide');
				this.slideCount = slideEls.length;

				// 大于1个时，在前后添加一个节点，模拟无限滚动
				if (this.slideCount > 1) {
					let cloneFirst = slideEls[0].cloneNode(true);
					let cloneLast = slideEls[this.slideCount - 1].cloneNode(true);
					swiperEl.insertBefore(cloneLast, slideEls[0]);
					swiperEl.appendChild(cloneFirst);
					this.totalWidth = swiperEl.offsetWidth;
					this.swiperStyle = swiperEl.style;
				}

				// 初始位置校正，显示第1个元素
				this.setTransform(-this.totalWidth);
			},
			// 启动定时器
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
				setTimeout(() => {
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
				}, this.animDuration);
			},
			setTransform(position) {
				this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
				this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
				this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
			},
			touchstart(e) {
				// 正在滚动中，不能拖动
				if (this.scrolling) return;

				// 停止定时器
				this.stopTimer();

				// 保存起始点
				this.startX = e.touches[0].pageX;
			},
			touchmove(e) {
				let currentX = e.touches[0].pageX;
				this.distance = currentX - this.startX;
				let currentPosition = -this.currentIndex * this.totalWidth;
				let moveDistance = currentPosition + this.distance;
				this.setTransform(moveDistance);
			},
			touchend(e) {
				// 获取移动距离绝对值
				let currentMove = Math.abs(this.distance);

				// 判断是左移还是右移，是否超过一定比例，超过比例就移动到手势方向的下一张
				if (this.distance > 0 && currentMove > this.totalWidth * this.moveRadio) {
					this.currentIndex -= 1;
				} else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRadio) {
					this.currentIndex += 1;
				}

				// 校正位置
				this.scrollContent(-this.currentIndex * this.totalWidth);

				// 启动定时器
				this.startTimer();
			},
		}, //methods-end
	}
</script>

<style scoped>
	#mz-swiper {
		overflow: hidden;
		position: relative;
	}

	.common-swiper {
		display: flex;
	}

	.indicator {
		display: flex;
		position: absolute;
		bottom: 0;
		height: 20px;
		line-height: 20px;
		width: 100%;
		background-color: #0002;
		justify-content: center;
		align-items: center;
	}

	.indi-item {
		box-sizing: border-box;
		border-radius: 4px;
		width: 8px;
		height: 8px;
		background-color: #fff;
		margin: 0 5px;
	}

	.indi-item.active {
		background-color: #ff5777;
	}
</style>
