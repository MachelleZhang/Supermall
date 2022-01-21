export default {
	ADD_NEW_PRODUCT(state, payload) {
		payload.count = 1;
		state.cartList.push(payload);
	},
	ADD_PRODUCT_COUNT(state, payload) {
		payload.count += 1;
	}
}
