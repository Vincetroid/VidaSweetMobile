import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export const Splash = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.img}
        source={require('@/assets/vida-sweet-logo-black.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'ghostwhite',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
});
