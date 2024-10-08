import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, OrderInProgressIndicator } from '@/components';

export const CakeryScreen = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <OrderInProgressIndicator showOrderInProgress />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.bg2}>
        <View style={styles.viewWrapper}>
          <Text>cackery Screen</Text>
          <Button
            title="tit"
            onPress={() => {}}
            // buttonTextStyle={styles.signOutTextBtn}
          />
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
  viewWrapper: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
