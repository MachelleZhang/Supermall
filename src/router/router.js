import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		redirect: "/home"
	},
	{
		name: "首页",
		path: "/home",
		component: () => import("@/views/home/Home")
	},
	{
		name: "分类",
		path: "/category",
		component: () => import("@/views/category/Category")
	},
	{
		name: "购物车",
		path: "/cart",
		component: () => import("@/views/cart/Cart")
	},
	{
		name: "我的",
		path: "/profile",
		component: () => import("@/views/profile/Profile")
	},
	{
		name: "详情",
		path: "/detail",
		component: () => import("@/views/detail/Detail")
	}
];

const router = new VueRouter({
	routes,
	mode: "history"
});

export default router;
