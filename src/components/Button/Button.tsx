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
  isLoading?: boolean;
}

export const Button = ({
  title = '',
  onPress,
  buttonViewStyle,
  buttonTextStyle,
  children,
  isLoading = false,
}: ButtonProps) => {
  const buttonLayoutContent = children ? (
    children
  ) : (
    <Text style={[styles.btnText, buttonTextStyle]}>{title}</Text>
  );

  return (
    <TouchableOpacity
      style={[styles.btn, buttonViewStyle]}
      onPress={onPress}
      disabled={isLoading}>
      {!isLoading ? buttonLayoutContent : <ActivityIndicator color="grey" />}
    </TouchableOpacity>
  );
};
