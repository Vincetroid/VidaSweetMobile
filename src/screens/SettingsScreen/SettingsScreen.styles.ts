import { StyleSheet } from 'react-native';
import { FontFamilies, FontSizes, themeStyles } from '@/global-styles';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutTextBtn: {
    color: themeStyles.black,
    fontSize: FontSizes.big,
    fontFamily: FontFamilies.latoItalic,
    marginLeft: 10,
  },
  signOutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themeStyles.secondary,
    fontSize: FontSizes.big,
    fontFamily: FontFamilies.latoItalic,
  },
});

export default styles;
