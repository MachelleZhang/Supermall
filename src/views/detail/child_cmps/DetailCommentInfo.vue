<template>
	<div class="detail-comment-info">
		<div class="header-bar">
			<span>用户评价</span>
			<span>更多</span>
		</div>
		<div v-for="item in datas" class="user-comment">
			<div class="top">
				<div class="avatar">
					<img :src="item.avatar"/>
				</div>
				<div class="username">{{ item.username }}</div>
			</div>
			<div class="comment">{{ item.comment }}</div>
			<div class="param">
				<span>{{ item.buyDate | customerFormat }}</span>
				<span>颜色：{{ item.buyType }}</span>
				<span>尺码：{{ item.buyParam }}</span>
			</div>
			<div class="bottom">
				<div v-for="img in item.images" class="com-img">
					<img :src="img"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { dateFormat } from "utils/utils";

	export default {
		name: "DetailCommentInfo",
		props: {
			datas: {
				type: Array,
				default: () => []
			}
		},
		filters: {
			customerFormat(val) {
				let date = new Date(val * 1000);
				return dateFormat(date, 'yyyy-MM-dd');
			}
		}
	}
</script>

<style scoped>
	.detail-comment-info {
		padding: 10px;
		border-bottom: 5px solid #eeeeee;
	}

	.detail-comment-info>.header-bar {
		height: 40px;
		line-height: 40px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #eeeeee;
	}

	.detail-comment-info>.header-bar span:nth-child(1) {
		font-size: 14px;
	}

	.detail-comment-info>.header-bar span:nth-child(2) {
		font-size: 13px;
	}

	.detail-comment-info .user-comment+.user-comment {
		border-top: 1px solid #eeeeee;
	}

	.detail-comment-info .top {
		display: flex;
		height: 40px;
		margin: 10px 0;
	}

	.detail-comment-info .top .avatar {
		height: 40px;
		width: 40px;
		border-radius: 20px;
		border: 1px solid #eeeeee;
	}

	.detail-comment-info .top .username {
		line-height: 40px;
		margin-left: 10px;
		font-size: 15px;
		color: #373737;
	}

	.detail-comment-info .comment {
		font-size: 14px;
		margin: 10px 0;
		color: #7b7b7b;
	}

	.detail-comment-info .param {
		display: flex;
		height: 20px;
		line-height: 20px;
		margin: 10px 0;
		font-size: 12px;
		color: #969696;
	}

	.detail-comment-info .param span+span {
		margin-left: 10px;
	}

	.detail-comment-info .bottom {
		display: flex;
		flex-wrap: wrap;
	}

	.detail-comment-info .bottom .com-img {
		width: 25%;
		padding: 2px;
	}
</style>
