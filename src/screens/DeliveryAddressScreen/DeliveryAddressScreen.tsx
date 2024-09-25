import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { themeStyles } from '@/global-styles';
import { AddressItem } from '@/interfaces';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { addCurrentAddressId } from '@/redux-content';
import {
  AddressRow,
  Button,
  FullScreenLoader,
  RowTitle,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { useAppDispatch, useFetchAddresses } from '@/hooks';
import { styles } from './DeliveryAddressScreen.styles';

export const DeliveryAddressScreen = () => {
  const ICON_BTN_SIZE = 18;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { loader, setLoader, addresses, setAddresses, pullAddresses } =
    useFetchAddresses();

  const onPressContinue = () => {
    navigation.navigate('Schedule');
  };

  const onAddAddress = () => {
    navigation.navigate('Address');
  };

  // const onPressAddressRectangle = async (
  //   addressId: string,
  //   addressIsCurrent: boolean,
  // ) => {
  const onPressAddressRectangle = async (address: AddressItem) => {
    // console.log('onPressAddres: ', address);
    // console.log('Address id: ', addressId);
    // console.log('addressIsCurrent: ', addressIsCurrent);
    // const newData = [...data];

    //TODO: Esto más bien deberia estar en redux no? para que no se complique tanto en hacerse copias, etc
    setAddresses(prevAddresses => {
      return prevAddresses.map((prevAddress: AddressItem) => {
        // console.log(address, prevAddress);
        console.log(address.docId, prevAddress.docId);

        if (address.docId === prevAddress.docId) {
          return {
            ...prevAddress,
            isCurrent: true,
          };
        }
        return {
          ...prevAddress,
          isCurrent: false,
        };
      });
    });

    dispatch(addCurrentAddressId(address.docId)); // AQUI HACE FALTA LA FULL ADDRESS PARA LA CONFIRMACION DE COMPRA
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
                onPressAddressRectangle={onPressAddressRectangle}
                address={address}
                setLoader={setLoader}
                pullAddresses={pullAddresses}
              />
            );
          })}
          <Button
            onPress={onAddAddress}
            buttonViewStyle={styles.addAnAddressBtn}>
            <>
              <FontAwesomeIcon
                icon={faAdd}
                size={ICON_BTN_SIZE}
                color={themeStyles.text}
              />
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
