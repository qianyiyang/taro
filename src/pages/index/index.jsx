import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
    componentWillMount() {}

    componentDidMount() {}

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    goList = () => {
        Taro.navigateTo({ url: "/pages/list/list" });
    };

    render() {
        return (
            <View className="index">
                <Text>Hello world!</Text>
                <Button type="primary" onClick={this.goList}>
                    list
                </Button>
            </View>
        );
    }
}
