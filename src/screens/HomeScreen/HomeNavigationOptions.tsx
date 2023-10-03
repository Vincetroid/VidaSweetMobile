import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { ShoppingCartButton } from '@/components';

export const HomeNavigationOptions: NativeStackNavigationOptions = {
  title: 'Vida Sweet',
  headerLeft: () => null,
  headerRight: () => <ShoppingCartButton />,
};
