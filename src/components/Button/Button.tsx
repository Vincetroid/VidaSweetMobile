import React, { useState } from 'react';
import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { styles } from './Button.styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonViewStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
}

export const Button = ({
  title = '',
  onPress,
  buttonViewStyle,
  buttonTextStyle,
}: ButtonProps) => {
  // const navigation = useNavigation();
  const [loader] = useState(false);

  return (
    <TouchableOpacity style={[styles.btn, buttonViewStyle]} onPress={onPress}>
      {!loader ? (
        <Text style={[styles.btnText, buttonTextStyle]}>{title}</Text>
      ) : (
        <ActivityIndicator color="grey" />
      )}
    </TouchableOpacity>
  );
};
