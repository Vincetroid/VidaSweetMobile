import { StyleSheet } from 'react-native';
import { FontFamilies, FontSizes, themeStyles } from '@/global-styles';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  emptyCardImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  emptyCartMsg: {
    fontFamily: 'Lato Medium',
    marginTop: 24,
    textAlign: 'center',
  },
  icon: {
    color: '#25D366',
    alignSelf: 'center',
  },
  cartSummaryTitle: {
    paddingLeft: 0,
    fontSize: FontSizes.x_big,
    marginTop: 10,
  },
  cartSummarySecondaryTitle: {
    fontSize: FontSizes.x_medium,
  },
  subtotalTitle: {
    fontFamily: 'Lato Light',
    paddingLeft: 16,
    fontSize: FontSizes.xx_medium,
    marginTop: 20,
  },
  ivaTitle: {
    fontFamily: 'Lato Light',
    paddingLeft: 16,
    fontSize: FontSizes.xx_medium,
    marginTop: 20,
  },
  ivaSecondaryTitle: {
    fontFamily: 'Lato Regular',
    fontSize: FontSizes.x_medium,
    alignSelf: 'flex-end',
  },
  totalTitle: {
    fontFamily: 'Lato Light',
    paddingLeft: 16,
    fontSize: FontSizes.xx_medium,
    marginTop: 20,
  },
  totalSecondaryTitle: {
    fontFamily: 'Lato Regular',
    fontSize: FontSizes.x_medium,
    alignSelf: 'flex-end',
  },
  securePaymentTitle: {
    fontFamily: 'Lato Light',
    fontSize: FontSizes.x_medium,
    marginTop: 20,
  },
  youForgotSomethingTitle: {
    paddingLeft: 0,
    fontSize: FontSizes.xx_medium,
    marginTop: 20,
  },
  youForgotSomethingSecondaryTitle: {
    fontSize: FontSizes.x_medium,
  },
  productCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  topViewStyle: {
    flex: 0.8,
  },
  bottomViewStyle: {
    flex: 0.2,
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
