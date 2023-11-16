import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  Image,
  PanResponder,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import gui from '../../lib/gui';

const girl = [
  {
    id: 0,
    avatar: require('../../assets/users/girl1.jpeg'),
  },
  {
    id: 1,
    avatar: require('../../assets/users/girl2.jpeg'),
  },
  {
    id: 2,
    avatar: require('../../assets/users/girl3.jpeg'),
  },
  {
    id: 3,
    avatar: require('../../assets/users/girl4.jpeg'),
  },
  {
    id: 4,
    avatar: require('../../assets/users/girl5.jpeg'),
  },
];

const ImagePr = () => {
  const imageAnimation = useRef(new Animated.Value(0)).current;
  const imgStyle = {
    transform: [
      {
        rotate: imageAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };
  useEffect(() => {
    Animated.loop(
      Animated.timing(imageAnimation, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  }, [imageAnimation]);
  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log(gesture);
      }, // khi ng dung di chuyen ngon tay tren man hinh
      onPanResponderRelease: (event, gesture) => {
        console.log(gesture);
      }, // khi ng dung bo ngon tay tren man hinh
    }),
  ).current;
  return (
    <View {...pan.panHandlers} style={{flex: 1}}>
      <SafeAreaView>
        <Animated.Image
          source={girl[0].avatar}
          style={[{width: '100%', height: '100%'}, imgStyle]}
        />
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({});

export default ImagePr;
