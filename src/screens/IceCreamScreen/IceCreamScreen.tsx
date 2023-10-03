import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const IceCreamScreen = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.bg2}>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>ICE CREAM Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'red',
  },
  bg2: {
    backgroundColor: 'green',
  },
});
