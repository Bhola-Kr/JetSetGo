import React from 'react';
import {View, Modal, TouchableOpacity, Text, StyleSheet} from 'react-native';

import colors from '../styles/colors';
import {SortModalProps} from '../../types';

import {SortOption} from './SortOption';
import {StatusBar} from './StatusBar';

export const SortModal = ({
  visible,
  onClose,
  onSelectOption,
  options,
  selectedOption,
}: SortModalProps) => {
  return (
    <Modal animationType={'fade'} transparent visible={visible}>
      <StatusBar
        backgroundColor={colors.TEXT_SECONDARY}
        barStyle={'light-content'}
      />
      <TouchableOpacity style={styles.modalContainer} onPress={onClose}>
        <View style={styles.modalContent}>
          {options.map(option => (
            <SortOption
              key={option}
              label={`Sort by ${option}`}
              selected={selectedOption === option}
              onPress={() => onSelectOption(option)}
            />
          ))}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.WHITE,
    padding: 20,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'stretch',
    backgroundColor: colors.PRIMARY,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: colors.WHITE,
    fontSize: 16,
  },
});
