import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import colors from '../styles/colors';

export const LoadingIndicator = ({loading}: {loading: boolean}) => {
  return loading ? (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.PRIMARY} />
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: colors.WHITE,
    padding: 20,
    borderRadius: 10,
  },
});
