let Home_mock = require('mockjs');

let multidata = {
	banner: [
		{ link: require('assets/image/tabbar/home.svg') },
		{ link: require('assets/image/tabbar/category.svg') },
		{ link: require('assets/image/tabbar/cart.svg') },
		{ link: require('assets/image/tabbar/profile.svg') },
	]
}

Home_mock.mock("/home/multidata", multidata);
