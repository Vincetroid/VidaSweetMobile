import React from 'react';
import { BackButton, ShoppingCartButton } from '@/components';
import { FontSizes, themeStyles } from '@/global-styles';

export const CommonNavigationOptions = Object.freeze({
  headerLeft: () => <BackButton />,
  headerRight: () => <ShoppingCartButton />,
  headerShadowVisible: true,
  headerStyle: {
    backgroundColor: themeStyles.background,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 16,
  },
  headerTintColor: themeStyles.black,
  headerTitleStyle: {
    flex: 1,
    fontSize: FontSizes.largeBigTitle,
    fontFamily: 'Bartleen Script', // This font causes on Android to be a bit upper on header
  },
  headerTitleAlign: 'center',
});
