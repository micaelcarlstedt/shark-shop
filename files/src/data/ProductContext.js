import React, { Component } from "react";
import { products } from "./ProductData";

const ProductContext = React.createContext();

class ProductProvider extends Component {

  state = {
    products: [],
    selectedProduct: {}
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    products.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  showDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { selectedProduct: product };
    });
  };


  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          showDetail: this.showDetail,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
