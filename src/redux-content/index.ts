// import userSlice from './user/User.slice';
import addressSlice, {
  addCurrentAddressId,
  addCurrentSelectedAddress,
} from './address/Address.slice';
import cartSlice, {
  addGlobalProductCounter,
  addProduct,
  removeGlobalProductCounter,
  removeProduct,
} from './cart/Cart.slice';

export {
  addCurrentAddressId,
  addCurrentSelectedAddress,
  addGlobalProductCounter,
  addProduct,
  addressSlice,
  cartSlice,
  removeGlobalProductCounter,
  removeProduct,
  // userSlice,
};
