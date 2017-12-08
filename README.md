# react-native-tabbar-animated
the animated of tabbar  

## 前言
 该组件主要是做一个小动画，目前用在tabbar上面，当然其他地方也可以用，可能其他地方适配不太好.
 
## github 仓库地址
 [react-native-tabbar-animated](https://github.com/Geek-ch/react-native-tabbar-animated)

## gif 项目中的效果
![效果](https://github.com/Geek-ch/react-native-tabbar-animated/blob/master/screenshots/animated.gif)

## install 安装
 `npm install react-native-tabbar-animated --save`
## use 使用

1.导入
 `import {CustomAnimation} from 'react-native-tabbar-animated' `
 
 2.使用在react-navigation 的 TabNavigator
  `<CustomAnimation animationStyle={'linear'} imageAddress={require('../img/nav-bar-mall-selected.png')} /> `
  
  demo：
```
Main: {
    screen: Mall,
    navigationOptions: ({screenProps}) =>({
        title: '商城',
        tabBarLabel:({ focused }) =>( focused?'置顶':'商城'),
        tabBarIcon: ({ tintColor,focused }) =>
            ( focused? <CustomAnimation animationStyle={'linear'} imageAddress={require('../img/nav-bar-mall-selected.png')} />
            :
            <Image source={!focused ? require('../img/nav-bar-mall.png') : require('../img/nav-bar-mall-selected.png') }
            style={ styles.icon }
            />
            )

    }),
},

```

## api 方法

| Prop | Description | Default |
|---|---|---|
|**`url`**|线上图片链接 |*{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}*|
|**`imageAddress`**|本地图片 |`{require('../img/nav-bar-me.png')}`|
|**`animationStyle`**| 跳动,伸缩 |`spring`|
|**`animationStyle`**| 旋转 |`spin`|
|**`animationStyle`**| 上下移动 |`linear`|
|**`junpTime`**| 跳动持续时间 |`4000`|
|**`spinTime`**| 旋转持续时间 |*4000*|
|**`linearTime`**|移动持续时间 |*4000*|
|**`imageStyle`**| 图片的样式 |*None*|
|**`style`**|背景view样式 |`None`|




方法都是可选，根据需要加入

