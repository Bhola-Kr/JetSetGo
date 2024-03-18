import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

import colors from '../styles/colors';
import {SortOptionProps} from '../../types';

export const SortOption = ({label, selected, onPress}: SortOptionProps) => {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <Text style={styles.optionText}>{label}</Text>
      <View style={styles.checkmarkContainer}>
        {selected && <Text style={styles.checkmark}>✔️</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.LINE,
  },
  optionText: {
    fontSize: 16,
    marginRight: 10,
  },
  checkmarkContainer: {
    position: 'absolute',
    right: -10,
  },
  checkmark: {
    fontSize: 16,
    color: colors.SUCCESS,
  },
});
