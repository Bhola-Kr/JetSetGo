import React from 'react';
import {View, Modal, TouchableOpacity, Text, StyleSheet} from 'react-native';

import colors from '../styles/colors';
import {SortModalProps} from '../../types';

import {SortOption} from './SortOption';
import {StatusBar} from './StatusBar';

export const SortModal = ({
  visible,
  onClose,
  onApply,
  onSelectOption,
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
          <Text style={styles.sortText}>Sort By Price</Text>
          <SortOption
            label={`Sort by Price (Low to High)`}
            selected={selectedOption === 'priceLowToHigh'}
            onPress={() => onSelectOption('priceLowToHigh')}
          />
          <SortOption
            label={`Sort by Price (High to Low)`}
            selected={selectedOption === 'priceHighToLow'}
            onPress={() => onSelectOption('priceHighToLow')}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => {
                onClose();
                onApply();
              }}>
              <Text style={styles.buttonText}>Apply</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
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
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 10,
  },
  applyButton: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 16,
  },
  sortText: {
    color: colors.PRIMARY,
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 25,
    paddingTop: 10,
  },
});
