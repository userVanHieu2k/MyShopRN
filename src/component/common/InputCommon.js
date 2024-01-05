import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import gui from '../../lib/gui';
import { FloatingLabelInput } from 'react-native-floating-label-input';
export default class InputCommon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View>{this.renderInput()}</View>;
  }

  renderInput = () => {
    let { label, inputStyle, isRequire } = this.props;
    return (
      <View 
      // style={[styles.viewItemInput, inputStyle]}
      style={styles.viewInput}
      >
        {/* <Text style={styles.textLabel}>
          {label}
          {isRequire ? <Text style={{ color: 'red' }}>*</Text> : null}
        </Text> */}
        {/* <TextInput
          placeholderTextColor={'#b5b5b5'}
          autoCapitalize="none"
          underlineColorAndroid={'transparent'}
          autoCorrect={false}
          // style={[styles.viewItemInput, inputStyle]}
          {...this.props}
        /> */}
          <FloatingLabelInput
          placeholderTextColor={'#b5b5b5'}
          autoCapitalize="none"
          underlineColorAndroid={'transparent'}
          autoCorrect={false}
          containerStyles={{
            backgroundColor:'#FFFFFF',
            borderRadius: 6,
            height:56,
          }}
          labelStyles={{
            marginLeft:5
          }}
          inputStyles={{
            color:'#000',
            fontSize: 16,
            marginLeft:10,
          }}
          {...this.props}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  viewInput: {
    width: gui.screenWidth - 40,
    marginTop: 17,
  },
  textLabel: {
    color: '#000',
    fontSize: 16,
    marginBottom: 5,
  },
  viewItemInput: {
    backgroundColor:'#FFFFFF',
    height: 57,
    marginTop: 25,
    width: gui.screenWidth - 40,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#a8a8a8',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#171717',
    paddingVertical: 0,
    paddingLeft: 14,
  },
});
