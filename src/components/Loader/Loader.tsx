import React, { FunctionComponent } from 'react';
import { ActivityIndicator, ViewStyle } from 'react-native';
import { themeStyles } from '@/global-styles';

interface LoaderItem {
  size?: number | 'small' | 'large' | undefined;
  customStyle?: ViewStyle;
}

export const Loader: FunctionComponent<LoaderItem> = ({
  size = 'small',
  customStyle = {},
}) => {
  return (
    <ActivityIndicator
      color={themeStyles.tertiary}
      size={size}
      style={customStyle}
    />
  );
};
