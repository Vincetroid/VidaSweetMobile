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
  textInput: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 4,
    borderBottomColor: themeStyles.black,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: themeStyles.background,
  },
  phoneRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryPhoneCode: {
    flex: 0.35,
  },
  phoneNumber: {
    flex: 0.65,
  },
  specialIns: {
    height: 80,
    textAlign: 'left',
  },
});
