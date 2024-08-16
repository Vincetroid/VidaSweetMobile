import React from 'react';
import { ProductRow } from '@/components';
import { useAppSelector } from '@/hooks';

interface CartProductsProps {
  disabled?: boolean;
}

export const CartProducts = ({ disabled }: CartProductsProps) => {
  const { cartProducts } = useAppSelector(state => state.cart);

  let products = Object.keys(cartProducts);

  return (
    <>
      {products.map(cartProductId => {
        const cartProduct = cartProducts[cartProductId];
        if (cartProduct.quantity > 0) {
          return <ProductRow product={cartProduct} disabled={disabled} />;
        }
      })}
    </>
  );
};
