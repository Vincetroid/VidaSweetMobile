import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './ShoppingCartButton.styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';

interface ShoppingCartButtonProps {}

export const ShoppingCartButton = () => {
  const ICON_SIZE = 26;
  const productsAdded = 3;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.shoppingCartViewWrapper}
      onPress={() => navigation.navigate('ShoppingCart')}>
      <View style={styles.badgeProductsAddedView}>
        <Text style={styles.badgeProductsAddedText}>{productsAdded}</Text>
      </View>
      <FontAwesomeIcon icon="shopping-cart" size={ICON_SIZE} />
    </TouchableOpacity>
  );
};
