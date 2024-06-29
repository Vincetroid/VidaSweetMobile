import React from 'react';
import { ProductRow } from '@/components';
import { useAppSelector } from '@/hooks';

export const CartProducts = () => {
  const { cartProducts } = useAppSelector(state => state.cart);

  let products = Object.keys(cartProducts);

  return (
    <>
      {products.map(cartProductId => {
        const cartProduct = cartProducts[cartProductId];
        if (cartProduct.quantity > 0) {
          return <ProductRow product={cartProduct} />;
        }
      })}
    </>
  );
};
