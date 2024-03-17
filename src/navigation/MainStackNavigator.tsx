import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../ui/screens/HomeScreen';
import TravelRequestScreen from '../ui/screens/TravelRequestScreen';
import SplashScreen from '../ui/screens/SplashScreen';
import colors from '../ui/styles/colors';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.WHITE},
        headerShadowVisible: false,
      }}
      initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'JetSetGo'}}
      />
      <Stack.Screen
        name="TravelRequestScreen"
        component={TravelRequestScreen}
        options={{title: 'Travel Request'}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
