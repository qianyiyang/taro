import React, { Component } from "react";
import { View } from "@tarojs/components";
import { AtForm, AtInput, AtButton } from "taro-ui";

import "./index.scss";

export default class Login extends Component {
    state = {
        value: "",
    };
    userLogin = () => {
        console.log(111);
    };
    render() {
        return (
            <View className="user-login">
                <AtForm onSubmit={this.onSubmit} onReset={this.onReset}>
                    <AtInput
                        name="value"
                        title="手机号"
                        type="text"
                        placeholder="请输入手机号"
                        value={this.state.value}
                    />
                    <AtInput
                        name="password"
                        title="密码"
                        type="password"
                        placeholder="请输入密码"
                        value={this.state.value}
                    />
                    <AtButton type="primary" className="user-login-btn">
                        登录
                    </AtButton>
                </AtForm>
            </View>
        );
    }
}
