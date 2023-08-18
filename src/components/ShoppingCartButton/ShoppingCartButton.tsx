import React, { ReactNode } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './ShoppingCartButton.styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

interface ShoppingCartButtonProps {}

export const ShoppingCartButton = () => {
  const ICON_SIZE = 24;
  const productsAdded = 3;

  return (
    <TouchableOpacity style={styles.shoppingCartViewWrapper}>
      <View style={styles.badgeProductsAddedView}>
        <Text style={styles.badgeProductsAddedText}>{productsAdded}</Text>
      </View>
      <FontAwesomeIcon icon="shopping-cart" size={26} />
    </TouchableOpacity>
  );
};
