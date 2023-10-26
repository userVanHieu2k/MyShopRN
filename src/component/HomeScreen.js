import React, {useEffect} from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  // React.useEffect(() => {
  //     if (route.params?.post) {
  //         // Post updated, do something with `route.params.post`
  //         // For example, send the post to the server
  //       }
  // }, [route.params?.post])
  return (
    <View>
      <Text>Hieu Nguyen Van </Text>
      {/* <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text> */}
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Detail', {
            user: {
              id: 'jane',
              firstName: 'Jane',
              lastName: 'Done',
              age: 25,
            }
          });
        }}
      />
    </View>
  );
};

export default HomeScreen;
