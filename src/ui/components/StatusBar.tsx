import React from 'react';
import {StatusBar as RNStatusBar, StatusBarProps} from 'react-native';

import colors from '../styles/colors';

export const StatusBar = ({
  barStyle = 'dark-content',
  backgroundColor = colors.WHITE,
  ...rest
}: StatusBarProps) => {
  return (
    <RNStatusBar
      barStyle={barStyle}
      backgroundColor={backgroundColor}
      {...rest}
    />
  );
};
