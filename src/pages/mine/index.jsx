import React, { Component } from "react";
import { AtAvatar, AtButton, AtTabBar } from "taro-ui";
import { View } from "@tarojs/components";
import "./index.scss";

export default class index extends Component {
    state = {
        tabBarCurrent: 0,
    };

    // 分类点击
    tabBarClick = (value) => {
        console.log(value);
    };

    render() {
        const { tabBarCurrent } = this.state;
        return (
            <View className="mine_content">
                <View className="at-row">
                    <View className="at-col at-col-3">
                        <AtAvatar
                            size="large"
                            circle
                            image="https://jdc.jd.com/img/200"
                        ></AtAvatar>
                    </View>
                    <View className="at-col at-col-9">
                        <view className="mine_name">大白丶123</view>
                        <View
                            style={{ display: "inline-block" }}
                            className="user_grade"
                        >
                            <AtButton size="small" circle>
                                Lv.9
                            </AtButton>
                        </View>
                    </View>
                </View>
                <AtTabBar
                    tabList={[
                        { title: "本地音乐", iconType: "sound" },
                        { title: "我的电台", iconType: "bullet-list" },
                        { title: "我的收藏", iconType: "star" },
                    ]}
                    color="#000"
                    selectedColor="#000"
                    onClick={this.tabBarClick}
                    current={tabBarCurrent}
                    className="mine_classification"
                />
            </View>
        );
    }
}
