export default {
	ADD_CART(context, payload) {
		let finded = context.state.cartList.find(item => item.title === payload.title);
		if (finded) {
			context.commit("ADD_PRODUCT_COUNT", finded);
		} else {
			context.commit("ADD_NEW_PRODUCT", payload);
		}
	}
}
