import Taro from "@tarojs/taro";

const BASE_URL = "http://localhost:3000";

export async function request(requestHandler = {}) {
    const {
        params = {},
        method = "get",
        closeLoading = false, //默认显示Toast，如果设置true则不会显示Toast
        url = "",
    } = requestHandler;

    const token = Taro.getStorageSync("token");

    if (!closeLoading) {
        Taro.showLoading({
            title: "加载中",
            mask: true,
        });
    }

    const res = await Taro.request({
        url: BASE_URL + url,
        data: params,
        method,
        header: {
            "content-type": "application/json",
            Authorization: token || "",
        },
        fail: () => {
            console.log("request failed!");

            if (!closeLoading) {
                Taro.hideLoading();
            }

            Taro.showToast({
                title: "请求失败",
                icon: "none",
                duration: 2000,
            });
        },
    });

    if (res) {
        console.log("request success!");

        if (!closeLoading) {
            Taro.hideLoading();
        }

        if (res.data.code === 200) {
            return res.data;
        } else {
            Taro.showToast({
                title: res.data.msg,
                icon: "none",
                duration: 2000,
            });

            return res.data;
        }
    } else {
        console.log("request failed!");

        if (!closeLoading) {
            Taro.hideLoading();
        }

        Taro.showToast({
            title: "请求失败",
            icon: "none",
            duration: 2000,
        });

        return res.data;
    }
}
