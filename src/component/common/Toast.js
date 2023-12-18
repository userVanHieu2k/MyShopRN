import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Text,
  ViewPropTypes,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

export const DURATION = {
  LENGTH_LONG: 1000,
  LENGTH_SHORT: 500,
  FOREVER: 0,
};

const { height, width } = Dimensions.get('window');
const iconTB = require('../../assets/images/iconTB.png');

export default class Toast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false,
      text1: '',
      text2: '',
      opacityValue: new Animated.Value(this.props.opacity),
    };
  }

  show(text1, text2, duration) {
    this.duration =
      typeof duration === 'number' ? duration : DURATION.LENGTH_SHORT;

    this.setState({
      isShow: true,
      text1: text1,
      text2: text2,
    });

    Animated.timing(this.state.opacityValue, {
      toValue: this.props.opacity,
      duration: this.props.fadeInDuration,
    }).start(() => {
      this.isShow = true;
      if (duration !== DURATION.FOREVER) this.close();
    });
  }

  close(duration) {
    let delay = typeof duration === 'undefined' ? this.duration : duration;

    if (delay === DURATION.FOREVER) delay = this.props.defaultCloseDelay || 250;

    if (!this.isShow && !this.state.isShow) return;
    this.timer && clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      Animated.timing(this.state.opacityValue, {
        toValue: 0.0,
        duration: this.props.fadeOutDuration,
      }).start(() => {
        this.setState({
          isShow: false,
        });
        this.isShow = false;
      });
    }, delay);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    let pos;
    switch (this.props.position) {
      case 'top':
        pos = this.props.positionValue;
        break;
      case 'center':
        pos = height / 2;
        break;
      case 'bottom':
        pos = height - this.props.positionValue;
        break;
    }

    const view = this.state.isShow ? (
      <View style={[styles.container, { top: pos }]} pointerEvents="none">
        <Animated.View
          style={[
            styles.content,
            { opacity: this.state.opacityValue },
            this.props.style,
          ]}>
          <Image source={iconTB} style={styles.imageStyle} />
          <View>
            <Text style={styles.text1}>{this.state.text1}</Text>
            <Text style={styles.text2}>{this.state.text2}</Text>
          </View>
        </Animated.View>
      </View>
    ) : null;
    return view;
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    padding: 10,
    marginLeft: 18,
    marginRight: 18,
    flexDirection: 'row',
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  text1: { fontWeight: '700', fontSize: 14, lineHeight: 20, color: '#0074ff' },
  text2: { fontWeight: '400', fontSize: 13, lineHeight: 19, color: '#4f4f4f' },
  imageStyle: {
    width: 38,
    height: 38,
    marginRight: 12,
  },
});

Toast.propTypes = {
  style: ViewPropTypes.style,
  position: PropTypes.oneOf(['top', 'center', 'bottom']),
  textStyle: Text.propTypes.style,
  positionValue: PropTypes.number,
  fadeInDuration: PropTypes.number,
  fadeOutDuration: PropTypes.number,
  opacity: PropTypes.number,
};

Toast.defaultProps = {
  position: 'bottom',
  textStyle: styles.text,
  positionValue: 160,
  fadeInDuration: 500,
  fadeOutDuration: 500,
  opacity: 1,
};
