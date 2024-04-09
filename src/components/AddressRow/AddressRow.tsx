import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { deleteDoc, doc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { db } from '@/firebase/conf';
import { themeStyles } from '@/global-styles';
import { AddressItem } from '@/interfaces';
import {
  faEdit,
  faMapMarkerAlt,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button } from '@/components';
import handleErrors from '@/utils/handleErrors';
import { styles } from './AddressRow.styles';

interface AddressRowProps {
  address: AddressItem;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  key: string;
  pullAddresses: () => void;
  currentAddressId: string;
  setCurrentAddressId: React.Dispatch<React.SetStateAction<string>>;
}

export const AddressRow = ({
  address,
  setLoader,
  pullAddresses,
  currentAddressId,
  setCurrentAddressId,
}: AddressRowProps) => {
  const { fullAddress = false } = address;
  const navigation = useNavigation();

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

  const onPressAddressRectangle = async (addressId: string) => {
    console.log('onPressAddres: ', address);
    setCurrentAddressId(addressId);
  };

  return (
    <TouchableOpacity
      style={[styles.wrapper, address.isCurrent ? styles.shadowEffect : null]}
      onPress={() => onPressAddressRectangle(address.docId)}>
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
