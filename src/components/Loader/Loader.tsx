import React, { FunctionComponent } from 'react';
import { ActivityIndicator, ViewStyle } from 'react-native';
import { themeStyles } from '@/global-styles';

interface LoaderItem {
  size?: number | 'small' | 'large' | undefined;
  customStyle?: ViewStyle;
  color: string;
}

export const Loader: FunctionComponent<LoaderItem> = ({
  size = 'small',
  customStyle = {},
  color = themeStyles.tertiary,
}) => {
  return <ActivityIndicator color={color} size={size} style={customStyle} />;
};
