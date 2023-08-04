import { themeName, themeStyles } from '@/global-styles';
import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';

export const Splash = () => {
  // TAKE A LOOK TO DECIDE: https://react.dev/learn/you-might-not-need-an-effect
  let splashImage;
  if (themeName === 'light') {
    console.log('light');
    splashImage =
      require('@/assets/logos/vida-sweet-logo-black.png') as ImageSourcePropType;
  } else {
    console.log('dark');
    splashImage =
      require('@/assets/logos/vida-sweet-logo-gold.png') as ImageSourcePropType;
  }

  return (
    <View style={styles.wrapper}>
      <Image style={styles.img} source={splashImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: themeStyles.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
});
