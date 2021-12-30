let Detail_mock = require('mockjs');

let detailData = {
	'topImages': [
		{ img: require('assets/image/tabbar/home.svg') },
		{ img: require('assets/image/tabbar/category.svg') },
		{ img: require('assets/image/tabbar/cart.svg') },
		{ img: require('assets/image/tabbar/profile.svg') },
	],
	'baseInfo': {
		'title|+1': [
			'什么跨境电商疯狂加斯蒂芬库里接口开始减肥看电视剧发快递是',
			'违纪罚款的设计费框架是覅是点击',
			'当升科技反馈圣诞节',
			'大煞风景开始的咖啡就是地is多发点上课可视对讲反馈的手机放打开了附件看是苦命2肯定是覅',
			'kdsjf58k山东科技反倒是框架',
			'IE为房价肯定是速度快放假SDK23 可适当减肥大开杀戒'
		],
		'price|60-999': 0,
		'oldPrice|999-1999': 0,
		'discountDesc|+1': ['优惠价', '折扣价', '秒杀', '清仓价'],
		'sellCount|9999-99999': 0,
		'favCount|999-9999': 0,
		'otherDesc': '退货补运费',
		'backDay|1': ['7天无理由退货', '14天免费换货', '365天免费换新'],
		'sendHour|1': ['72小时内发货', '24小时内极速发货', '预售-10天内发货']
	},
	'shopInfo': {
		'shopAvatar|+1': [require('assets/image/tabbar/home.svg'), require('assets/image/tabbar/category.svg')],
		'shopTitle|+1': ['阿凡达店铺', '神奇海螺', '比奇海滩', '解忧杂货铺'],
		'totalSellCount|5-9.2': 0,
		'totalGoods|50-199': 0,
		'comment': [
			{
				'name': '描述相符',
				'score|4.2': 0,
				'isBetter|1': true
			},
			{
				'name': '价格合理',
				'score|4.2': 0,
				'isBetter|1': true
			},
			{
				'name': '质量满意',
				'score|4.2': 0,
				'isBetter|1': true
			},
		]
	}
}

Detail_mock.mock("/detail/detailData", detailData);
