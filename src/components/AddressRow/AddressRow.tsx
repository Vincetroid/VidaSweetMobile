import React from 'react';
import { Text, View } from 'react-native';
import { deleteDoc, doc } from 'firebase/firestore';
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
}

export const AddressRow = ({
  address,
  setLoader,
  pullAddresses,
}: AddressRowProps) => {
  const { fullAddress = false } = address;

  // const [toggleCheckBox, setToggleCheckBox] = useState(false);

  // const { cartProducts } = useAppSelector(state => state.cart);

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

  return (
    <View style={styles.wrapper}>
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
        <Button onPress={onPressTrash} buttonViewStyle={styles.iconBtn}>
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
    </View>
  );
};
