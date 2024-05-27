import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Products } from '@/components';

export const IceCreamScreen = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.bg2}>
        <Products />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg: {
    // backgroundColor: 'red',
  },
  bg2: {
    // backgroundColor: 'green',
  },
});
