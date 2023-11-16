import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './component/HomeScreen';
import Detail from './component/Detail';
import AboutScreen from './component/AboutScreen';
import List from './component/AnimationScreen/List';
import Momo from './component/AnimationScreen/momo';
import Demo from './component/panResponder/demo';
import ImagePr from './component/panResponder/dragImage';
import {Image, StyleSheet, Text, View} from 'react-native';
import gui from './lib/gui';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreen = () => {
  const artical = require('./assets/image/artical.png');
  const articalBlack = require('./assets/image/articalBlack.png');
  const canhTac = require('./assets/image/menu-boardnhatKyCanhTac.png');
  const canhTacActive = require('./assets/image/menu-boardcanhTacActive.png');
  const home = require('./assets/image/home-2home.png');
  const homeActive = require('./assets/image/home-2homeActive.png');
  const category = require('./assets/image/category.png');
  const categoryActive = require('./assets/image/categoryactive.png');
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          ...styles.tabStyle,
          ...styles.shadown,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.mainIcon}>
              {focused ? <View style={styles.active}></View> : null}
              <Image
                source={focused ? homeActive : home}
                resizeMode="contain"
                style={styles.imageIcon}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Find"
        component={Detail}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.mainIcon}>
              {focused ? <View style={styles.active}></View> : null}
              <Image
                source={focused ? artical : articalBlack}
                resizeMode="contain"
                style={styles.imageIcon}
              />
            </View>
          ),

          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Post"
        component={Momo}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.mainIcon}>
              {focused ? <View style={styles.active}></View> : null}
              <Image
                source={focused ? canhTacActive : canhTac}
                resizeMode="contain"
                style={styles.imageIcon}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ImagePr}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.mainIcon}>
              {focused ? <View style={styles.active}></View> : null}
              <Image
                source={focused ? categoryActive : category}
                resizeMode="contain"
                style={styles.imageIcon}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
const AppRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabScreen"
        component={TabScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  mainIcon: {
    width: gui.screenWidth / 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  imageIcon: {width: 20, height: 20},
  active: {
    width: 30,
    height: 2,
    backgroundColor: gui.mainColor,
    position: 'absolute',
    top: 0,
  },
  tabStyle: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 90,
  },
  shadown: {
    shadowColor: '7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 4,
  },
});

export default AppRouter;
