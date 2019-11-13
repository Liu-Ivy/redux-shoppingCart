/* eslint-disable default-case */
import { FETCH_PRODUCTS } from "../actions/type";
import { FILTER_PRODUCTS_BY_SIZE } from "../actions/type";
import { ORDER_PRODUCTS_BY_PRICE } from "../actions/type";

const initialState = { items: [], filteredItems: [], size: "" };

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort
      };
    default:
      return state;
  }
}
