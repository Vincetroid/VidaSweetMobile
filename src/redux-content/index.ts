// import userSlice from './user/User.slice';
import addressSlice, {
  addCurrentSelectedAddress,
} from './address/Address.slice';
import cartSlice, {
  addGlobalProductCounter,
  addProduct,
  removeGlobalProductCounter,
  removeProduct,
} from './cart/Cart.slice';

export {
  addCurrentSelectedAddress,
  addGlobalProductCounter,
  addProduct,
  addressSlice,
  cartSlice,
  removeGlobalProductCounter,
  removeProduct,
  // userSlice,
};
