import { StyleSheet } from 'react-native';
import { FontSizes, themeStyles } from '@/global-styles';

const ICON_BTN_SIZE = 16;

export const styles = StyleSheet.create({
  passwordRequirementTitle: {
    fontFamily: 'Lato Light',
    fontSize: FontSizes.medium,
    marginVertical: 4,
    color: themeStyles.text,
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
  noCheck: {
    color: themeStyles.disabled,
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
  textInput: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 8,
    paddingHorizontal: 20,
    borderBottomColor: themeStyles.black,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
