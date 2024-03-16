import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TravelRequestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'Travel Request Screen'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default TravelRequestScreen;
