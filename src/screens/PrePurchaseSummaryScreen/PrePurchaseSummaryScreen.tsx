import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import { getAuth } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { setOrder, setProductOrder } from '@/firebase/queries';
import { themeStyles } from '@/global-styles';
import { usePaymentSheet } from '@stripe/stripe-react-native';
import {
  Button,
  FullScreenLoader,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { useAppSelector } from '@/hooks';
import handleErrors from '@/utils/handleErrors';
import { API_URL } from '../../../Constants';
import { styles } from './PrePurchaseSummaryScreen.styles';

export const PrePurchaseSummaryScreen = ({ route }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { currentAddressId } = useAppSelector(state => state.address);
  const { cartProductsCounter, cartProductsSubtotal, cartProductsIva } =
    useAppSelector(state => state.cart);
  const { deliveryDate, deliveryTime } = route?.params;
  const [loader, setLoader] = useState<boolean>(false);
  const [isPaymentReady, setIsPaymentReady] = useState<boolean>(false);
  const { initPaymentSheet, presentPaymentSheet, loading } = usePaymentSheet();

  useEffect(() => {
    initialisePaymentSheet();
    console.log('initialise payment');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    const auth = getAuth();
    const userEmail = auth.currentUser?.email;

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
      Alert.alert(t('Success'), t('SuccessfulPaymentMsg'));
      setIsPaymentReady(false);
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

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {loader ? <FullScreenLoader /> : null}
      <TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
        <View>
          <Text>{t('DeliveryAddress')}</Text>
          <Text>{deliveryDate}</Text>
          <Text>{deliveryTime}</Text>
        </View>
        <Button title={t('Continue')} onPress={onPressContinue} />
      </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
    </SafeAreaView>
  );
};
