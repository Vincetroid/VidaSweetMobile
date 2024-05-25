import React from 'react';
import { ProductItem } from '@/interfaces';
import { ProductRow } from '@/components';
import { useAppSelector } from '@/hooks';
import { styles } from './CartProducts.styles';

export const CartProducts = () => {
  const { cartProductsCounter, cartProductsSubtotal, cartProductsIva } =
    useAppSelector(state => state.cart);

  const product1 = {
    docId: '49302897-4fd7-42cb-914c-629f358672b3',
    img: require('@/assets/products/ice-cream-liter.jpeg'),
    title: 'Helado 1l',
    price: 150.0,
    isFavorite: false,
  } as ProductItem;
  const product2 = {
    docId: 'd90e703e-7cb9-4a28-86c5-c2921d170a55',
    img: require('@/assets/products/ice-cream-single.jpeg'),
    title: 'Helado sencillo',
    price: 60.5,
    isFavorite: true,
  } as ProductItem;

  return (
    <>
      <ProductRow product={product1} />
      <ProductRow product={product2} />
      {/* {products.map(product => {
        return (
          <ProductRow
            product={product}
            // setAddresses={setAddresses}
            key={product.docId}
            // setLoader={setLoader}
            // pullAddresses={pullAddresses}
          />
        );
      })} */}
    </>
  );
};
