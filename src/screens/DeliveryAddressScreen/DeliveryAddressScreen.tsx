import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { FontFamilies, FontSizes, themeStyles } from '@/global-styles';
import { AddressItem } from '@/interfaces';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  AddressRow,
  Button,
  RowTitle,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { styles } from './DeliveryAddressScreen.styles';

export const DeliveryAddressScreen = () => {
  const ICON_BTN_SIZE = 18;
  const { t } = useTranslation();
  const navigation = useNavigation();

  const address1 = {
    id: 'd34akj432',
    fullAddress:
      'Calle 29, 85, El Sol, Estado de México, Nezahualcóyotl, 57200',
    isEditable: true,
    isFavorite: false,
  } as AddressItem;

  const address2 = {
    id: 'j43d34ak2',
    fullAddress: 'Dr. García Diego 201, Col. Doctores, Cuauhtémoc, CDMX, 63000',
    isEditable: true,
    isFavorite: true,
  } as AddressItem;

  const address3 = {
    id: 'j43d34ak2',
    fullAddress: 'Dr. García Diego 201, Col. Doctores, Cuauhtémoc, CDMX, 63000',
    isEditable: true,
    isFavorite: true,
  } as AddressItem;

  const address4 = {
    id: 'j43d34ak2',
    fullAddress: 'Dr. García Diego 201, Col. Doctores, Cuauhtémoc, CDMX, 63000',
    isEditable: true,
    isFavorite: true,
  } as AddressItem;
  const address5 = {
    id: 'j43d34ak2',
    fullAddress: 'Dr. García Diego 201, Col. Doctores, Cuauhtémoc, CDMX, 63000',
    isEditable: true,
    isFavorite: true,
  } as AddressItem;

  const address6 = {
    id: 'j43d34ak2',
    fullAddress: 'Dr. García Diego 201, Col. Doctores, Cuauhtémoc, CDMX, 63000',
    isEditable: true,
    isFavorite: true,
  } as AddressItem;
  const address7 = {
    id: 'j43d34ak2',
    fullAddress: 'Dr. García Diego 201, Col. Doctores, Cuauhtémoc, CDMX, 63000',
    isEditable: true,
    isFavorite: true,
  } as AddressItem;
  const address8 = {
    id: 'j43d34ak2',
    fullAddress: 'Dr. García Diego 201, Col. Doctores, Cuauhtémoc, CDMX, 63000',
    isEditable: true,
    isFavorite: true,
  } as AddressItem;
  const address9 = {
    id: 'j43d34ak2',
    fullAddress: 'Dr. García Diego 201, Col. Doctores, Cuauhtémoc, CDMX, 63000',
    isEditable: true,
    isFavorite: true,
  } as AddressItem;

  const onPressContinue = () => {
    // navigation.navigate('DeliveryAddress');
  };

  const onAddAddress = () => {
    navigation.navigate('AddAddress');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
        <>
          <RowTitle
            title={t('SelectAddress')}
            styleTextTitle={styles.selectAddress}
            wrapperStyle={{ marginTop: 0 }}
          />
          <AddressRow address={address1} />
          <AddressRow address={address2} />
          <AddressRow address={address3} />
          <AddressRow address={address4} />
          <AddressRow address={address5} />
          <Button
            onPress={onAddAddress}
            buttonViewStyle={styles.addAnAddressBtn}>
            <>
              <FontAwesomeIcon icon={faAdd} size={ICON_BTN_SIZE} />
              <Text style={[styles.addAnAddressTextBtn]}>
                {t('AddAnAddress')}
              </Text>
            </>
          </Button>
        </>
        <Button title={t('Continue')} onPress={onPressContinue} />
      </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
    </SafeAreaView>
  );
};
