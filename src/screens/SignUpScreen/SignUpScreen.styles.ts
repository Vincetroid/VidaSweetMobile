import { StyleSheet } from 'react-native';
import { FontFamilies, FontSizes, themeStyles } from '@/global-styles';

const styles = StyleSheet.create({
  topLabel: {
    alignSelf: 'center',
  },
  topLabelText: {
    fontSize: FontSizes.big,
    fontFamily: FontFamilies.bartleenScript,
  },
  textInput: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 4,
    borderBottomColor: '#000',
    margin: 10,
    borderBottomWidth: 1,
    borderColor: themeStyles.background,
  },
  signUpBtn: {
    marginTop: 26,
    paddingVertical: 10,
    backgroundColor: 'black',
    borderRadius: 20,
  },
  signUpBtnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: FontSizes.big,
    fontFamily: FontFamilies.latoBoldItalic,
  },
  safeAreaContainer: {
    backgroundColor: 'aqua',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '70%',
  },
  signUpContainer: {
    backgroundColor: 'bisque',
  },
});

export default styles;
