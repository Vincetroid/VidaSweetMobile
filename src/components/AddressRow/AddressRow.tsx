import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { deleteDoc, doc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { db } from '@/fb/conf';
import { themeStyles } from '@/global-styles';
import { AddressItem } from '@/interfaces';
import {
  faEdit,
  faMapMarkerAlt,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { addCurrentAddressId } from '@/redux-content';
import { Button } from '@/components';
import handleErrors from '@/utils/handleErrors';
import { styles } from './AddressRow.styles';

interface AddressRowProps {
  address: AddressItem;
  setAddresses: React.Dispatch<React.SetStateAction<AddressItem[]>>;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  key: string;
  pullAddresses: () => void;
}

export const AddressRow = ({
  address,
  setAddresses,
  setLoader,
  pullAddresses,
}: AddressRowProps) => {
  const { fullAddress = false } = address;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (address.isCurrent) {
      console.log('assignin2');
      dispatch(addCurrentAddressId(address.docId));
    }
  }, []);

  const onPressTrash = async () => {
    setLoader(true);
    try {
      await deleteDoc(doc(db, 'addresses', address.docId));
      setLoader(false);
      pullAddresses();
    } catch (error) {
      const errorCode = error.code;
      handleErrors(errorCode);
      setLoader(false);
    }
  };

  const onPressEdit = async () => {
    address.isEdit = true;
    navigation.navigate('Address', address);
  };

  const onPressAddressRectangle = async (
    addressId: string,
    addressIsCurrent: boolean,
  ) => {
    console.log('onPressAddres: ', address);
    console.log('Address id: ', addressId);
    // const newData = [...data];

    //TODO: Esto más bien deberia estar en redux no? para que no se complique tanto en hacerse copias, etc
    // setAddresses(prevAddresses => {
    //   return prevAddresses.map((prevAddress: AddressItem) => {
    //     if (address.docId === addressId) {
    //       console.log('111111');
    //       return {
    //         ...prevAddress,
    //         docId: address.docId,
    //         isCurrent: !address.isCurrent,
    //       };
    //     }
    //   });
    // });

    dispatch(addCurrentAddressId(address.docId)); // AQUI HACE FALTA LA FULL ADDRESS PARA LA CONFIRMACION DE COMPRA
  };

  return (
    <TouchableOpacity
      // style={[styles.wrapper, address.isCurrent ? styles.shadowEffect : null]}
      style={[styles.wrapper]}
      onPress={() => onPressAddressRectangle(address.docId, address.isCurrent)}>
      <View style={styles.leftZone}>
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          size={18}
          style={{
            color: themeStyles.secondary,
          }}
        />
      </View>
      <View style={styles.centerZone}>
        <Text style={styles.productTitle}>{fullAddress}</Text>
      </View>
      <View style={styles.rightZone}>
        <Button onPress={onPressEdit} buttonViewStyle={styles.iconBtn}>
          <FontAwesomeIcon
            icon={faEdit}
            size={16}
            style={{
              color: themeStyles.secondary,
            }}
          />
        </Button>
        <Button onPress={onPressTrash} buttonViewStyle={styles.iconBtn}>
          <FontAwesomeIcon
            icon={faTrash}
            size={16}
            style={{
              color: themeStyles.secondary,
            }}
          />
        </Button>
      </View>
    </TouchableOpacity>
  );
};
