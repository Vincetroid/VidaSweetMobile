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
  genderView: {
    // backgroundColor: 'aqua',
    // height: 30,
    marginTop: 12,
  },
  genderText: {
    color: 'grey',
    textAlign: 'center',
  },
  radioGroupView: {
    // backgroundColor: 'aqua',
    flexDirection: 'row',
    marginVertical: 10,
  },
  radioOptionView: {
    // backgroundColor: 'yellow',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  radioButton: {
    width: 16,
    height: 16,
    backgroundColor: themeStyles.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: themeStyles.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    width: 16,
    height: 16,
    backgroundColor: themeStyles.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: themeStyles.black,
  },
  radioText: {
    color: 'grey',
  },
});

export default styles;
