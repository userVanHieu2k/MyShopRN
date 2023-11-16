import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRouter from './src/AppRouter';

const App = () => {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
};

export default App;
