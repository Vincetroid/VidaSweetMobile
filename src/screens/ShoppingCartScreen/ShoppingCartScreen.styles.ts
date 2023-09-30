import { FontSizes } from '@/global-styles';
import { StyleSheet } from 'react-native';

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
});
