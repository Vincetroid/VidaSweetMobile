import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function Splash() {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.img}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'blue',
    flex: 1,
  },
  img: {
    width: 200,
    height: 200,
  },
});
