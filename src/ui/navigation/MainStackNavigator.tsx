import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import TravelRequestScreen from '../screens/TravelRequestScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="TravelRequestScreen"
        component={TravelRequestScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
