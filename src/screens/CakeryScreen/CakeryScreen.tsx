import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CakeryScreen = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.bg2}>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>cackery Screen</Text>
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
