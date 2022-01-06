//回到顶部组件混入
import BackTop from "components/content/back_top/BackTop";

export default {
	components: {
		BackTop,
	},
	data() {
		return {
			bktopShow: false, //回到顶部显示标志
		}
	},
	methods: {
		backTopClick() {
			this.$refs.scroll.scrollTo(0, 0);
		},
	}
}
