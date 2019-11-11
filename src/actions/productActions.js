import { FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => dispatch => {
  fetch("http://localhost:8000/products")
    .then(res => res.json())
    .catch(err =>
      fetch("db.json")
        .then(res => res.json())
        .then(data => data.products)
    )
    .then(data => {
      return { type: FETCH_PRODUCTS, playload: data };
    });

  // fetch("http://localhost:8000/products")
  //   .then(res => res.json())
  //   .then(data => {
  //     return { type: FETCH_PRODUCTS, playload: data };
  //   });
};
