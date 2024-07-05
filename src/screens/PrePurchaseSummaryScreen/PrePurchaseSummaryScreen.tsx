import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { setOrder, setProductOrder } from '@/fb/queries';
import { Colors, themeStyles } from '@/global-styles';
import { usePaymentSheet } from '@stripe/stripe-react-native';
import { resetCart } from '@/redux-content/cart/Cart.slice';
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
  const { currentAddressId } = useAppSelector(state => state.address);
  const { cartProductsCounter, cartProductsSubtotal, cartProductsIva } =
    useAppSelector(state => state.cart);
  const { deliveryDate, deliveryTime, deliveryDateTime } = route?.params;
  const [loader, setLoader] = useState<boolean>(false);
  const [isPaymentReady, setIsPaymentReady] = useState<boolean>(false);
  const { initPaymentSheet, presentPaymentSheet, loading } = usePaymentSheet();

  useEffect(() => {
    initialisePaymentSheet();
    console.log('initialise payment');
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
          secondaryText: themeStyles.secondary,
          componentText: themeStyles.disabled, // Choose country component
          icon: themeStyles.quaternary,
          placeholderText: themeStyles.disabled,
          componentBorder: themeStyles.tertiary,
        },
        shapes: {
          borderRadius: 25,
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
    console.log('fetchPaymentSheetParams');
    const userEmail = auth().currentUser?.email;
    console.log('userEmail');
    console.log(userEmail);

    const total = (cartProductsSubtotal + cartProductsIva) * 100;
    console.log('total: ', total);
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
    } else {
      dispatch(resetCart());
      Alert.alert(t('Success'), t('SuccessfulPaymentMsg'));
      setIsPaymentReady(false);
      navigation.navigate('MainRoot');
    }
  };

  const onPressContinue = async () => {
    //Primero ver que la compra sea exitosa
    await makeStripePayment();
    //Segundo, asignar la orden
    await setOrder(currentAddressId);
    //Tercero, asignar el product_order porque ya se tiene la orden previamente de setOrder
    await setProductOrder(); // Aqui ver como mandar el sabor, cantidad, el subtotal...
  };

  const fullAddress =
    'C 30 - #85 Int Sin numero, Colonia El Sol, Nezahualcóyotl, Mexico, 57200';

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {loader ? <FullScreenLoader /> : null}
      <TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
        <View>
          <Text style={styles.title}>{t('DeliveryAddress')}</Text>
          <Text style={styles.text}>{fullAddress}</Text>
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
