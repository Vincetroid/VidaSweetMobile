import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Button.styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const Button = ({ title = '', onPress }: ButtonProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};
