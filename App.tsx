import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.bg}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.bg2}></ScrollView>
      </SafeAreaView>
    </NavigationContainer>
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
