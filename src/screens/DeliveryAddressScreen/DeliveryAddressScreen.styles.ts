import { StyleSheet } from 'react-native';
import { FontFamilies, FontSizes, themeStyles } from '@/global-styles';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  selectAddress: {
    fontSize: FontSizes.big,
  },
  addAnAddressBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: FontSizes.big,
    marginBottom: 30,
  },
  bg: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addAnAddressTextBtn: {
    color: themeStyles.black,
    fontSize: FontSizes.big,
    marginLeft: 10,
    fontFamily: FontFamilies.latoItalic,
  },
});
