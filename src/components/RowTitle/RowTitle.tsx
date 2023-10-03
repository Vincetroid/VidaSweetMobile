import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { FontSizes, gStyles, themeStyles } from '@/global-styles';

interface RowTitleItem {
  title: string;
  secondaryText?: string;
  centered?: boolean;
  styleTextTitle?: TextStyle;
  styleSecondaryTextTitle?: TextStyle;
}

export const RowTitle = ({
  title,
  secondaryText,
  centered = false,
  styleTextTitle = {},
  styleSecondaryTextTitle = {},
}: RowTitleItem): JSX.Element => {
  const centeredStyle = centered ? styles.textCenter : {};

  return secondaryText ? (
    <View
      style={[
        styles.secondaryTextWrapper,
        centeredStyle as StyleProp<ViewStyle>,
      ]}>
      <Text style={[styles.title, styleTextTitle]}>{title}</Text>
      <Text style={[styles.secondaryTitle, styleSecondaryTextTitle]}>
        {secondaryText}
      </Text>
    </View>
  ) : (
    <View style={[styles.wrapper, centeredStyle as StyleProp<ViewStyle>]}>
      <Text style={[styles.title, styleTextTitle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
  },
  secondaryTextWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    paddingLeft: 16,
    fontFamily: 'Bartleen Script',
    fontSize: FontSizes.large,
    color: themeStyles.black,
  },
  secondaryTitle: {
    fontFamily: 'Lato Light',
    fontSize: FontSizes.x_medium,
    color: themeStyles.black,
  },
  textCenter: {
    textAlign: 'center',
    alignSelf: 'center',
  },
});
