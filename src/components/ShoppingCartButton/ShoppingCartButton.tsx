import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './ShoppingCartButton.styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

interface ShoppingCartButtonProps {}

export const ShoppingCartButton = () => {
  const ICON_SIZE = 26;
  const productsAdded = 3;
  const navigation = useNavigation();
  const { cartProductsLength } = useSelector(state => state.cart);

  return (
    <TouchableOpacity
      style={styles.shoppingCartViewWrapper}
      onPress={() => navigation.navigate('ShoppingCart')}>
      <View style={styles.badgeProductsAddedView}>
        <Text style={styles.badgeProductsAddedText}>{cartProductsLength}</Text>
      </View>
      <FontAwesomeIcon icon="shopping-cart" size={ICON_SIZE} />
    </TouchableOpacity>
  );
};
