import React, {useRef} from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import gui from '../../lib/gui';

const UPPER_HEADER_HEIGHT = 32;
const UPPER_HEADER_PADDIND_TOP = 4;
const LOWER_HEADER_HEIGHT = 96;

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const getFeatureViewAnimation = (animatedValue, outputX) => {
  const TRANSLATE_X_INPUT_RANGE = [0, 80];
  const translateY = {
    translateY: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    }),
  };
  return {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: TRANSLATE_X_INPUT_RANGE,
          outputRange: [0, outputX],
          extrapolate: 'clamp',
        }),
      },
      translateY,
    ],
  };
};

const Momo = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const searchInoutAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
    }),
  };
  const featureNameAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
    }),
  };
  const depositViewAnimation = getFeatureViewAnimation(animatedValue, 36);
  const widthDrawAnimation = getFeatureViewAnimation(animatedValue, -16);
  const qrViewAnimation = getFeatureViewAnimation(animatedValue, -56);
  const scanViewAnimation = getFeatureViewAnimation(animatedValue, -92);
  const animatedImageCircle = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
    }),
  };
  const animatedImage = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
    }),
  };
  return (
    <View style={style.container}>
      {/* <StatusBar barStyle={'light-content'} />
      <SafeAreaView>
        <View style={style.upperHeaderPlaceHodler}></View>
      </SafeAreaView>
      <SafeAreaView style={style.header}>
        <View style={style.upperHeader}>
          <View style={style.searchContain}>
            <Image
              source={require('../../assets/image/momo/search.png')}
              style={style.searchIcon}
            />
            <AnimatedTextInput
              placeholder="Tìm kiếm"
              placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
              style={[style.searchInput, searchInoutAnimation]}
            />
          </View>
          <Image
            source={require('../../assets/image/momo/bell.png')}
            style={style.bellIcon}
          />
          <Image
            source={require('../../assets/image/momo/avatar.png')}
            style={style.avatarIcon}
          />
        </View>
        <View style={style.lowerHeader}>
          <Animated.View style={[style.feature, depositViewAnimation]}>
            <Animated.Image
              source={require('../../assets/image/momo/deposit-circle.png')}
              style={[style.featureIconCircle, animatedImageCircle]}
            />
            <Animated.Image
              source={require('../../assets/image/momo/deposit.png')}
              style={[style.featureIcon, animatedImage]}
            />
            <Animated.Text style={[style.featureName, featureNameAnimation]}>
              NẠP TIỀN
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[style.feature, widthDrawAnimation]}>
            <Animated.Image
              source={require('../../assets/image/momo/withdraw-circle.png')}
              style={[style.featureIconCircle, animatedImageCircle]}
            />
            <Animated.Image
              source={require('../../assets/image/momo/withdraw.png')}
              style={[style.featureIcon, animatedImage]}
            />
            <Animated.Text style={[style.featureName, featureNameAnimation]}>
              RÚT TIỀN
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[style.feature, qrViewAnimation]}>
            <Animated.Image
              source={require('../../assets/image/momo/qr-circle.png')}
              style={[style.featureIconCircle, animatedImageCircle]}
            />
            <Animated.Image
              source={require('../../assets/image/momo/qr.png')}
              style={[style.featureIcon, animatedImage]}
            />
            <Animated.Text style={[style.featureName, featureNameAnimation]}>
              MÃ QR
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[style.feature, scanViewAnimation]}>
            <Animated.Image
              source={require('../../assets/image/momo/scan-circle.png')}
              style={[style.featureIconCircle, animatedImageCircle]}
            />
            <Animated.Image
              source={require('../../assets/image/momo/scan.png')}
              style={[style.featureIcon, animatedImage]}
            />
            <Animated.Text style={[style.featureName, featureNameAnimation]}>
              QUÉT MÃ
            </Animated.Text>
          </Animated.View>
        </View>
      </SafeAreaView>
      <ScrollView
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          animatedValue.setValue(offsetY);
        }}
        scrollEventThrottle={16}>
        <View style={style.paddingForHeader}></View>
        <View style={style.scrollViewContent}></View>
      </ScrollView> */}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperHeaderPlaceHodler: {height: 40},
  header: {
    position: 'absolute',
    backgroundColor: '#AF0B6C',
    width: gui.screenWidth,
  },
  upperHeader: {
    height: UPPER_HEADER_HEIGHT,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  searchContain: {
    justifyContent: 'center',
    flex: 1,
  },
  searchIcon: {
    height: 16,
    width: 16,
    marginLeft: 8,
  },
  searchInput: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingVertical: 4,
    borderRadius: 4,
    paddingLeft: 32,
  },
  bellIcon: {
    height: 16,
    width: 16,
    marginHorizontal: 32,
  },
  avatarIcon: {
    height: 28,
    width: 28,
  },
  lowerHeader: {
    height: LOWER_HEADER_HEIGHT,
    width: gui.screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  feature: {alignItems: 'center'},
  featureIconCircle: {height: 32, width: 32},
  featureIcon: {height: 16, width: 16, position: 'absolute', top: 8},
  featureName: {
    fontSize: 12,
    lineHeight: 14,
    color: 'white',
    marginTop: 12,
    fontWeight: 'bold',
  },
  paddingForHeader: {
    height: UPPER_HEADER_HEIGHT + LOWER_HEADER_HEIGHT,
  },
  scrollViewContent: {
    height: gui.screenHeight * 2,
    backgroundColor: 'white',
  },
});

export default Momo;
