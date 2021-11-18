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
			title: "十点抢券",
		},{
			img: require('assets/image/tabbar/category.svg'),
			title: "好物特卖",
		},{
			img: require('assets/image/tabbar/cart.svg'),
			title: "内购福利",
		},{
			img: require('assets/image/tabbar/profile.svg'),
			title: "初秋上新",
		},
	]
}

Home_mock.mock("/home/multidata", multidata);
