import { View, ViewStyle } from 'react-native';
import React, { FunctionComponent } from 'react';
import { styles } from './Divider.styles';

interface DividerItem {
  vertical?: Boolean;
  height?: number | string;
  customStyle?: ViewStyle;
}

export const Divider: FunctionComponent<DividerItem> = ({
  vertical,
  height,
  customStyle,
}) => {
  return (
    <View
      style={
        vertical
          ? [
              styles.verticalDivider,
              { height: height ? height : '100%' },
              customStyle,
            ]
          : [styles.divider, customStyle]
      }
    />
  );
};
