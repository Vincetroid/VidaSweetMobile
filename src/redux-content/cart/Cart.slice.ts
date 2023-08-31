import { ProductCart } from '@/interfaces';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartSliceProps {
  cartProducts: ProductCart[];
}

const initialState = { cartProducts: {} } as CartSliceProps;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<ProductCart>) {
      const productId = action.payload.id as any; // TODO: Fix any: Element implicitly has an 'any' type because index expression is not of type 'number'
      if (!state.cartProducts[productId]) {
        state.cartProducts = {
          ...state.cartProducts,
          [action.payload.id]: {
            price: action.payload.price,
            quantity: 1,
            subtotal: action.payload.price,
          },
        };
      } else {
        state.cartProducts[productId].quantity++;
        state.cartProducts[productId].subtotal =
          state.cartProducts[productId].quantity * action.payload.price;
      }
    },
    removeProduct(state, action: PayloadAction<ProductCart>) {
      const productId = action.payload.id;

      if (state.cartProducts[productId].quantity > 0) {
        state.cartProducts[productId].quantity--;
        state.cartProducts[productId].subtotal =
          state.cartProducts[productId].quantity * action.payload.price;
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
