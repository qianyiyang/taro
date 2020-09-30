import { request } from "@/utils/request";

// 用户登录
export function userLogin(data) {
    return request({
        url: "/login/cellphone",
        method: "get",
        params: data,
    });
}

// 用户详情
export function userDetail(data) {
    return request({
        url: "/user/detail",
        method: "get",
        params: data,
    });
}
