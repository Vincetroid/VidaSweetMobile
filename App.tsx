import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// const App: JSX.Element = () => {
const App = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bg2}></ScrollView>
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

export default App;
