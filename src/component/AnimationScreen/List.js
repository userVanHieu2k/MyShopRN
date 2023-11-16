import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import gui from '../../lib/gui';
import useFetch from '../customHook/UseFetch';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const List = () => {
  const [data1] = useFetch('https://jsonplaceholder.typicode.com/todos');
  const data = [
    {name: 'hieu', age: 19},
    {name: 'hanh', age: 19},
    {name: 'huy', age: 19},
    {name: 'gam', age: 19},
    {name: 'hoang', age: 19},
  ];
  const flastListRef = useRef(null);
  const [index, setIndex] = React.useState(0);
  const _colors = {
    active: `#FCD259ff`,
    inactive: `#FCD25900`,
  };
  const _spacing = 10;
  console.log('data', data1);
  useEffect(() => {
    flastListRef.current?.scrollToIndex({
      index,
      animated: true,
    });
  }, []);

  renderItem = item => {
    console.log('item', item);
    return (
      <TouchableOpacity onPress={() => {}}>
        <View
          style={{
            marginRight: _spacing,
            padding: _spacing,
            borderWidth: 2,
            borderColor: _colors.active,
            borderRadius: 12,
            backgroundColor:
              index == item.index ? _colors.active : _colors.inactive,
          }}>
          <Text style={{color: '#36303F', fontWeight: '700'}}>
            {item.item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        style={{flexGrow: 0}}
        ref={flastListRef}
        initialScrollIndex={index}
        data={data}
        keyExtractor={item => item.key}
        contentContainerStyle={{paddingLeft: _spacing}}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={item => renderItem(item)}
      />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: _spacing * 10,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: '#36303F',
              fontWeight: '700',
              marginBottom: _spacing,
            }}>
            Scroll position
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: gui.screenWidth / 2,
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}>
                <FontAwesome name="align-left" size={24} color="#36303F" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}>
                <FontAwesome
                  name="align-horizontal-middle"
                  size={24}
                  color="#36303F"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                }}>
                <FontAwesome name="align-right" size={24} color="#36303F" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: '#36303F', fontWeight: '700', marginBottom: 10}}>
            Navigation
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: gui.screenWidth / 2,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                if (index === 0) {
                  return;
                }
                setIndex(index - 1);
              }}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}>
                <FontAwesome name="arrow-left" size={24} color="#36303F" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (index === data.length - 1) {
                  return;
                }
                setIndex(index + 1);
              }}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                }}>
                <FontAwesome name="arrow-right" size={24} color="#36303F" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default List;
