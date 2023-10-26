/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  Platform,
  Button,
  StyleSheet,
  useColorScheme,
  Alert,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/component/HomeScreen';
import Detail from './src/component/Detail';
import AboutScreen from './src/component/AboutScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Home = require('./src/assets/image/')

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);
  const data = [
    {id: 1, title: 'hello my friend'},
    {id: 2, title: 'hello my friend'},
    {id: 3, title: 'hello my friend'},
  ];

  const TabScreen = () => {
    return (
      <Tab.Navigator
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;

      //     if (route.name === 'Home') {
      //       iconName = focused
      //         ? 'ios-information-circle'
      //         : 'ios-information-circle-outline';
      //     } else if (route.name === 'Settings') {
      //       iconName = focused ? 'ios-list' : 'ios-list-outline';
      //     }

      //     // You can return any component that you like here!
      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      //   tabBarActiveTintColor: 'tomato',
      //   tabBarInactiveTintColor: 'gray',
      // })}
      >
        <Tab.Screen name='HomeTab' component={HomeScreen} options={{ headerShown: false }}/>
        <Tab.Screen name='AboutTab' component={AboutScreen} />
      </Tab.Navigator>
    )
  }
  


  return (
      <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Home" component={TabScreen} options={{
          title: 'My home',
          headerRight: () => (
            <Button
              onPress={() => Alert.alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
