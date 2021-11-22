import { request } from "./request";

export const getMultiData = () => {
	return request({
		url: "/home/multidata",
		method: "POST"
	})
}

export const getHomeListData = () => {
	return request({
		url: "/home/listdata",
		method: "POST"
	})
}
