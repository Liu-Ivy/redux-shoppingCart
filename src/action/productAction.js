import FETCH_PRODUCTS from "./type";

export const fetchProducts = () => dispatch => {
  fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => {
      return { type: FETCH_PRODUCTS, payload: data };
    });
};
