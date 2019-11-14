import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/type";

const initialState = { items: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        items: action.payload.cartItems //new state
      };
    case REMOVE_FROM_CART:
      return {
        items: action.payload.cartItems
      };
    default:
      return state;
  }
}
