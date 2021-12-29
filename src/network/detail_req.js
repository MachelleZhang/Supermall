import { request } from "./request";

export const getDetailData = () => {
	return request({
		url: "/detail/detailData",
		method: "POST"
	})
}
