import React, { useState } from 'react';
import { Platform, SafeAreaView, TextInput, View } from 'react-native';
// const functions = require('firebase-functions');
// const functions = require('firebase-functions/v1');
// import { firebase } from 'firebase-functions/v1';
import { useTranslation } from 'react-i18next';
import RNPhoneCodeSelect from 'react-native-phone-code-select';
import functions from '@react-native-firebase/functions';
import { useNavigation } from '@react-navigation/native';
import { CountryPhoneCodeItem } from '@/interfaces';
// import { STRIPE_PUBLISHABLE_KEY } from '@env';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import {
  Button,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { styles } from './AddAddressScreen.styles';

// import functions from '@react-native-firebase/functions';
// Use a local emulator in development
// if (__DEV__) {
//   console.log('INSIDE DEV');
//   // If you are running on a physical device, replace http://localhost with the local ip of your PC. (http://192.168.x.x)
//   functions().useEmulator('localhost', 5001);
// }

export const AddAddressScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { confirmPayment } = useStripe();

  const [addressName, setAddressName] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [exteriorNumber, setExteriorNumber] = useState<string>('');
  const [interiorNumber, setInteriorNumber] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [specialIndications, setSpecialIndications] = useState<string>('');
  const [countryPhoneCode, setCountryPhoneCode] = useState<string>('');
  const [loader, setLoader] = useState<boolean>(false);
  const [countryCodesModalVisible, setCountryCodesModalVisible] =
    useState<boolean>(false);

  const textInputColor = { color: loader ? 'grey' : 'black' };

  const keyboardType = Platform.OS === 'android' ? 'numeric' : 'number-pad';

  const onSaveAddress = () => {
    navigation.navigate('AddAddress');
  };

  const doTheMagic = () => {
    console.log('0000');
    //TE QUEDASTE AQUI EN EL FRONT
    //DE DONDE SE OBTIENE firebase, functions y Stripe?
    //NO ESTAS TAN PERDIDO PORQUE ESTO DESPLIEGA HTML ASI QUE NO ES COMPATIBLE, BUSCAR QUE SI
    // const createStripeCheckout = firebase
    //   .functions()
    //   .httpsCallable('createStripeCheckout');
    // const stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
    // createStripeCheckout().then(response => {
    //   const sessionId = response.data.id;
    //   stripe.redirectToCheckout({ sessionId: sessionId });
    // });

    const createStripeCheckout = functions().httpsCallable(
      'createStripeCheckout',
    );

    // const stripe = Stripe(STRIPE_PUBLISHABLE_KEY);

    createStripeCheckout()
      .then(response => {
        const sessionId = response.data.id;
        console.log('sessionId');
        console.log(sessionId);
        // stripe.redirectToCheckout({ sessionId: sessionId });
      })
      .catch(e => {
        console.log('error');
        console.log(e);
      });
  };

  const onSelectCountry = (countryDialCode: string) => {
    setCountryPhoneCode(countryDialCode as string);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
        <>
          <Button title="¡Haz Magia!" onPress={doTheMagic} />
          <CardField
            postalCodeEnabled={true}
            placeholders={{
              number: '4242 4242 4242 4242',
            }}
            cardStyle={{
              backgroundColor: '#FFFFFF',
              textColor: '#000000',
            }}
            style={{
              width: '100%',
              height: 50,
              marginVertical: 30,
            }}
            onCardChange={cardDetails => {
              console.log('cardDetails', cardDetails);
            }}
            onFocus={focusedField => {
              console.log('focusField', focusedField);
            }}
          />
          <TextInput
            value={addressName}
            editable={!loader}
            style={[styles.textInput, textInputColor]}
            onChangeText={setAddressName}
            placeholder={t('AddressTagOrName')}
            placeholderTextColor="grey"
          />
          <TextInput
            value={street}
            editable={!loader}
            style={[styles.textInput, textInputColor]}
            onChangeText={setStreet}
            placeholder={t('Street')}
            placeholderTextColor="grey"
          />
          <TextInput
            value={exteriorNumber}
            editable={!loader}
            style={[styles.textInput, textInputColor]}
            onChangeText={setExteriorNumber}
            placeholder={t('ExteriorNumber')}
            placeholderTextColor="grey"
            keyboardType={keyboardType}
          />
          <TextInput
            value={interiorNumber}
            editable={!loader}
            style={[styles.textInput, textInputColor]}
            onChangeText={setInteriorNumber}
            placeholder={t('InteriorNumber')}
            placeholderTextColor="grey"
            keyboardType={keyboardType}
          />
          <TextInput
            value={zipCode}
            editable={!loader}
            style={[styles.textInput, textInputColor]}
            onChangeText={setZipCode}
            placeholder={t('ZipCode')}
            placeholderTextColor="grey"
            keyboardType={keyboardType}
          />
          <View style={styles.phoneRow}>
            <TextInput
              value={countryPhoneCode}
              editable={!loader}
              style={[
                styles.textInput,
                styles.countryPhoneCode,
                textInputColor,
              ]}
              onTouchEndCapture={() => setCountryCodesModalVisible(true)}
              placeholder={t('CountryCode')}
              placeholderTextColor="grey"
              keyboardType={keyboardType}
            />
            <TextInput
              value={phoneNumber}
              editable={!loader}
              style={[styles.textInput, styles.phoneNumber, textInputColor]}
              onChangeText={setPhoneNumber}
              placeholder={t('PhoneNumber')}
              placeholderTextColor="grey"
              keyboardType={keyboardType}
            />
          </View>
          <TextInput
            value={specialIndications}
            editable={!loader}
            style={[styles.textInput, styles.specialIns, textInputColor]}
            onChangeText={setSpecialIndications}
            placeholder={t('SpecialIndications')}
            placeholderTextColor="grey"
            multiline={true}
            numberOfLines={4}
            maxLength={100}
          />
          <RNPhoneCodeSelect
            visible={countryCodesModalVisible}
            onDismiss={() => setCountryCodesModalVisible(false)}
            onCountryPress={(country: CountryPhoneCodeItem) =>
              onSelectCountry(country.dial_code as string)
            }
            primaryColor="#f04a4a"
            secondaryColor="#000000"
            buttonText="Ok"
          />
        </>
        <Button title={t('Save')} onPress={onSaveAddress} />
      </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
    </SafeAreaView>
  );
};
