import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { decrement, increment, store } from '@/redux-content';
import { useDispatch } from 'react-redux';
import { styles } from './AddRemoveProduct.styles';

export const AddRemoveProduct = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      // store.dispatch(decrement());
      dispatch(decrement());
    }
  };

  const incrementCounter = () => {
    //por ahora 20, ya veremos despues
    if (counter <= 20) {
      setCounter(counter + 1);
      // store.dispatch(increment());
      dispatch(increment());
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
