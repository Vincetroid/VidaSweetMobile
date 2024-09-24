import { StyleSheet } from 'react-native';
import { FontFamilies, FontSizes, themeStyles } from '@/global-styles';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '70%',
  },
  topLabel: {
    alignSelf: 'center',
  },
  bottomLabel: {
    alignSelf: 'center',
  },
  topLabelText: {
    fontSize: FontSizes.x_big,
    fontFamily: FontFamilies.bartleenScript,
    color: themeStyles.black,
  },
  textInput: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 4,
    borderBottomColor: themeStyles.black,
    margin: 10,
    borderBottomWidth: 1,
    // color: themeStyles.text,
    color: 'yellow',
  },
  signInBtn: {
    marginTop: 26,
    paddingVertical: 10,
    backgroundColor: themeStyles.black,
    borderRadius: 20,
  },
  signInBtnText: {
    textAlign: 'center',
    color: themeStyles.white,
    fontSize: FontSizes.big,
    fontFamily: FontFamilies.latoBoldItalic,
  },
  bottomBtnText: {
    textAlign: 'center',
    color: themeStyles.black,
    fontSize: FontSizes.big,
    fontFamily: FontFamilies.latoItalic,
  },
  forgotYourPassword: {
    marginTop: 6,
    textAlign: 'center',
    color: themeStyles.black,
    fontSize: FontSizes.xx_medium,
    fontFamily: FontFamilies.latoItalic,
  },
});

export default styles;
