//防抖函数
function debounce(func, delay) {
	let timer = null;
	return (...args) => {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	}
}

//简易时间格式化处理
function dateFormat(date, fmt) {
	let result = "";
	if (/(y+)/.test(fmt)) {
		result = fmt.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
	}
	let o = {
		"M+": date.getMonth() + 1,
		"d+": date.getDate(),
		"H+": date.getHours(),
		"m+": date.getMinutes(),
		"s+": date.getSeconds(),
	};
	for (let key in o) {
		if (new RegExp(`(${key})`).test(fmt)) {
			let val = o[key].toString();
			let repStr = RegExp.$1.length === 1 ? val : padLeftZero(val);
			result = result.replace(RegExp.$1, repStr);
		}
	}
	return result;
}

//左侧添0
function padLeftZero(str) {
	return ("00" + str).substr(str.length);
}

export {
	debounce,
	dateFormat
}
