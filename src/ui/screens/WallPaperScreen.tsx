import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import colors from '../styles/colors';
import {StatusBar} from '../components/StatusBar';

import {RootStackParamList} from '../../types';

const WallPaperScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <LinearGradient
      colors={[colors.BG_PRIMARY, colors.BG_SECONDARY]}
      style={styles.container}>
      <StatusBar
        backgroundColor={colors.BG_PRIMARY}
        barStyle={'light-content'}
      />

      <Text style={styles.versionText}>
        App Version: {require('../../../package.json').version}
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 180,
    height: 180,
  },
  versionText: {
    position: 'absolute',
    bottom: 20,
    color: colors.TEXT_SECONDARY,
  },
});

export default WallPaperScreen;
