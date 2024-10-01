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
  checkIcon: {
    zIndex: 10,
    position: 'absolute',
    top: 10,
    left: 0,
    width: ICON_BTN_SIZE,
    height: ICON_BTN_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 9,
    color: themeStyles.success,
  },
  btnEyeIcon: {
    zIndex: 10,
    position: 'absolute',
    top: 5,
    right: 0,
    width: ICON_BTN_SIZE,
    height: ICON_BTN_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 9,
  },
  eyeIcon: {
    color: themeStyles.secondary,
  },
  // checkIcon: {
  //   color: themeStyles.success,
  // },
  noCheck: {
    color: themeStyles.disabled,
  },
  passwordRequirementTitle: {
    fontFamily: 'Lato Light',
    fontSize: FontSizes.medium,
    marginVertical: 4,
    color: themeStyles.text,
  },
  passwordRequirementListContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  passwordRequirementList: {
    fontFamily: 'Lato Light',
    fontSize: FontSizes.medium,
    color: themeStyles.text,
    marginLeft: 4,
  },
});

export default styles;
