import React, { useState } from 'react';
import { Platform, SafeAreaView, TextInput, View } from 'react-native';
import { isEmpty } from 'lodash';
// const functions = require('firebase-functions');
// const functions = require('firebase-functions/v1');
// import { firebase } from 'firebase-functions/v1';
import { useTranslation } from 'react-i18next';
import RNPhoneCodeSelect from 'react-native-phone-code-select';
import Toast from 'react-native-simple-toast';
import firestore from '@react-native-firebase/firestore';
// import functions, { firebase } from '@react-native-firebase/functions';
// import { getFunctions, httpsCallable } from "firebase/functions";
import { useNavigation } from '@react-navigation/native';
import { editAddress, setAddress } from '@/fb/queries';
import { themeStyles } from '@/global-styles';
import { AddressItem, CountryPhoneCodeItem } from '@/interfaces';
import { GOOGLE_API_KEY } from '@env';
import { addCurrentSelectedAddress } from '@/redux-content';
import {
  Button,
  FullScreenLoader,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { useAppDispatch } from '@/hooks';
import handleErrors from '@/utils/handleErrors';
import { styles } from './AddressScreen.styles';
import { AddressValidator } from './AddressScreen.validator';

export const AddressScreen = ({ route }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const streetParam = route.params ? route.params.street : '1';

  const [addressName, setAddressName] = useState<string>(
    route.params ? route.params.addressName : '1',
  );
  const [street, setStreet] = useState<string>(streetParam);
  const [exteriorNumber, setExteriorNumber] = useState<string>(
    route.params ? route.params.exteriorNumber : '1',
  );
  const [interiorNumber, setInteriorNumber] = useState<string>(
    route.params ? route.params.interiorNumber : '1',
  );
  const [colonia, setColonia] = useState<string>(
    route.params ? route.params.colonia : '1',
  );
  const [municipality, setMunicipality] = useState<string>(
    route.params ? route.params.municipality : '1',
  );
  const [state, setState] = useState<string>(
    route.params ? route.params.state : '1',
  );
  const [zipCode, setZipCode] = useState<string>(
    route.params ? route.params.zipCode : '1',
  );
  const [phoneNumber, setPhoneNumber] = useState<string>(
    route.params ? route.params.phoneNumber : '1',
  );
  const [specialIndications, setSpecialIndications] = useState<string>(
    route.params ? route.params.specialIndications : '1',
  );
  const [countryPhoneCode, setCountryPhoneCode] = useState<string>(
    route.params ? route.params.countryPhoneCode : '1',
  );
  const [loader, setLoader] = useState<boolean>(false);
  const [countryCodesModalVisible, setCountryCodesModalVisible] =
    useState<boolean>(false);

  const requestValidator = new AddressValidator();

  const validator = requestValidator.validate({
    addressName,
    street,
    exteriorNumber,
    interiorNumber,
    colonia,
    municipality,
    state,
    zipCode,
    countryPhoneCode,
    phoneNumber,
    specialIndications,
  });

  const textInputColor = { color: loader ? 'grey' : themeStyles.text };

  const keyboardType = Platform.OS === 'android' ? 'numeric' : 'number-pad';

  const addressNumber = interiorNumber
    ? `${exteriorNumber}-Int ${interiorNumber}`
    : `${exteriorNumber}`;

  const fullAddress = `C ${street} - ${addressNumber}, ${colonia}, ${municipality}, ${state}, ${zipCode}`;

  const getLocationFromTextInputs = async () => {
    const geoCodeEndpointResponse = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${fullAddress}&key=${GOOGLE_API_KEY}`,
    );

    const data = await geoCodeEndpointResponse.json();
    const location = data.results[0].geometry.location;

    return location;
  };

  const measureDistance = async (
    destinationLatitude: number,
    destinationLongitude: number,
  ) => {
    const originLatitude = 19.4305364;
    const originLongitude = -99.0350212;

    const endpoint = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originLatitude},${originLongitude}&destinations=${destinationLatitude},${destinationLongitude}&key=${GOOGLE_API_KEY}`;

    const response = await fetch(endpoint);

    const data = await response.json();

    if (data.rows.length > 0) {
      const distance = data.rows[0].elements[0].distance.value;
      return distance;
    } else {
      // TODO: Cambiar esto
      throw new Error('No se encontraron coordenadas para el código postal.');
    }
  };

  const clearForm = () => {
    setLoader(false);
    setAddressName('');
    setStreet('');
    setExteriorNumber('');
    setInteriorNumber('');
    setColonia('');
    setMunicipality('');
    setState('');
    setZipCode('');
    setPhoneNumber('');
    setSpecialIndications('');
    setCountryPhoneCode('');
    setCountryCodesModalVisible(false);
  };

  const onSaveAddress = async () => {
    if (isEmpty(validator)) {
      setLoader(true);

      const location = await getLocationFromTextInputs();

      const distance = await measureDistance(location.lat, location.lng);
      if (distance > 35000) {
        Toast.showWithGravityAndOffset(
          'Lo sentimos, parece que te encuentras lejos de nosotros por favor intenta agregar una dirección más céntrica',
          Toast.LONG,
          Toast.BOTTOM,
          0,
          -50,
          {
            backgroundColor: themeStyles.error,
            textColor: themeStyles.white,
            tapToDismissEnabled: true,
          },
        );
        clearForm();
        return;
      }

      if (route?.params && route?.params?.isEdit) {
        const addressObj = {
          addressName,
          street,
          exteriorNumber,
          interiorNumber,
          zipCode,
          colonia,
          municipality,
          state,
          countryPhoneCode,
          phoneNumber,
          specialIndications,
          isCurrent: false,
          fullAddress: fullAddress,
          updateTimestamp: firestore.FieldValue.serverTimestamp(),
        } as AddressItem;

        try {
          await editAddress(addressObj, route?.params?.docId);
          setLoader(false);
        } catch (error) {
          const errorCode = error.code;
          handleErrors(errorCode);
          setLoader(false);
        }
      } else {
        const addressNumber = interiorNumber
          ? `${exteriorNumber}-Int ${interiorNumber}`
          : `${exteriorNumber}`;

        const addressObj = {
          addressName,
          street,
          exteriorNumber,
          interiorNumber,
          zipCode,
          colonia,
          municipality,
          state,
          countryPhoneCode,
          phoneNumber,
          specialIndications,
          isCurrent: false,
          fullAddress: fullAddress,
          createTimestamp: firestore.FieldValue.serverTimestamp(),
          // createTimestamp: new Date(),
        } as AddressItem;

        try {
          const docId = await setAddress(addressObj);
          console.log('docId: ', docId); // Si resultó, ya tienes el addressId Para usarlo en orders
          dispatch(
            addCurrentSelectedAddress({ ...addressObj, docId: docId || '' }),
          );
          setLoader(false);
        } catch (error) {
          const errorCode = error.code;
          handleErrors(errorCode);
          setLoader(false);
        }
      }

      navigation.navigate('DeliveryAddress');
    } else {
      Toast.showWithGravityAndOffset(
        Object.values(validator)[0] || '',
        Toast.LONG,
        Toast.BOTTOM,
        0,
        -50,
        {
          backgroundColor: themeStyles.error,
          textColor: themeStyles.white,
          tapToDismissEnabled: true,
        },
      );
    }
  };

  const onSelectCountry = (countryDialCode: string) => {
    setCountryPhoneCode(countryDialCode as string);
  };

  // TODO: textInputColor ya no sé que hace
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {loader ? <FullScreenLoader /> : null}
      <TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
        <>
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
            maxLength={5}
          />
          <TextInput
            value={colonia}
            editable={!loader}
            style={[styles.textInput, textInputColor]}
            onChangeText={setColonia}
            placeholder={t('Colonia')}
            placeholderTextColor="grey"
            keyboardType={keyboardType}
          />
          <TextInput
            value={municipality}
            editable={!loader}
            style={[styles.textInput, textInputColor]}
            onChangeText={setMunicipality}
            placeholder={t('Municipality')}
            placeholderTextColor="grey"
            keyboardType={keyboardType}
          />
          <TextInput
            value={state}
            editable={!loader}
            style={[styles.textInput, textInputColor]}
            onChangeText={setState}
            placeholder={t('State')}
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
        <Button title={t('Save')} onPress={onSaveAddress} isLoading={loader} />
      </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
    </SafeAreaView>
  );
};
