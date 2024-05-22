import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ProductItem } from '@/interfaces';
import {
  addGlobalProductCounter,
  addProduct,
  removeGlobalProductCounter,
  removeProduct,
} from '@/redux-content';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { styles } from './AddRemoveProduct.styles';

interface AddRemoveProductProps {
  product: ProductItem;
}

export const AddRemoveProduct = ({ product }: AddRemoveProductProps) => {
  const dispatch = useAppDispatch();
  const { cartProducts } = useAppSelector(state => state.cart);

  // Tratar de optimizar esto:
  // Tal vez llamar productsFiltered en utils
  // Tal vez no usar cartProducts sino pasarlo por parametro
  // useEffect(() => {
  //   const productsFiltered = cartProducts.filter(
  //     prodItem => prodItem.id === product.id,
  //   );
  //   setCounter(productsFiltered.length);
  // }, [cartProducts.length]);

  const decrementCounter = () => {
    if (cartProducts[product.id]?.quantity > 0) {
      dispatch(removeProduct(product));
      // Probably will be removed next line https://stackoverflow.com/questions/36730793/can-i-dispatch-an-action-in-reducer
      dispatch(removeGlobalProductCounter());
    }
  };

  const incrementCounter = () => {
    if (cartProducts[product.id]?.quantity <= 20) {
      dispatch(addProduct(product));
      // Probably will be removed next line https://stackoverflow.com/questions/36730793/can-i-dispatch-an-action-in-reducer
      dispatch(addGlobalProductCounter());
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftSide} onPress={decrementCounter}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <View style={styles.centerSide}>
        <Text style={styles.text}>
          {cartProducts[product.id]?.quantity || 0}
        </Text>
      </View>
      <TouchableOpacity style={styles.rightSide} onPress={incrementCounter}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
