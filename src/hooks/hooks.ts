import { useDispatch, useSelector } from 'react-redux';
import {
  AnyAction,
  Dispatch,
  EmptyObject,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { TypedUseSelectorHook } from 'react-redux';
import { CartState } from '@/redux-content/cart/Cart.slice';

export type SliceStates = {
  cart: CartState;
};

export interface AsyncThunkConfig {
  state?: RootState;
  dispatch?: Dispatch;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
}

export type RootState = SliceStates;
export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
export type AppSelector = TypedUseSelectorHook<RootState>;
export type AppDispatch = ThunkDispatch<
  EmptyObject & SliceStates & PersistPartial,
  void,
  AnyAction
> &
  Dispatch<any>;

export const isState = (state: any): state is RootState => state;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<TypedDispatch<AppDispatch>>();
export const useAppSelector: AppSelector = useSelector; // With this you avoid: 'state' is of type 'unknown' and the possible values will display when type state.something in your IDE with Intellisense
