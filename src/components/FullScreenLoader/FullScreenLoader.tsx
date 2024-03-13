import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { themeStyles } from '@/global-styles';
import { styles } from './FullScreenLoader.styles';

export const FullScreenLoader = () => {
  return (
    <View style={styles.wrapperAbsolute}>
      <View style={styles.wrapper}>
        <ActivityIndicator color={themeStyles.tertiary} size={'large'} />
      </View>
    </View>
  );
};
