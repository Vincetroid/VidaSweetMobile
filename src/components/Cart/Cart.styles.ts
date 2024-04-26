import { StyleSheet } from 'react-native';
import { Colors, FontFamilies, FontSizes } from '@/global-styles';

export const styles = StyleSheet.create({
  btn: {
    padding: 12,
    width: '100%',
  },
  btnText: {
    fontSize: FontSizes.x_big,
    fontFamily: 'Bartleen Script',
    textAlign: 'center',
    color: Colors.gold,
  },
  cartSummaryTitle: {
    paddingLeft: 0,
    // fontSize: FontSizes.x_big,
    // fontFamily: FontFamilies.latoRegular,
    marginTop: 2,

    // fontFamily: 'Lato Light',
    // paddingLeft: 16,
    // fontSize: FontSizes.xx_medium,
    // marginTop: 20,

    fontSize: FontSizes.xx_medium,
    marginBottom: 10,
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
    fontFamily: 'Lato Bold',
    // fontSize: FontSizes.xx_medium,
    marginVertical: 2,
    // fontFamily: 'Lato Light',
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
    margin: 16,
  },
  icon: {
    color: '#25D366',
    alignSelf: 'center',
  },
});
