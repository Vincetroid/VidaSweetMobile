import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { themeStyles } from '@/global-styles';
import { AddressItem } from '@/interfaces';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { addCurrentSelectedAddress } from '@/redux-content';
import {
  AddressRow,
  Button,
  FullScreenLoader,
  RowTitle,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { useAppDispatch, useAppSelector, useFetchAddresses } from '@/hooks';
import { styles } from './DeliveryAddressScreen.styles';

export const DeliveryAddressScreen = () => {
  const ICON_BTN_SIZE = 18;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  // const [currentAddress, setCurrentAddress] = useState<string>('');
  const { loader, setLoader, addresses, setAddresses, pullAddresses } =
    useFetchAddresses();
  const { currentSelectedAddress } = useAppSelector(state => state.address);

  const onPressContinue = () => {
    navigation.navigate('Schedule', {});
  };

  const onAddAddress = () => {
    navigation.navigate('Address');
  };

  const onPressAddressRectangle = async (address: AddressItem) => {
    //TODO: Esto más bien deberia estar en redux no? para que no se complique tanto en hacerse copias, etc
    setAddresses(prevAddresses => {
      return prevAddresses.map((prevAddress: AddressItem) => {
        if (address.docId === prevAddress.docId) {
          // TODO: Ver lo de isCurrent, cuando asignarla y desasignarla
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

    dispatch(addCurrentSelectedAddress(address));
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
                key={address.docId}
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
        {addresses.length > 0 && currentSelectedAddress.docId ? (
          <Button title={t('Continue')} onPress={onPressContinue} />
        ) : null}
      </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
    </SafeAreaView>
  );
};
