import React from 'react';
import {StyleSheet, Image, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../styles/colors';
import {FlightItem, Button} from '../components';

const TravelRequestScreen = ({route}: any) => {
  const {flightItem} = route.params;

  return (
    <LinearGradient
      colors={[colors.WHITE, colors.LIGHT]}
      style={styles.container}>
      <Image
        source={require('../assets/flight.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <FlightItem item={flightItem} />
      <Button
        style={styles.button}
        onPress={() => {
          Alert.alert('Request Noticed', 'Your request has been noticed.');
        }}
        text={'Travel Request'}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_PRIMARY,
  },
  image: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginVertical: 25,
  },
  button: {
    marginTop: 50,
    marginHorizontal: 20,
  },
});

export default TravelRequestScreen;
