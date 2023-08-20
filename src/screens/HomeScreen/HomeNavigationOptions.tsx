import React from 'react';
import { ShoppingCartButton } from '@/components';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const HomeNavigationOptions: NativeStackNavigationOptions = {
  title: 'Vida Sweet',
  headerLeft: () => null,
  headerRight: () => <ShoppingCartButton />,
};
