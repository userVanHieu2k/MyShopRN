import React from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';
import gui from '../../lib/gui'


 const List = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          style={{ flexGrow: 0 }}
          data={data}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{ paddingLeft: _spacing }}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item, index: fIndex }) => {
            return (
              <TouchableOpacity onPress={() => {}}>
                <View
                  style={{
                    marginRight: _spacing,
                    padding: _spacing,
                    borderWidth: 2,
                    borderColor: _colors.active,
                    borderRadius: 12,
                    backgroundColor: _colors.inactive,
                  }}>
                  <Text style={{ color: '#36303F', fontWeight: '700' }}>
                    {item.job}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: _spacing * 10,
          }}>
          <View style={{ alignItems: 'center' }}>
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
                width: width / 2,
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
                  <Entypo name='align-left' size={24} color='#36303F' />
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
                  <Entypo
                    name='align-horizontal-middle'
                    size={24}
                    color='#36303F'
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
                  <Entypo name='align-right' size={24} color='#36303F' />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{ color: '#36303F', fontWeight: '700', marginBottom: 10 }}>
              Navigation
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: width / 2,
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
                  <Feather name='arrow-left' size={24} color='#36303F' />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View
                  style={{
                    padding: _spacing,
                    backgroundColor: '#FCD259',
                    borderRadius: _spacing,
                  }}>
                  <Feather name='arrow-right' size={24} color='#36303F' />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  export default List;