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
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5,
  },
  signInBtn: {
    margin: 10,
    padding: 16,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  signInBtnText: {
    textAlign: 'center',
    color: 'white',
  },
  bottomBtnText: {
    textAlign: 'center',
    color: themeStyles.black,
    fontSize: FontSizes.big,
    fontFamily: FontFamilies.latoItalic,
  },
});

export default styles;
