import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { setOrder, setProductOrder } from '@/fb/queries';
import { Colors, FontFamilies, themeStyles } from '@/global-styles';
import { ProductCart } from '@/interfaces';
import { usePaymentSheet } from '@stripe/stripe-react-native';
import {
  Button,
  Cart,
  Divider,
  FullScreenLoader,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks';
import handleErrors from '@/utils/handleErrors';
import { API_URL } from '../../../Constants';
import { styles } from './PrePurchaseSummaryScreen.styles';

export const PrePurchaseSummaryScreen = ({ route }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { currentSelectedAddress } = useAppSelector(state => state.address);
  const {
    cartProductsCounter,
    cartProductsSubtotal,
    cartProductsIva,
    cartProducts,
  } = useAppSelector(state => state.cart);
  const { deliveryDate, deliveryTime, deliveryDateTime } = route?.params;
  const [loader, setLoader] = useState<boolean>(false);
  const [isPaymentReady, setIsPaymentReady] = useState<boolean>(false);
  const { initPaymentSheet, presentPaymentSheet, loading } = usePaymentSheet();

  useEffect(() => {
    initialisePaymentSheet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProductsSubtotal]);

  const initialisePaymentSheet = async () => {
    const { paymentIntent } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      defaultBillingDetails: {
        email: 'foo@bar.com', // No se donde se ve esto
        address: {
          country: 'MX',
        },
      },
      appearance: {
        colors: {
          primary: themeStyles.primary,
          background: themeStyles.background,
          componentBackground: themeStyles.black,
          componentDivider: themeStyles.divider,
          primaryText: themeStyles.text,
          secondaryText: themeStyles.tertiary,
          componentText: themeStyles.secondary, // Choose country component
          icon: themeStyles.quaternary,
          placeholderText: themeStyles.searchBg,
          componentBorder: themeStyles.tertiary,
        },
        shapes: {
          borderRadius: 25,
        },
        primaryButton: {
          colors: {
            text: themeStyles.secondary,
          },
          shapes: {
            shadow: {
              color: 'aqua',
              opacity: 0.8,
              blurRadius: 0.7,
            },
          },
        },
      },
      paymentIntentClientSecret: paymentIntent,
      merchantDisplayName: 'Vida Sweet',
      applePay: {
        merchantCountryCode: 'MX',
      },
      googlePay: {
        merchantCountryCode: 'MX',
        testEnv: true,
        currencyCode: 'mxn',
      },
      allowsDelayedPaymentMethods: true,
      returnURL: 'stripe-example://stripe-redirect',
    });
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      setIsPaymentReady(true);
    }
  };

  const fetchPaymentSheetParams = async () => {
    // console.log('fetchPaymentSheetParams');
    const userEmail = auth().currentUser?.email;
    // console.log('userEmail');
    // console.log(userEmail);

    const total = (cartProductsSubtotal + cartProductsIva) * 100;
    // console.log('total: ', total);
    const theBody = {
      email: userEmail,
      totalAmount: total,
    };

    const response = await fetch(`${API_URL}/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(theBody),
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const makeStripePayment = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      handleErrors(error.code);
      console.log('ERROR');
      // retryStripePayment();
      return false;
    } else {
      Alert.alert(
        t('ThankYou', { name: 'Vicente' }),
        t('SuccessfulPaymentMsg'),
      );
      setIsPaymentReady(false);
      navigation.navigate('PurchaseSummary');
      return true;
    }
  };

  // const retryStripePayment = async () => {
  //   console.log('retryStripePayment');
  //   await presentPaymentSheet();
  //   return true;
  // };

  const onPressContinue = async () => {
    if (cartProductsCounter <= 0) {
      return Alert.alert(t('AddAtLeastOneProduct'));
    }
    //Primero ver que la compra sea exitosa
    const resultPaymentIntent = await makeStripePayment();
    console.log('resultPaymentIntent');
    console.log(resultPaymentIntent);
    //Segundo, asignar la orden
    const orderId = await setOrder(currentSelectedAddress.docId, cartProducts);
    console.log('orderId');
    console.log(orderId);
    //Tercero, asignar el product_order porque ya se tiene la orden previamente de //setOrder
    // console.log('cartProducts');
    // console.log(cartProducts);
    if (resultPaymentIntent) {
      await setProductOrders(orderId);
    }
    // await setProductOrder(quant); // Aqui ver como mandar el sabor, cantidad, el subtotal...
  };

  const setProductOrders = async (orderId: string | undefined) => {
    let products = Object.keys(cartProducts);

    products.map(cartProductId => {
      const cartProduct = cartProducts[cartProductId];
      setProductOrder(cartProduct, orderId, cartProductId);
    });

    // cartProducts.forEach(async (cartProduct: ProductCart) => {
    //   console.log('iterating over cartProducts');
    //   // await setProductOrder(cartProduct, orderId);
    //   await setProductOrder();
    // });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {loader ? <FullScreenLoader /> : null}
      <TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
        <View>
          <Text style={styles.title}>{t('DeliveryAddress')}</Text>
          <Text style={styles.text}>{currentSelectedAddress.fullAddress}</Text>
          <Divider
            customStyle={{
              marginVertical: 16,
              backgroundColor: Colors.grayLight,
            }}
          />
          <Text style={styles.title}>{t('DeliveryDateTime')}</Text>
          <Text style={styles.text}>{deliveryDateTime}</Text>
          <Divider
            customStyle={{
              marginVertical: 16,
              backgroundColor: Colors.grayLight,
            }}
          />
          {/* <Text style={styles.title}>{t('ProductsToBuy')}</Text> */}
          <Cart />
        </View>
        <Button title={t('Continue')} onPress={onPressContinue} />
      </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
    </SafeAreaView>
  );
};
