/* eslint-disable default-case */
import { FETCH_PRODUCTS } from "../actions/type";

const initialSate = { items: [] };

export default function(state = initialSate, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, item: action.payload };
    default:
      return state;
  }
}
