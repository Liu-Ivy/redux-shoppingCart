import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cart from "./cartReducer";

export default combineReducers({
  products: productReducer,
  cart: cart
});
