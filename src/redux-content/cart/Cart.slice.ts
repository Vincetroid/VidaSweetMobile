import { ProductItem } from '@/types';
import { generateRandomString } from '@/utils';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ShoppingCartProductItem {
  cartProducts: ProductItem[];
}

const initialState = { cartProducts: {} } as ShoppingCartProductItem;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<ShoppingCartProductItem>) {
      //
      // console.log('!state.cartProducts');
      // console.log(state.cartProducts);

      // if (state.cartProducts[action.payload.id]) {
      //   state.cartProducts[action.payload.id].quantity++;
      // }

      // if (state.cartProducts[action.payload.id].quantity <= 20) {
      //   state.cartProducts[action.payload.id].quantity++;
      // }
      if (
        // Object.keys(state.cartProducts).length === 0 ||
        state.cartProducts[action.payload.id] === undefined
      ) {
        console.log('state.cartProducts length');
        console.log(state.cartProducts.length);

        state.cartProducts = {
          ...state.cartProducts,
          [action.payload.id]: {
            price: action.payload.price,
            quantity: 1,
            // state.cartProducts.length === 0 ||
            // state.cartProducts.length === undefined
            //   ? 1
            //   : state.cartProducts[action.payload.id].quantity++,
          },
        };
      } else {
        console.log('going to');
        state.cartProducts[action.payload.id].quantity++;
      }
    },
    removeProduct(state, action: PayloadAction<ProductItem>) {
      if (state.cartProducts[action.payload.id].quantity > 0) {
        state.cartProducts[action.payload.id].quantity--;
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
