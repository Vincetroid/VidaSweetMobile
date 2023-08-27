import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { addProduct, removeProduct } from '@/redux-content';
import { styles } from './AddRemoveProduct.styles';
import { ProductItem } from '@/types';
import { useAppDispatch } from '@/hooks';

interface AddRemoveProductProps {
  product: ProductItem;
}

export const AddRemoveProduct = ({ product }: AddRemoveProductProps) => {
  const dispatch = useAppDispatch();
  const [counter, setCounter] = useState(0);

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
