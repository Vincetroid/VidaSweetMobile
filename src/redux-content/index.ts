import { store } from './store';
import cartSlice, {
  increment,
  decrement,
  addProduct,
  removeProduct,
} from './cart/Cart.slice';

export { store, cartSlice, increment, decrement, addProduct, removeProduct };
