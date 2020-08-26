import React, { Component } from "react";
import { AtSearchBar, AtTabBar } from "taro-ui";
import { View } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
    componentWillMount() {}

    componentDidMount() {}

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    state = {
        value: "",
        current: 0,
    };

    onChange = (value) => {
        this.setState({
            value: value,
        });
    };

    handleClick = (value) => {
        this.setState({
            current: value,
        });
    };

    render() {
        return (
            <View>
                <AtSearchBar
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="请输入歌手或歌曲名"
                />
                <AtTabBar
                    tabList={[
                        { title: "我的" },
                        { title: "拍照" },
                        { title: "通讯录" },
                    ]}
                    onClick={this.handleClick}
                    current={this.state.current}
                />
            </View>
        );
    }
}
