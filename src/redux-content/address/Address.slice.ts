// import { serverTimestamp } from 'firebase/firestore';
import { AddressItem } from '@/interfaces';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { useAppDispatch } from '@/hooks';

export interface AddressSliceState {
  // addresses: AddressItem[];
  currentSelectedAddress: AddressItem; // ESTE TRATAR DE QUITARLO
}

// const initialTimestamp = new Timestamp(new Date().getMilliseconds(), 0); // no se sabe si está bien esto pero getTime saca error

const addressObj = {
  docId: '',
  addressName: '',
  street: '',
  exteriorNumber: '',
  interiorNumber: '',
  colonia: '',
  municipality: '',
  state: '',
  zipCode: '',
  countryPhoneCode: '',
  phoneNumber: '',
  specialIndications: '',
  isCurrent: false,
  isEdit: false,
  fullAddress: '',
  // createTimestamp: serverTimestamp(),
  // updateTimestamp: serverTimestamp(),
  createTimestamp: new Date().toString(),
  updateTimestamp: new Date().toString(),
};

const initialState = {
  // addresses: [],
  currentSelectedAddress: addressObj,
} as AddressSliceState;

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddresses(state, action: PayloadAction<AddressItem[]>) {
      // const productId = action.payload.id as any;
      // if (!state.cartProducts[productId]) {
      //   state.cartProducts = {
      //     ...state.cartProducts,
      //     [action.payload.id]: {
      //       price: action.payload.price,
      //       quantity: 1,
      //       subtotal: action.payload.price,
      //     },
      //   };
      // } else {
      //   state.cartProducts[productId].quantity++;
      //   state.cartProducts[productId].subtotal =
      //     state.cartProducts[productId].quantity * action.payload.price;
      // }
      // // TO CHECK: https://stackoverflow.com/questions/36730793/can-i-dispatch-an-action-in-reducer. Looks like an antipattern
      // state.cartProductsSubtotal += state.cartProducts[productId].price;
      // state.cartProductsIva += state.cartProducts[productId].price * 0.16;
    },
    addCurrentSelectedAddress(state, action: PayloadAction<AddressItem>) {
      // const addressId = action.payload.id as any;

      //TE QUEDASTE AQUI, YA ES LLAAMADO
      console.log('addCurrentSelectedAddress');
      // console.log('action.payload.id');
      // console.log(action.payload.docId);

      const {
        docId,
        addressName,
        street,
        exteriorNumber,
        interiorNumber,
        colonia,
        municipality,
        // state, duplicado, cambiarle el nombre
        zipCode,
        countryPhoneCode,
        phoneNumber,
        specialIndications,
        isCurrent,
        isEdit,
        fullAddress,
      } = action.payload;

      state.currentSelectedAddress = {
        // ...state.currentSelectedAddress,
        // [action.payload.docId]: {
        docId,
        addressName,
        street,
        exteriorNumber,
        interiorNumber,
        colonia,
        municipality,
        state: 'Mexico',
        zipCode,
        countryPhoneCode,
        phoneNumber,
        specialIndications,
        isCurrent,
        isEdit,
        fullAddress,
        // createTimestamp: serverTimestamp(),
        // updateTimestamp: serverTimestamp(),
        createTimestamp: new Date().toString(),
        updateTimestamp: new Date().toString(),
        // },
      };
    },
    removeAddresses(state, action: PayloadAction) {
      // const productId = action.payload.id;
      // if (state.cartProducts[productId].quantity > 0) {
      //   state.cartProducts[productId].quantity--;
      //   state.cartProducts[productId].subtotal =
      //     state.cartProducts[productId].quantity * action.payload.price;
      // }
      // state.cartProductsSubtotal -= state.cartProducts[productId].price;
      // state.cartProductsIva -= state.cartProducts[productId].price * 0.16;
    },
  },
});

//Donde tendría que poner la accion de cartProductsSubtotal

export const { addAddresses, addCurrentSelectedAddress, removeAddresses } =
  addressSlice.actions;
export default addressSlice.reducer;
