import { StyleSheet } from 'react-native';
import { FontFamilies, FontSizes, themeStyles } from '@/global-styles';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  topViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomViewStyle: {
    width: '77%',
    alignSelf: 'center',
  },
  signInBtn: {
    backgroundColor: themeStyles.secondary,
    borderRadius: 30,
  },
  signInTextBtn: {
    fontSize: FontSizes.x_big,
    fontFamily: FontFamilies.latoItalic,
    textAlign: 'center',
    color: themeStyles.primary,
  },
  signUpBtn: {
    borderRadius: 20,
  },
  signUpTextBtn: {
    fontSize: FontSizes.big,
    fontFamily: FontFamilies.bartleenScript,
    textAlign: 'center',
    color: themeStyles.black,
  },
});
