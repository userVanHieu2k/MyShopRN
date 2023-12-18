import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRouter from './src/AppRouter';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
};

export default App;
