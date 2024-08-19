import { combineReducers } from "redux";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./userReducer";

import { productListReducer, productDetailsReducer } from "./productReducer";

import cartReducer from "./cartReducer";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListUserReducer,
} from "./orderReducers";
import {
  addressAddReducer,
  addressDeleteReducer,
  addressListUserReducer,
} from "./addressReducers";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderListUser: orderListUserReducer,
  addressListUser: addressListUserReducer,
  addressAdd: addressAddReducer,
  addressDelete: addressDeleteReducer,
});

export default rootReducer;
