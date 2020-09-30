import React, { Component } from "react";
import { View } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtToast } from "taro-ui";

import { userLogin } from "@/api/mine";

import "./index.scss";

export default class Login extends Component {
    state = {
        account: "", // 账号
        password: "", // 密码
        loading: false, // 按钮loading状态
        toastText: "", // toast内容
        isOpened: false, // toast显隐
    };

    // 登录
    onSubmit = () => {
        console.log(111);
        const { account, password } = this.state;
        this.setState({
            loading: true,
        });

        userLogin({
            phone: account,
            password,
        }).then((res) => {
            console.log(res);

            this.setState({
                loading: false,
                toastText: "登录成功",
                isOpened: true,
            });
        });
    };

    // 输入法内容改变
    handleChange = (type, value) => {
        this.setState({
            [type]: value,
        });
    };

    render() {
        const { loading, toastText, isOpened } = this.state;
        return (
            <View className="user-login">
                <View className="user-login-form">
                    <View className="user-login-title">登录</View>
                    <AtForm>
                        <AtInput
                            name="value"
                            title="手机号"
                            type="text"
                            placeholder="请输入手机号"
                            value={this.state.account}
                            onChange={(value) =>
                                this.handleChange("account", value)
                            }
                        />
                        <AtInput
                            name="password"
                            title="密码"
                            type="password"
                            placeholder="请输入密码"
                            value={this.state.password}
                            onChange={(value) =>
                                this.handleChange("password", value)
                            }
                        />
                        <AtButton
                            type="primary"
                            loading={loading}
                            className="user-login-btn"
                            onClick={this.onSubmit}
                        >
                            登录
                        </AtButton>
                    </AtForm>
                </View>
                <AtToast isOpened={isOpened} text={toastText}></AtToast>
            </View>
        );
    }
}
