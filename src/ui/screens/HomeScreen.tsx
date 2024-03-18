import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  RefreshControl,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import colors from '../styles/colors';
import {fetchFlights} from '../workflow/controller';

import {FlightProps, RootStackParamList} from '../../types';
import {FlightItem, Button, LoadingIndicator, SortModal} from '../components';
import {filterFlightsByAirline, sortFlightsByPrice} from '../utils/utils';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const flights = useRef<FlightProps[]>([]);

  const [filteredFlights, setFilteredFlights] = useState<FlightProps[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetchFlights();
      flights.current = data;
      setFilteredFlights(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  const onApply = () => {
    setSelectedOption(selectedOption);
    const sortedFlights = sortFlightsByPrice(filteredFlights, selectedOption);
    setFilteredFlights(sortedFlights);
  };

  const handleSearch = (query: string) => {
    const filteredFlights = filterFlightsByAirline(flights.current, query);
    setFilteredFlights(filteredFlights);
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredFlights(flights.current);
  };

  return (
    <LinearGradient
      colors={[colors.WHITE, colors.LIGHT]}
      style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          maxLength={20}
          numberOfLines={1}
          style={styles.searchInput}
          placeholder="Search by airline..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {searchQuery !== '' && (
          <TouchableOpacity style={styles.clearButton} onPress={clearSearch}>
            <Image
              source={require('../assets/cross.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
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
              flights.current = [];
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
        selectedOption={selectedOption}
        onClose={() => {
          setSortModalVisible(false);
        }}
        onSelectOption={setSelectedOption}
        onApply={onApply}
      />
      <Button
        onPress={() => {
          setSortModalVisible(true);
        }}
        text={`Sort by Price`}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 10,
    borderColor: colors.TEXT_SECONDARY,
    borderRadius: 4,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    color: colors.TEXT_PRIMARY,
    paddingHorizontal: 10,
    height: 45,
  },
  clearButton: {
    padding: 8,
  },
  sortButton: {
    borderRadius: 0,
    backgroundColor: colors.PRIMARY,
  },
  image: {
    width: 18,
    height: 18,
    tintColor: colors.PRIMARY,
  },
});

export default HomeScreen;
