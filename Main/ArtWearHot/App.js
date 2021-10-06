import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/router/index';


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
