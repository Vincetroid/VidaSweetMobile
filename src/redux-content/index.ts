import { store } from './store';
import cartSlice, {
  increment,
  decrement,
  incrementByAmount,
} from './cart/Cart.slice';

export { store, cartSlice, increment, decrement, incrementByAmount };
