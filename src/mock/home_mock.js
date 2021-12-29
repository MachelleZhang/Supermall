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

/*	mock构建数据释义
 *	属性listdata是一个数组，包含10个元素
 * 		id自增1
 * 		img从数组中随机取1个值
 * 		title从数组中随机取1个值
 * 		price的值取60到300的随机值，默认值0
 * 		cfav的值取1000到9999的随机值，默认值0
 */
let listdata = Home_mock.mock({
	'listdata|10': [{
		'id|+1': 1,
		'img|1': [
			require('assets/image/tabbar/profile.svg'),
			require('assets/image/tabbar/home.svg'),
			require('assets/image/tabbar/category.svg'),
			require('assets/image/tabbar/cart.svg')
		],
		'title|1': ['复古风连衣裙', '夹克T恤', '标题1123', '标题是框架', '圣诞节回复圣诞节回复圣诞节回复圣诞节回复'],
		'price|60-300': 0,
		'cfav|1000-9999': 0,
	}]
});

Home_mock.mock("/home/multidata", multidata);
Home_mock.mock("/home/listdata", listdata.listdata);
