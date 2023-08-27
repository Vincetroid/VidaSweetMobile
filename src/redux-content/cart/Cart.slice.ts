import { ProductItem } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
  cartProducts: ProductItem[];
  cartProductsLength: number;
}

const initialState = { cartProducts: [], cartProductsLength: 0 } as CartState;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment(state) {
      state.cartProductsLength++;
    },
    decrement(state) {
      state.cartProductsLength--;
    },
    addProduct(state, action: PayloadAction<ProductItem>) {
      state.cartProducts.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<ProductItem>) {
      // delete state.cartProducts[action.payload]
      state.cartProducts.pop();
    },
  },
});

export const { increment, decrement, addProduct, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
