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
	},
	'goodsInfo': {
		'desc': '【新品发布】【秋季新款】【2件68元】【全国包邮】【预售】【新款】',
		'images': [
			require('assets/image/tabbar/home.svg'),
			require('assets/image/tabbar/category.svg'),
			require('assets/image/tabbar/cart.svg'),
			require('assets/image/tabbar/profile.svg')
		]
	},
	'paramInfo': {
		'name': '产品参数',
		'infos': [
			{ key: '图案', value: '宫廷复古图/民族复古图，字母/文字/图案' },
			{ key: '厂名', value: '艾莉莉服饰公司' },
			{ key: '颜色', value: '黑白拼接' },
			{ key: '袖型', value: '泡泡袖' },
			{ key: '厚度', value: '适中' },
			{ key: '尺码', value: 'M,L,XL,XXL' },
			{ key: '衣长', value: '常规款（51-65cm）' },
			{ key: '版型', value: '宽松' },
			{ key: '季节', value: '春秋' },
			{ key: '材质', value: '纯棉' }
		],
		'tables': [
			['尺码', 'M', 'L', 'XL', 'XXL'],
			['衣长', '61.5', '63', '64.5', '66'],
			['胸围', '98', '104', '110', '116'],
			['袖长', '63', '66', '68.5', '70.5']
		]
	},
	'commentInfo|+1': [
		[
			{
				avatar: require('assets/image/tabbar/home.svg'),
				username: '夏夏夏夏夏夏天',
				comment: '东西很好用，孩子很喜欢，已经买了一车了。',
				buyDate: 1641261271,
				buyType: '白(5866)',
				buyParam: 'M',
				images: [
					require('assets/image/tabbar/cart.svg'),
					require('assets/image/tabbar/profile.svg'),
					require('assets/image/tabbar/cart.svg'),
					require('assets/image/tabbar/profile.svg'),
					require('assets/image/tabbar/profile.svg')
				]
			}
		],
		[
			{
				avatar: require('assets/image/tabbar/home.svg'),
				username: '春田',
				comment: '大家加油哦！',
				buyDate: 1641261271,
				buyType: '粉(7542)',
				buyParam: 'M',
				images: [
					require('assets/image/tabbar/cart.svg'),
					require('assets/image/tabbar/profile.svg')
				]
			},
			{
				avatar: require('assets/image/tabbar/home.svg'),
				username: '佩可莉姆',
				comment: '欧娜卡，佩可佩可哒。',
				buyDate: 1641261271,
				buyType: '白(9632)',
				buyParam: 'XL',
				images: [
					require('assets/image/tabbar/cart.svg'),
					require('assets/image/tabbar/profile.svg')
				]
			}
		]
	]
}

Detail_mock.mock("/detail/detailData", detailData);
