// import { ProductCart } from '@/interfaces';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';

// export interface CartSliceState {
//   cartProducts: ProductCart[];
//   cartProductsCounter: number | undefined;
//   cartProductsSubtotal: number;
//   cartProductsIva: number;
// }

// const initialState = {
//   cartProducts: {},
//   cartProductsCounter: 0,
//   cartProductsSubtotal: 0,
//   cartProductsIva: 0,
// } as CartSliceState;

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addProduct(state, action: PayloadAction<ProductCart>) {
//       const productId = action.payload.id as any; // TODO: Fix any: Element implicitly has an 'any' type because index expression is not of type 'number'
//       if (!state.cartProducts[productId]) {
//         state.cartProducts = {
//           ...state.cartProducts,
//           [action.payload.id]: {
//             price: action.payload.price,
//             quantity: 1,
//             subtotal: action.payload.price,
//           },
//         };
//       } else {
//         state.cartProducts[productId].quantity++;
//         state.cartProducts[productId].subtotal =
//           state.cartProducts[productId].quantity * action.payload.price;
//       }
//       // TO CHECK: https://stackoverflow.com/questions/36730793/can-i-dispatch-an-action-in-reducer. Looks like an antipattern
//       state.cartProductsSubtotal += state.cartProducts[productId].price;
//       state.cartProductsIva += state.cartProducts[productId].price * 0.16;
//     },
//     removeProduct(state, action: PayloadAction<ProductCart>) {
//       const productId = action.payload.id;

//       if (state.cartProducts[productId].quantity > 0) {
//         state.cartProducts[productId].quantity--;
//         state.cartProducts[productId].subtotal =
//           state.cartProducts[productId].quantity * action.payload.price;
//       }
//       state.cartProductsSubtotal -= state.cartProducts[productId].price;
//       state.cartProductsIva -= state.cartProducts[productId].price * 0.16;
//     },
//     addGlobalProductCounter(state) {
//       state.cartProductsCounter++;
//     },
//     removeGlobalProductCounter(state) {
//       state.cartProductsCounter--;
//     },
//   },
// });

// //Donde tendría que poner la accion de cartProductsSubtotal

// export const {
//   addProduct,
//   removeProduct,
//   addGlobalProductCounter,
//   removeGlobalProductCounter,
// } = cartSlice.actions;
// export default cartSlice.reducer;
