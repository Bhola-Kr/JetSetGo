import {Alert} from 'react-native';
import {FlightProps} from '../../types';

const API_URL = 'https://api.npoint.io/378e02e8e732bb1ac55b';

export const fetchFlights = async (): Promise<FlightProps[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      Alert.alert('Info!', 'Failed to fetch flights');
      throw new Error('Failed to fetch flights');
    }
    const data: FlightProps[] = await response.json();
    return data;
  } catch (error) {
    Alert.alert('Info!', 'Error fetching flights: ' + error);
    console.error('Error fetching flights:', error);
    throw error;
  }
};
