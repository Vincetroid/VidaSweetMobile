import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { themeName, themeStyles } from '@/global-styles';

interface SplashProps {
  label?: string;
}

export const Splash = ({ label }: SplashProps) => {
  // TAKE A LOOK TO DECIDE: https://react.dev/learn/you-might-not-need-an-effect
  let splashImage;
  if (themeName === 'light') {
    splashImage =
      require('@/assets/logos/vida-sweet-logo-black.png') as ImageSourcePropType;
  } else {
    splashImage =
      require('@/assets/logos/vida-sweet-logo-gold.png') as ImageSourcePropType;
  }

  return (
    <View style={styles.wrapper}>
      <Image style={styles.img} source={splashImage} />
      {label ? (
        <View>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
  labelText: {
    color: themeStyles.tertiary,
  },
});
