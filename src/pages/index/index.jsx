import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { AtNavBar, AtTabBar, AtAvatar, AtIcon } from "taro-ui";
import { View, Swiper, SwiperItem } from "@tarojs/components";
import Mine from "./../mine";
import "./index.scss";

export default class Index extends Component {
    componentWillMount() {}

    componentDidMount() {}

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    state = {
        tabBarCurrent: 0,
        musicIcon: "play", // 底部音乐播放按钮icon
        innerAudioContext: "",
    };

    // 导航栏tab改变
    tabBarChange = (value) => {
        this.setState({
            tabBarCurrent: value,
        });
    };

    // 音乐播放
    musicPlay = () => {
        let { musicIcon, innerAudioContext } = this.state;

        if (innerAudioContext) {
            musicIcon === "play"
                ? innerAudioContext.play()
                : innerAudioContext.pause();
        } else {
            // 创建音乐
            innerAudioContext = Taro.createInnerAudioContext();
            innerAudioContext.autoplay = true;
            innerAudioContext.src =
                "http://music.163.com/song/media/outer/url?id=447925558.mp3";
            innerAudioContext.onPlay(() => {
                console.log("开始播放");
            });
            innerAudioContext.onError((res) => {
                console.log(res.errMsg);
                console.log(res.errCode);
            });
        }

        this.setState({
            innerAudioContext,
            musicIcon: musicIcon === "play" ? "pause" : "play",
        });
    };

    render() {
        const { tabBarCurrent, musicIcon } = this.state;
        const tabBar = (
            <AtTabBar
                tabList={[{ title: "我的" }, { title: "发现" }]}
                onClick={this.tabBarChange}
                current={this.state.tabBarCurrent}
            />
        );
        return (
            <View className="subject">
                <AtNavBar
                    onClickRgIconSt={this.handleClick}
                    color="#000"
                    title={tabBar}
                    rightFirstIconType="search"
                    border={false}
                />

                {/* 我的 */}
                {tabBarCurrent === 0 && <Mine />}

                {/* 底部歌曲滚动 */}
                <Swiper className="music_list">
                    <SwiperItem>
                        <View className="music_info at-row at-row__align--center">
                            <View className="at-col at-col-2">
                                <AtAvatar
                                    size="small"
                                    circle
                                    image="https://jdc.jd.com/img/200"
                                    className="music_pic"
                                ></AtAvatar>
                            </View>
                            <View className="at-col at-col-5 music_name">
                                <View className="music_title">何以歌</View>
                                <View className="music_lyric">发送到发生</View>
                            </View>
                            <View className="at-col at-col-5 music_operate">
                                <AtIcon
                                    value={musicIcon}
                                    size="26"
                                    className="music_paly"
                                    onClick={this.musicPlay}
                                    color="rgba(0,0,0,0.8)"
                                ></AtIcon>
                                <AtIcon
                                    value="playlist"
                                    size="26"
                                    color="rgba(0,0,0,0.8)"
                                ></AtIcon>
                            </View>
                        </View>
                    </SwiperItem>
                </Swiper>
            </View>
        );
    }
}
