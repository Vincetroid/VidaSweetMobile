import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  cartProducts: [];
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
    incrementByAmount(state, action: PayloadAction<number>) {
      state.cartProductsLength += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = cartSlice.actions;
export default cartSlice.reducer;
