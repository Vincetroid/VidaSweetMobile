import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface RowTitleItem {
  title: string;
}

export const RowTitle = ({ title }: RowTitleItem): JSX.Element => {
  return (
    <View style={[styles.wrapper]}>
      <Text style={styles.addText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
  },
  addText: {
    paddingLeft: 16,
  },
});
