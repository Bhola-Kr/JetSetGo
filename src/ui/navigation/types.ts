import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  TravelRequestScreen: undefined;
  HomeScreen: undefined;
  SplashScreen: undefined;
};

createNativeStackNavigator<RootStackParamList>();
