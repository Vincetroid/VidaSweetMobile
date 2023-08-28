import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { addProduct, removeProduct } from '@/redux-content';
import { styles } from './AddRemoveProduct.styles';
import { ProductItem } from '@/types';
import { useAppDispatch, useAppSelector } from '@/hooks';

interface AddRemoveProductProps {
  product: ProductItem;
}

export const AddRemoveProduct = ({ product }: AddRemoveProductProps) => {
  const dispatch = useAppDispatch();
  const [counter, setCounter] = useState(0);
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
    if (counter > 0) {
      setCounter(counter - 1);
      dispatch(removeProduct(product));
    }
  };

  const incrementCounter = () => {
    //por ahora 20, ya veremos despues
    if (counter <= 20) {
      setCounter(counter + 1);
      dispatch(addProduct(product));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftSide} onPress={decrementCounter}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <View style={styles.centerSide}>
        <Text style={styles.text}>{counter}</Text>
      </View>
      <TouchableOpacity style={styles.rightSide} onPress={incrementCounter}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
