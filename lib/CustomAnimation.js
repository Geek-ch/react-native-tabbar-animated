/**
 * Created by ch on 2017/12/7.
 */
/**
 * 使用介绍
 * url:{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}
 * imageAddress={require('../img/nav-bar-me.png')}
 * animationStyle 动画样式:spring放大缩小  spin旋转 liner移动
 * junpTime 弹跳时间
 * spinTime 旋转时间
 * linearTime 移动时间
 */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity,StyleSheet, Platform,Animated,Image,Easing,Dimensions,InteractionManager} from 'react-native';

export default class CustomAnimation extends Component {
    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0);
        this.springValue = new Animated.Value(0);
        this.animatedValue = new Animated.Value(0)
        this.state={
            isAction:true,
            animationStyle:this.props.animationStyle?this.props.animationStyle:'spin',
        }
    }

    componentWillMount() {
        InteractionManager.runAfterInteractions(()=> {

        })
    }
    componentDidMount () {
        this.state.animationStyle === 'spin' && this.spin();
        this.state.animationStyle === 'linear' && this.animate();
        this.actionMethod();
        this.timer = setInterval(() => {
            this.actionMethod()
        }, this.props.junpTime?this.props.junpTime:4000);
    }
    componentWillUnmount(){
        this.timer && clearInterval(this.timer);
        this.setState({isAction:false})
    }
    actionMethod(){

        this.state.animationStyle === 'spring' && this.spring()
    }
    render(){
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        const marginBottom = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 80]
        })
        let imgUrl = this.props.url?this.props.url:(this.props.imageAddress?this.props.imageAddress:{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'});
        return(
            <View style={[styles.container,this.props.style]}>
                {this.state.animationStyle === 'spring' &&
                    <Animated.Image
                        style={[{
                            width: 25,
                            height: 25,
                            transform: [{scale: this.springValue}]
                        },this.props.imageStyle]}
                        source={imgUrl}/>
                }

                {this.state.animationStyle === 'spin' &&
                    <Animated.Image
                        style={[{
                            width: 25,
                            height: 25,
                            transform: [{rotate: spin}] },this.props.imageStyle]
                        }
                        source={imgUrl}
                    />
                }

                {this.state.animationStyle === 'linear' &&
                    <Animated.Image
                        style={[{
                            marginBottom,
                            width: 25,
                            height: 25,
                            },this.props.imageStyle]
                        }
                        source={imgUrl}
                    />
                }
            </View>
        )
    }

    //放大缩小动画
    spring () {
        this.springValue.setValue(0.7)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1
            }
        ).start(()=>{this.state.isAction &&this.spring})
    }
    //旋转动画
    spin () {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: this.props.spinTime?this.props.spinTime:4000,
                easing: Easing.linear
            }
        ).start(() => this.state.isAction && this.spin())
    }
    animate () {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: this.props.linearTime?this.props.linearTime:4000,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }
}


const styles = StyleSheet.create({
    container: {
        //backgroundColor: "#f1f1f1",
        backgroundColor: "transparent",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});



