import { StyleSheet } from 'react-native';
import { FontFamilies, FontSizes, themeStyles } from '@/global-styles';

// TODO: Tal vez pasarlo a utils
const ICON_BTN_SIZE = 16;

const styles = StyleSheet.create({
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
    paddingBottom: 8,
    paddingHorizontal: 20,
    borderBottomColor: themeStyles.black,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  signUpBtn: {
    marginTop: 26,
    paddingVertical: 10,
    backgroundColor: themeStyles.black,
    borderRadius: 20,
  },
  signUpBtnText: {
    textAlign: 'center',
    color: themeStyles.white,
    fontSize: FontSizes.big,
    fontFamily: FontFamilies.latoBoldItalic,
  },
  safeAreaContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '70%',
  },
  signUpContainer: {},
  bottomBtnText: {
    textAlign: 'center',
    color: themeStyles.black,
    fontSize: FontSizes.big,
    fontFamily: FontFamilies.latoItalic,
  },
});

export default styles;
