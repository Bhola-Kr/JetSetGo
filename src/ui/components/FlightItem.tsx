import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';

import colors from '../styles/colors';
import {FlightItemProps} from '../../types';

export const FlightItem = ({item, onPress, style}: FlightItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      {Object.entries(item).map(([key, value]) => {
        if (key !== 'id') {
          return (
            <View key={key} style={styles.itemRow}>
              <Text numberOfLines={1} style={styles.keyText}>
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </Text>
              <Text numberOfLines={1} style={styles.valueText}>
                {'' + value}
              </Text>
            </View>
          );
        }
      })}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 4,
    padding: 16,
    backgroundColor: colors.WHITE,
  },
  itemRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  keyText: {
    flex: 1,
    fontWeight: 'bold',
    color: colors.TEXT_PRIMARY,
  },
  valueText: {
    flex: 1,
    color: colors.TEXT_PRIMARY,
  },
});
