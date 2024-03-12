import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
// import { SliderBox } from 'react-native-image-slider-box';
// import { functions } from '@/firebase/conf';
import functions from '@react-native-firebase/functions';
import { getCities, setRandomData } from '@/firebase/queries';
import { ProductItem } from '@/interfaces';
import { usePaymentSheet } from '@stripe/stripe-react-native';
import { Button, Menu, RowTitle } from '@/components';
import { API_URL } from '../../../Constants';
import { ProductCard } from '../../components/ProductCard/ProductCard';

const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree',
];

export const HomeScreen = () => {
  const { t } = useTranslation();
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
      appearance: {
        colors: {
          primary: '#e06c75',
          background: '#282c34',
          componentBackground: '#abb2bf',
          componentDivider: '#e5c07b',
          primaryText: '#61afef',
          secondaryText: '#c678dd',
          componentText: '#282c34',
          icon: '#e06c75',
          placeholderText: '#ffffff',
        },
        shapes: {
          borderRadius: 25,
        },
      },
      paymentIntentClientSecret: paymentIntent,
      merchantDisplayName: 'Example Inc.',
      applePay: {
        merchantCountryCode: 'US',
      },
      googlePay: {
        merchantCountryCode: 'US',
        testEnv: true,
        currencyCode: 'usd',
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
    const response = await fetch(`${API_URL}/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'The payment was confirmed successfully');
      setIsPaymentReady(false);
    }
  }

  const product1 = {
    img: require('@/assets/products/ice-cream-liter.jpeg'),
    title: 'Helado 1l',
    price: 150.0,
    isFavorite: false,
  } as ProductItem;
  const product2 = {
    img: require('@/assets/products/ice-cream-single.jpeg'),
    title: 'Helado sencillo',
    price: 60.5,
    isFavorite: true,
  } as ProductItem;

  // const navigation = useNavigation();

  const testFirebaseFunctions = () => {
    // const result = functions().httpsCallable('createRandomData');
    // const result = functions().httpsCallableFromUrl(
    //   // 'http://127.0.0.1:5001/vida-sweet/us-central1/addMessage?text=uppercasemetoo',
    //   'https://us-central1-vida-sweet.cloudfunctions.net/addMessage?text=uppercasemetoo',
    // );
    const result = functions().httpsCallableFromUrl(
      'https://us-central1-vida-sweet.cloudfunctions.net/stripeWebhook',
    );
    result()
      .then(response => {
        console.log('response webhook: ');
        console.log(response);
        console.log(response.data);
      })
      .catch(e => {
        console.log('error');
        console.log(e);
      });
  };

  const createRandomStuffInDb = () => {
    setRandomData();
  };

  const getRandomStuff = () => {
    getRandomData().then(result => {
      console.log('result');
      console.log(result.length);
    });
  };

  const getCitiesData = () => {
    getCities().then(result => {
      console.log('result');
      console.log(result.length);
    });
  };

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

  return (
    <SafeAreaView testID="home-screen">
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.bg2}>
        {/* <Button
          title={t('Get with Firebase functions')}
          onPress={testFirebaseFunctions}
        />
        <Button title={t('Create')} onPress={createRandomStuffInDb} />
        <Button title={t('Get')} onPress={getRandomStuff} />
        <Button title={t('Get Cities')} onPress={getCitiesData} /> */}
        <Button title={t('Call Stripe')} onPress={callStripe} />

        <Button
          title={t('BUY')}
          onPress={buy}
          disabled={loading || !isPaymentReady}
        />
        <Button
          title={'Logout'}
          onPress={async () => {
            await resetPaymentSheetCustomer();
          }}
        />

        {/* <SliderBox images={images} /> */}

        <RowTitle title={t('Menu')} centered />

        <Menu />

        <RowTitle title={t('TopSellers')} />

        <View style={[styles.container]}>
          <ProductCard product={product1} />
          <ProductCard product={product2} />
          <ProductCard product={product1} />
          <ProductCard product={product2} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg2: {
    // backgroundColor: themeStyles.white,
    // backgroundColor: 'ghostwhite'
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 16,
  },
});
