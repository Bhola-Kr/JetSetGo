import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, RefreshControl} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../styles/colors';
import {fetchFlights} from '../workflow/controller';

import {FlightProps, RootStackParamList} from '../../types';
import {FlightItem, Button, LoadingIndicator, SortModal} from '../components';

const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [flights, setFlights] = useState<FlightProps[]>([]);
  const [filteredFlights, setFilteredFlights] = useState<FlightProps[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetchFlights();
      setFlights(data);
      setFilteredFlights(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  const filterFlightsByAirline = (airline: string) => {
    const filtered = flights.filter(flight => flight.airline === airline);
    setFilteredFlights(filtered);
  };

  const sortFlightsByPrice = () => {
    // const sorted = [...filteredFlights].sort((a, b) => {
    //   return sortAscending ? a?.price - b?.price : b?.price - a?.price;
    // });
    // setSortAscending(!sortAscending);
    // setFilteredFlights(sorted);
  };

  const handleOpenSortModal = () => {
    setSortModalVisible(true);
  };

  const handleCloseSortModal = () => {
    setSortModalVisible(false);
  };

  const handleSelectSortOption = (option: string) => {
    setSelectedOption(option);
    setSortBy(option);
  };

  return (
    <LinearGradient
      colors={[colors.WHITE, colors.LIGHT]}
      style={styles.container}>
      <FlatList
        data={filteredFlights}
        renderItem={item => (
          <FlightItem
            item={item?.item}
            onPress={() => {
              navigation.navigate('TravelRequestScreen', {
                flightItem: item?.item,
              });
            }}
          />
        )}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setFlights([]);
              setFilteredFlights([]);
              setRefreshing(true);
              fetchData();
              setRefreshing(false);
            }}
            colors={[colors.PRIMARY]}
          />
        }
      />
      <SortModal
        visible={sortModalVisible}
        onClose={handleCloseSortModal}
        onSelectOption={handleSelectSortOption}
        options={['price', 'duration']}
        selectedOption={selectedOption}
      />
      <Button
        onPress={handleOpenSortModal}
        text={`Sort by ${sortBy ? sortBy : '...'}`}
        style={styles.sortButton}
      />

      <LoadingIndicator loading={isLoading} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_PRIMARY,
  },
  sortButton: {
    borderRadius: 0,
    backgroundColor: colors.PRIMARY,
  },
});

export default HomeScreen;
