import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';

const {height} = Dimensions.get('window');

const SelectDropdown = props => {
  const {
    title,
    titleStyle,
    data,
    value,
    setValue,
    styleContainer,
    placeholder,
    required,
  } = props;
  const [visible, setVisible] = useState(false);
  const [keyword, setKeyword] = useState('');

  const filterData = () => {
    let _keyword = keyword.toLowerCase();
    // console.log('dssd', data);
    return data.filter(item => {
      return item.toLowerCase().includes(_keyword);
    });
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={async () => {
          setValue(item);
          setVisible(false);
        }}
        style={[
          styles.itemContainer,
          {
            backgroundColor:
              item?.label === value || item?.type === value
                ? '#eef2f6'
                : 'transparent',
          },
        ]}>
        <Text style={styles.itemLabel}>{item || ''}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[{marginTop: 20}, styleContainer]}>
      <Text style={[styles.title, titleStyle]}>
        {title}
        {required && <Text style={styles.require}>{' *'}</Text>}
      </Text>
      {/* <View
        style={{ padding: 24, flex: 1, justifyContent: 'space-around' }}></View> */}
      <TouchableOpacity
        style={[styles.containerButton]}
        onPress={() => {
          Keyboard.dismiss();
          setTimeout(() => {
            setVisible(true);
          }, 100);
        }}>
        <Text style={[styles.text, !value && styles.grayTxt]}>
          {value ? value : placeholder}
        </Text>
        <Image
          source={require('../../assets/image/icon_drop.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      {props.showError && (
        <Text style={{fontSize: 12, color: 'red', marginTop: 2}}>
          {props.errorMessage}
        </Text>
      )}
      <KeyboardAvoidingView enabled={false} style={{flex: 1}}>
        <Modal
          transparent={true}
          visible={visible}
          onBackdropPress={() => setVisible(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.selectContainer}>
                <View style={styles.label}>
                  <Text style={styles.labelText}>{title}</Text>
                  <TouchableOpacity
                    style={{position: 'absolute', right: 20}}
                    onPress={() => setVisible(false)}>
                    <Text style={{fontSize: 12, color: 'red', marginTop: 2}}>
                      Đóng
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.divider} />
                <View style={styles.inputContainer}>
                  <Image
                    source={require('../../assets/image/icon_search.png')}
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setKeyword(text)}
                    value={keyword}
                    placeholder={'Tìm kiếm'}
                    placeholderTextColor={'#9D9D9D'}
                  />
                  {keyword && keyword.length > 0 ? (
                    <TouchableOpacity
                      style={{padding: 5}}
                      onPress={() => setKeyword('')}>
                      <Text style={{fontSize: 12, color: 'red', marginTop: 2}}>
                        Close
                      </Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
                <FlatList
                  data={filterData()}
                  renderItem={renderItem}
                  keyExtractor={(_item, index) => 'item' + index}
                  showsVerticalScrollIndicator={false}
                  style={{marginTop: 15}}
                />
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  text: {
    flex: 1,
    fontWeight: '400',
    fontSize: 16,
    color: '#000000',
  },
  selectContainer: {
    height: height - 100,
  },
  label: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#ccc',
  },
  itemContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLabel: {
    color: '#030303',
    fontSize: 15,
    fontWeight: '500',
    flex: 1,
  },
  icon: {
    width: 11,
    height: 11,
    resizeMode: 'contain',
  },
  grayTxt: {
    color: '#0000005C',
  },
  centeredView: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    // justifyContent: 'flex-start',
    marginTop: 100,
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: '400',
    color: '#5A5B73',
    fontSize: 14,
  },
  require: {
    color: 'red',
  },
  inputContainer: {
    backgroundColor: '#f2f2f2',
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 14,
    color: '#030303',
    padding: 0,
    flex: 1,
    marginLeft: 5,
  },
});

export default SelectDropdown;
