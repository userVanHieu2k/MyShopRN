import React from 'react';
import {View, Text, Button} from 'react-native';

const Detail = ({ route, navigation }) => {
    const { itemId, otherParam } = route.params;
    console.log(route.params.idName, route.params.user);
  return (
    <View>
      <Text>Detail {itemId}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Detail', {
            itemId: Math.floor(Math.random() * 100),
          })}
      />
      <Button
        title="Go to first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Detail;
