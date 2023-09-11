import { FontSizes, themeStyles } from '@/global-styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  shoppingCartViewWrapper: {
    marginRight: 16,
  },
  icon: {
    color: '#25D366',
    alignSelf: 'center',
  },
  badgeProductsAddedView: {
    position: 'absolute',
    backgroundColor: themeStyles.secondary,
    right: -5,
    top: -5,
    zIndex: 1,
    borderRadius: 50,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeProductsAddedText: {
    color: themeStyles.primary,
    alignSelf: 'center',
    fontSize: FontSizes.x_small,
  },
});
