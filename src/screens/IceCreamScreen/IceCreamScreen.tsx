import React from 'react';
import { ScrollView } from 'react-native';
import { Products, SearchBar } from '@/components';

export const IceCreamScreen = () => {
  return (
    <>
      <SearchBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Products />
      </ScrollView>
    </>
  );
};
