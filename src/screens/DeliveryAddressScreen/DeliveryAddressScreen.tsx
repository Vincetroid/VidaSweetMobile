import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { FontSizes } from '@/global-styles';
import { useTranslation } from 'react-i18next';
import { RowTitle, AddressRow } from '@/components';
import { AddressItem } from '@/interfaces';

export const DeliveryAddressScreen = () => {
  const { t } = useTranslation();

  const address1 = {
    id: 'd34akj432',
    fullAddress:
      'Calle 29, 85, El Sol, Estado de México, Nezahualcóyotl, 57200',
    isEditable: true,
    isFavorite: false,
  } as AddressItem;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      <RowTitle
        title={t('SelectAddress')}
        styleTextTitle={styles.selectAddress}
        wrapperStyle={{ marginTop: 0 }}
      />
      <AddressRow address={address1} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'aqua',
    flex: 1,
  },
  selectAddress: {
    fontSize: FontSizes.big,
    marginTop: 20,
  },
  bg: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
