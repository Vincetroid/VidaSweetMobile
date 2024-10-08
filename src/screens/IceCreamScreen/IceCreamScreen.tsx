import React from 'react';
import { ScrollView } from 'react-native';
import { OrderInProgressIndicator, Products, SearchBar } from '@/components';
import { useFetchProducts } from '@/hooks/useFetchProducts';

export const IceCreamScreen = () => {
  const { loader, products, productsForSearch, setProductsForSearch } =
    useFetchProducts();

  return (
    <>
      <OrderInProgressIndicator showOrderInProgress />
      <SearchBar
        products={products}
        productsForSearch={productsForSearch}
        setProductsForSearch={setProductsForSearch}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Products loader={loader} products={productsForSearch} />
      </ScrollView>
    </>
  );
};
