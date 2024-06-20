import React, { useState } from 'react';
import { Platform, SafeAreaView, TextInput, View } from 'react-native';
import { serverTimestamp } from 'firebase/firestore';
// const functions = require('firebase-functions');
// const functions = require('firebase-functions/v1');
// import { firebase } from 'firebase-functions/v1';
import { useTranslation } from 'react-i18next';
import RNPhoneCodeSelect from 'react-native-phone-code-select';
// import functions, { firebase } from '@react-native-firebase/functions';
// import { getFunctions, httpsCallable } from "firebase/functions";
import { useNavigation } from '@react-navigation/native';
import { editAddress, setAddress } from '@/fb/queries';
import { AddressItem, CountryPhoneCodeItem } from '@/interfaces';
import { addCurrentSelectedAddress } from '@/redux-content';
import {
  Button,
  FullScreenLoader,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { useAppDispatch } from '@/hooks';
import handleErrors from '@/utils/handleErrors';
import { styles } from './AddressScreen.styles';

export const AddressScreen = ({ route }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const streetParam = route.params ? route.params.street : '';

  const [addressName, setAddressName] = useState<string>(
    route.params ? route.params.addressName : '',
  );
  const [street, setStreet] = useState<string>(streetParam);
  const [exteriorNumber, setExteriorNumber] = useState<string>(
    route.params ? route.params.exteriorNumber : '',
  );
  const [interiorNumber, setInteriorNumber] = useState<string>(
    route.params ? route.params.interiorNumber : '',
  );
  const [colonia, setColonia] = useState<string>(
    route.params ? route.params.colonia : '',
  );
  const [municipality, setMunicipality] = useState<string>(
    route.params ? route.params.municipality : '',
  );
  const [state, setState] = useState<string>(
    route.params ? route.params.state : '',
  );
  const [zipCode, setZipCode] = useState<string>(
    route.params ? route.params.zipCode : '',
  );
  const [phoneNumber, setPhoneNumber] = useState<string>(
    route.params ? route.params.phoneNumber : '',
  );
  const [specialIndications, setSpecialIndications] = useState<string>(
    route.params ? route.params.specialIndications : '',
  );
  const [countryPhoneCode, setCountryPhoneCode] = useState<string>(
    route.params ? route.params.countryPhoneCode : '',
  );
  const [loader, setLoader] = useState<boolean>(false);
  const [countryCodesModalVisible, setCountryCodesModalVisible] =
    useState<boolean>(false);

  const textInputColor = { color: loader ? 'grey' : 'black' };

  const keyboardType = Platform.OS === 'android' ? 'numeric' : 'number-pad';

  const onSaveAddress = async () => {
    setLoader(true);

    if (route?.params && route?.params?.isEdit) {
      const addressNumber = interiorNumber
        ? `#${exteriorNumber} Int ${interiorNumber}`
        : `#${exteriorNumber}`;

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
        fullAddress: `C ${street} - ${addressNumber}, Colonia ${colonia}, ${municipality}, ${state}, ${zipCode}`,
        // updateTimestamp: serverTimestamp(),
        updateTimestamp: new Date().toString(),
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
        ? `#${exteriorNumber} Int ${interiorNumber}`
        : `#${exteriorNumber}`;

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
        fullAddress: `C ${street} - ${addressNumber}, Colonia ${colonia}, ${municipality}, ${state}, ${zipCode}`,
        // createTimestamp: serverTimestamp(),
        createTimestamp: new Date().toString(),
      } as AddressItem;

      try {
        console.log('before set addres');
        const docId = await setAddress(addressObj);
        console.log('docId: ', docId); // Si resultó, ya tienes el addressId Para usarlo en orders
        dispatch(
          addCurrentSelectedAddress({ ...addressObj, docId: docId || '' }),
        );
        console.log('about to dispatch');
        setLoader(false);
      } catch (error) {
        const errorCode = error.code;
        handleErrors(errorCode);
        setLoader(false);
      }
    }

    navigation.navigate('DeliveryAddress');
  };

  const onSelectCountry = (countryDialCode: string) => {
    setCountryPhoneCode(countryDialCode as string);
  };

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
