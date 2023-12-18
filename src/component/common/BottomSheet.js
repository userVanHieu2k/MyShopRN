import React, { Children, useRef, useState } from 'react';
import {
  Animated,
  PanResponder,
  Platform,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import gui from '../../lib/gui';

const WINDOW_HEIGHT = gui.screenHeight;
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT - 50;
const BOTTOM_SHEET_MIN_HEIGHT = 110; // WINDOW_HEIGHT * 0.1;
const MAX_UPWARD_TRANSLATE_Y =
  BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT; // negative number;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 40;

const BottomSheet = (props) => {
  const [actionDirection, setActionDirection] = useState('currentDown');

  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;

        if (gesture.dy > 0) {
          // dragging down
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation('up');
          } else {
            springAnimation('down');
          }
        } else {
          // dragging up
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation('down');
          } else {
            springAnimation('up');
          }
        }
      },
    }),
  ).current;

  const springAnimation = (direction) => {
    // console.log('direction', direction);
    if (direction === 'up') {
      setActionDirection('currentUp');
      props.onCurrentUp && props.onCurrentUp();
    }
    if (direction === 'down') {
      setActionDirection('currentDown');
    }
    lastGestureDy.current =
      direction === 'down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const textDrag =
    actionDirection === 'currentDown'
      ? 'Vuốt lên để xem tem đã quyét'
      : 'Vuốt xuống để quét thêm';
  const source = require('../../assets/images/icon_arrow_up.png');
  const transform =
    actionDirection === 'currentDown'
      ? [{ rotate: '0deg' }]
      : [{ rotate: '180deg' }];

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
        <View style={styles.draggableArea} {...panResponder.panHandlers}>
          {/* <View style={styles.dragHandle} /> */}
          <View style={styles.viewHeader}>
            <Text style={{ color: '#333333', fontSize: 15 }}>{textDrag}</Text>
            <Image
              source={source}
              style={{ height: 15, width: 15, transform: transform }}
            />
          </View>
        </View>
        {props.children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    // ...Platform.select({
    //   android: { elevation: 3 },
    //   ios: {
    //     shadowColor: '#a8bed2',
    //     shadowOpacity: 1,
    //     shadowRadius: 6,
    //     shadowOffset: {
    //       width: 2,
    //       height: 2,
    //     },
    //   },
    // }),
    backgroundColor: 'white',
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
  },
  draggableArea: {
    width: 132,
    height: 32,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: '#d3d3d3',
    borderRadius: 12,
  },
  viewHeader: {
    flexDirection: 'row',
    width: gui.screenWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 13,
  },
});

export default BottomSheet;
