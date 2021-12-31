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

export {
	debounce
}
