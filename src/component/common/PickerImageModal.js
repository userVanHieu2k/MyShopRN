import React, { PureComponent } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import gui from '../../lib/gui';

export default class PickerImageModal extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    let { onCloseModal, isShowModal, onOpenLibrary, onOpenCamera } = this.props;
    return (
      <Modal
        isVisible={isShowModal}
        useNativeDriver={true}
        onModalHide={onCloseModal}
        style={styles.viewModal}>
        <View style={styles.viewContentModal}>
          <TouchableOpacity onPress={onOpenLibrary} style={styles.viewButtons}>
            <Text style={styles.textButton}>Chọn từ thư viện</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onOpenCamera}
            style={[
              styles.viewButtons,
              {
                marginTop: 6,
              },
            ]}>
            <Text style={styles.textButton}>Chụp ảnh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onCloseModal}
            style={[
              styles.viewButtons,
              {
                marginTop: 32,
                backgroundColor: '#fff',
              },
            ]}>
            <Text style={[styles.textButton, { color: '#000' }]}>Huỷ</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  viewModal: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  viewContentModal: {
    height: 180,
    width: gui.screenWidth - 44,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  viewButtons: {
    width: gui.screenWidth - 32,
    height: 48,
    backgroundColor: gui.mainColor,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
  },
});
