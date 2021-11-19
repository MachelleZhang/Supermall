let Home_mock = require('mockjs');

let multidata = {
	banner: [
		{ img: require('assets/image/tabbar/home.svg') },
		{ img: require('assets/image/tabbar/category.svg') },
		{ img: require('assets/image/tabbar/cart.svg') },
		{ img: require('assets/image/tabbar/profile.svg') },
	],
	recommend: [
		{
			img: require('assets/image/tabbar/home.svg'),
			link: "https://act.mogujie.com/zzlx67",
			title: "十点抢券",
		},{
			img: require('assets/image/tabbar/category.svg'),
			link: "https://act.mogujie.com/zzlx67",
			title: "好物特卖",
		},{
			img: require('assets/image/tabbar/cart.svg'),
			link: "https://act.mogujie.com/zzlx67",
			title: "内购福利",
		},{
			img: require('assets/image/tabbar/profile.svg'),
			link: "https://act.mogujie.com/zzlx67",
			title: "初秋上新",
		},
	],
	feature: [
		{
			img: require('assets/image/tabbar/home.svg'),
			link: "https://act.mogujie.com/zzlx67",
			title: "霸街长袖裙",
		},{
			img: require('assets/image/tabbar/category.svg'),
			link: "https://act.mogujie.com/zzlx67",
			title: "时尚懒人套装",
		},{
			img: require('assets/image/tabbar/cart.svg'),
			link: "https://act.mogujie.com/zzlx67",
			title: "微胖遮肉穿搭",
		},{
			img: require('assets/image/tabbar/profile.svg'),
			link: "https://act.mogujie.com/zzlx67",
			title: "降温保暖鞋",
		},{
			img: require('assets/image/tabbar/home.svg'),
			link: "https://act.mogujie.com/zzlx67",
			title: "颜值爆表套装裙",
		},{
			img: require('assets/image/tabbar/category.svg'),
			link: "https://act.mogujie.com/zzlx67",
			title: "小心机v领",
		},{
			img: require('assets/image/tabbar/cart.svg'),
			link: "https://act.mogujie.com/zzlx67",
			title: "万圣节必备口红",
		},{
			img: require('assets/image/tabbar/profile.svg'),
			link: "https://act.mogujie.com/zzlx67",
			title: "软萌暖心包包",
		},
	],
}

Home_mock.mock("/home/multidata", multidata);
