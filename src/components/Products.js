import React, { Component } from "react";
import util from "../util";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productAction";
import { addToCart } from "../actions/cartAction";

class Products extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }
  render() {
    // console.log(this.props.products);
    const productItems = this.props.products.map(product => (
      <div className="col-md-4" key={product.id}>
        <div className="thumbnail text-center">
          <a
            href={`#${product.id}`}
            onClick={() => this.props.addToCart(this.props.cartItems, product)}
          >
            <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <b>{util.formatCurrency(product.price)}</b>
          <button
            className="btn btn-primary"
            onClick={() => this.props.addToCart(this.props.cartItems, product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}

const mapStateToProps = state => ({
  products: state.products.filteredProducts,
  cartItems: state.cart.items
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
