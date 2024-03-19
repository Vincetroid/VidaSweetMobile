import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { getAddresses } from '@/firebase/queries';
import { AddressItem } from '@/interfaces';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  AddressRow,
  Button,
  FullScreenLoader,
  RowTitle,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import handleErrors from '@/utils/handleErrors';
import { styles } from './DeliveryAddressScreen.styles';

export const DeliveryAddressScreen = () => {
  const ICON_BTN_SIZE = 18;
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [addresses, setAddresses] = useState<AddressItem[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setLoader(true);
      try {
        await pullAddresses();
        setLoader(false);
      } catch (error) {
        handleErrors(error.code);
      }
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pullAddresses = async () => {
    try {
      const addressesList = await getAddresses();
      setAddresses(addressesList);
    } catch (error) {
      handleErrors(error.code);
    }
  };

  const onPressContinue = () => {
    navigation.navigate('Schedule');
  };

  const onAddAddress = () => {
    navigation.navigate('Address');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {loader ? <FullScreenLoader /> : null}
      <TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
        <>
          <RowTitle
            title={t('SelectAddress')}
            styleTextTitle={styles.selectAddress}
            wrapperStyle={{ marginTop: 0 }}
          />
          {addresses.map(address => {
            return (
              <AddressRow
                address={address}
                key={address.docId}
                setLoader={setLoader}
                pullAddresses={pullAddresses}
              />
            );
          })}
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
