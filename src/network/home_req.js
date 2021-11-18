import { request } from "./request";

export const getMultiData = () => {
	return request({
		url: "/home/multidata",
		method: "POST"
	})
}
