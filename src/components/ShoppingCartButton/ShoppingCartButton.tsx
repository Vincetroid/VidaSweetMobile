import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { themeStyles } from '@/global-styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useAppSelector } from '@/hooks';
import { styles } from './ShoppingCartButton.styles';

// interface ShoppingCartButtonProps {}

export const ShoppingCartButton = () => {
  const ICON_SIZE = 26;
  const navigation = useNavigation();
  const { cartProductsCounter } = useAppSelector(state => state.cart);

  return (
    <TouchableOpacity
      style={styles.shoppingCartViewWrapper}
      onPress={() => navigation.navigate('ShoppingCart')}>
      <View style={styles.badgeProductsAddedView}>
        <Text style={styles.badgeProductsAddedText}>{cartProductsCounter}</Text>
      </View>
      <FontAwesomeIcon
        icon="shopping-cart"
        size={ICON_SIZE}
        color={themeStyles.text}
      />
    </TouchableOpacity>
  );
};
