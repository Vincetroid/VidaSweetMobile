import { FontSizes, gStyles } from '@/global-styles';
import React from 'react';
import { View, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';

interface RowTitleItem {
  title: string;
  centered?: boolean;
}

export const RowTitle = ({
  title,
  centered = false,
}: RowTitleItem): JSX.Element => {
  const centeredStyle = centered ? styles.textCenter : {};

  return (
    <View style={[styles.wrapper, centeredStyle as StyleProp<ViewStyle>]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
  },
  title: {
    paddingLeft: 16,
    fontFamily: 'Bartleen Script',
    fontSize: FontSizes.bigTitle,
  },
  textCenter: {
    textAlign: 'center',
    color: 'blue',
    alignSelf: 'center',
  },
});
