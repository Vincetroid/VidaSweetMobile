import React, { ReactNode, useState } from 'react';
import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { styles } from './Button.styles';

interface ButtonProps {
  title?: string;
  onPress: () => void;
  buttonViewStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  children?: ReactNode;
}

export const Button = ({
  title = '',
  onPress,
  buttonViewStyle,
  buttonTextStyle,
  children,
}: ButtonProps) => {
  const [loader] = useState(false);

  const buttonLayoutContent = children ? (
    children
  ) : (
    <Text style={[styles.btnText, buttonTextStyle]}>{title}</Text>
  );

  return (
    <TouchableOpacity style={[styles.btn, buttonViewStyle]} onPress={onPress}>
      {!loader ? buttonLayoutContent : <ActivityIndicator color="grey" />}
    </TouchableOpacity>
  );
};
