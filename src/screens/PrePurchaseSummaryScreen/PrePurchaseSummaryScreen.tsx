import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import { getAuth } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import functions from '@react-native-firebase/functions';
import { useNavigation } from '@react-navigation/native';
import { setOrder } from '@/firebase/queries';
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
  const { deliveryDate, deliveryTime } = route?.params;
  const [loader, setLoader] = useState<boolean>(false);
  const [isPaymentReady, setIsPaymentReady] = useState<boolean>(false);
  const {
    initPaymentSheet,
    presentPaymentSheet,
    loading,
    resetPaymentSheetCustomer,
  } = usePaymentSheet();

  useEffect(() => {
    initialisePaymentSheet();
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
    const auth = getAuth();
    const userEmail = auth.currentUser?.email;

    console.log('fetchPaymentSheetParams');
    const theBody = {
      email: userEmail,
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

  async function buy() {
    const { error } = await presentPaymentSheet();

    if (error) {
      handleErrors(error.code);
    } else {
      Alert.alert(t('Success'), t('SuccessfulPaymentMsg'));
      setIsPaymentReady(false);
    }
  }

  const callStripe = () => {
    console.log('callStripe2');

    console.log('testFirebaseFunctions');
    functions()
      .httpsCallable('stripeWebhook')()
      .then(response => {
        console.log('response');
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });

    // const result = functions().httpsCallableFromUrl(
    //   'http://127.0.0.1:5001/vida-sweet/us-central1/stripeWebhook',
    // );

    // result()
    //   .then(response => {
    //     console.log('response');
    //     console.log(response.data);
    //   })
    //   .catch(e => {
    //     console.log('error');
    //     console.log(e);
    //   });

    // const createStripeCheckout = firebase
    //   .functions()
    //   .httpsCallable('createStripeCheckout');

    // console.log('createStripeCheckout');
    // console.log(createStripeCheckout);
    // // const stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
    // createStripeCheckout()
    //   .then(response => {
    //     const sessionId = response.data.id;
    //     console.log('sessionId');
    //     console.log(sessionId);
    //     // stripe.redirectToCheckout({ sessionId: sessionId });
    //   })
    //   .catch(error => {
    //     console.log('error');
    //     console.log(error);
    //   });
  };

  const onPressContinue = () => {
    // navigation.navigate('PrePurchaseSummary');
    setOrder(currentAddressId);
    buy();
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
