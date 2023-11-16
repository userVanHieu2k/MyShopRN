import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl,
  ImageBackground,
} from 'react-native';
import gui from './gui';

const NoData = () => {
  const greenTea = require('../assets/images/greenTea.png');
  return (
    <View style={styles.mainNoData}>
      <Image source={greenTea} style={{ width: 155, height: 155 }} />
      <Text style={{ fontSize: 16, fontWeight: '500' }}>Không có dữ liệu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainNoData: {
    marginHorizontal: 43,
    width: gui.screenWidth - 86,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoData;
