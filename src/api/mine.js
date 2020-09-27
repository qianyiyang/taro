import { request } from "@/utils/request";

export function getHot(data) {
    return request({
        url: "/search/hot",
        method: "get",
        params: data,
    });
}
