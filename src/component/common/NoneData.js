import React, { PureComponent } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import gui from '../../lib/gui';

export default class NoneData extends PureComponent {
  render() {
    let noneSearch = require('../../assets/images/empty.png');
    let textNone = 'CHƯA CÓ SẢN PHẨM.';
    return (
      <View style={styles.bodyContent}>
        <Image source={noneSearch} />
        <Text style={styles.textCommon}>{textNone}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCommon: {
    color: gui.mainColor,
    fontSize: 15,
    fontWeight: '700',
    marginTop: 58,
  },
});
