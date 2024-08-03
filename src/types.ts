import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';

export type RootStackParamList = {
  TravelRequestScreen: {flightItem: FlightProps};
  HomeScreen: undefined;
  SplashScreen: undefined;
  WallPaperScreen: undefined;
};

createNativeStackNavigator<RootStackParamList>();

export type AppColors = {
  PRIMARY: string;
  SECONDARY: string;
  LIGHT: string;
  WARNING: string;
  SUCCESS: string;
  WHITE: string;
  LINE: string;
  BLACK: string;
  BG_PRIMARY: string;
  BG_SECONDARY: string;
  TEXT_PRIMARY: string;
  TEXT_SECONDARY: string;
};

export type FlightProps = {
  id: number;
  gate?: string;
  price?: number;
  origin?: string;
  airline?: string;
  aircraft?: string;
  duration?: string;
  arrivalTime?: string;
  destination?: string;
  flightNumber?: string;
  departureTime?: string;
  seatsAvailable?: number;
};

export type SortModalProps = {
  visible: boolean;
  onClose: () => void;
  onApply: () => void;
  onSelectOption: (option: string) => void;
  selectedOption: string;
};

export type FlightItemProps = {
  item: FlightProps;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

export interface ButtonProps {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
}

export interface SortOptionProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}
