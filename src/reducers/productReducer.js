/* eslint-disable default-case */
import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE
} from "../actions/type";

const initialState = { items: [], filteredProducts: [], size: "", sort: "" };

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        filteredProducts: action.payload
      };
    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        filteredProducts: action.payload.items,
        size: action.payload.size
      };
    case ORDER_PRODUCTS_BY_PRICE:
      // console.log("action.payload", action.payload);
      return {
        ...state,
        filteredProducts: action.payload.items,
        sort: action.payload.sort
      };
    default:
      return state;
  }
}
