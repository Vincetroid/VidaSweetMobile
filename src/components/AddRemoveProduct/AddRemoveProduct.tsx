import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { addProduct, removeProduct } from '@/redux-content';
import { styles } from './AddRemoveProduct.styles';
import { ProductItem } from '@/types';
import { useAppDispatch } from '@/hooks';

export const AddRemoveProduct = () => {
  const dispatch = useAppDispatch();
  const [counter, setCounter] = useState(0);

  const product1 = {
    id: 'd20b5a7c-ac35-4438-a66b-26c28cf19c27',
    img: require('@/assets/products/ice-cream-liter.jpeg'),
    title: 'Helado 1l',
    price: 150.0,
    isFavorite: false,
  } as ProductItem;
  const product2 = {
    id: '98aa8776-5bfb-4e73-a116-e02a596b212d',
    img: require('@/assets/products/ice-cream-single.jpeg'),
    title: 'Helado sencillo',
    price: 60.5,
    isFavorite: true,
  } as ProductItem;

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      dispatch(removeProduct(product1));
    }
  };

  const incrementCounter = () => {
    //por ahora 20, ya veremos despues
    if (counter <= 20) {
      setCounter(counter + 1);
      dispatch(addProduct(product1));
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
