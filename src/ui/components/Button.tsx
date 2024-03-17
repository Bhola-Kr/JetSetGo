import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import colors from '../styles/colors';
import {ButtonProps} from '../../types';

export const Button = ({onPress, text, style}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: colors.PRIMARY,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
