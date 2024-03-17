import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStackNavigator from './navigation/MainStackNavigator';
import {StatusBar} from './ui/components';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;
