import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import colors from '../styles/colors';
import {SortOptionProps} from '../../types';

export const SortOption = ({label, selected, onPress}: SortOptionProps) => {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <Text style={styles.optionText}>{label}</Text>
      {selected && <Text>✔️</Text>}
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
});
