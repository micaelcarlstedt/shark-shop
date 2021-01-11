import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { Button } from "./Button";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            category,
            img,
            info,
            price,
            title,
          } = value.selectedProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2 className="text-capitalize">model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted">
                    Category: <span className="text-uppercase">{category}</span>
                  </h4>
                  <h4 className="text-capitalize">
                    <strong>
                      price : <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    product description:
                  </p>
                  <p className="lead">{info}</p>
                  <div>
                    <Link to="/">
                      <Button>back to products</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
