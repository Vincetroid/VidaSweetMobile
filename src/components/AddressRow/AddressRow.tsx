import { Text, View } from 'react-native';
import { AddressItem } from '@/interfaces';
import { AddRemoveToFavorites } from '@/components/AddRemoveToFavorites';
import { styles } from './AddressRow.styles';
import { faEdit, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { themeStyles } from '@/global-styles';
import { useState } from 'react';

export const AddressRow = ({ address }: { address: AddressItem }) => {
  const { id, fullAddress, isEditable = true, isFavorite = false } = address;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  // const { cartProducts } = useAppSelector(state => state.cart);

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
        <View
          style={
            {
              // alignItems: 'center',
              // justifyContent: 'center',
              // backgroundColor: 'red',
              // flex: 1,
            }
          }></View>
      </View>
      <View style={styles.centerZone}>
        <Text style={styles.productTitle}>{fullAddress}</Text>
      </View>
      <View style={styles.rightZone}>
        <FontAwesomeIcon
          icon={faEdit}
          size={18}
          style={{
            color: themeStyles.secondary,
          }}
        />
      </View>
      <AddRemoveToFavorites
        isFavorite={isFavorite}
        size={18}
        wrapperStyle={styles.heartWrapperStyle}
      />
    </View>
  );
};
