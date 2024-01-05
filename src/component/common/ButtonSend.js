import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import debounce from 'lodash/debounce';

import gui from '../../lib/gui';
import {
  BoldText,
  MediumText,
  RegularText,
  SemiBoldText,
} from '../texts/index';

export default class ButtonSend extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { onPress, title } = this.props;
    return (
      <TouchableOpacity
        onPress={debounce(onPress, 500)}
        style={styles.viewButtonAction}>
        <LinearGradient
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0.5, y: 0 }}
          colors={[gui.bgButton, gui.bgButton]}
          style={styles.viewLinearButton}>
          <View style={styles.buttonSave}>
            <RegularText style={{ fontSize: 16, color: '#FFF' }}>
              {title}
            </RegularText>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  viewLinearButton: {
    height: 44,
    width: gui.screenWidth - 32,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#2E5DB9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButtonAction: {
    height: 54,
    width: gui.screenWidth,
    backgroundColor: '#fff',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    paddingTop: 3,
  },
  buttonSave: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
