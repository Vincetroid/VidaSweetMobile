import { store } from './store';
import cartSlice, {
  addProduct,
  removeProduct,
  addGlobalProductCounter,
  removeGlobalProductCounter,
} from './cart/Cart.slice';

export {
  store,
  cartSlice,
  addProduct,
  removeProduct,
  addGlobalProductCounter,
  removeGlobalProductCounter,
};
