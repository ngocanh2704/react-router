import React from "react";
import CustomLink from "./CustomLink";
import { Route } from "react-router-dom";
import Product from "./Product";

var products = [
  {
    id: 1,
    slug: "iphone",
    name: "iPhone X",
    price: 35000000,
  },
  {
    id: 2,
    slug: "samsung",
    name: "Samsung galaxy s7",
    price: 12000000,
  },
  {
    id: 3,
    slug: "oppo",
    name: "Oppo F1s",
    price: 7000000,
  },
];

const itemProduct = (products, match) => {
  var result = null;
  var url = match.url;
  if (products.length > 0) {
    result = products.map((product, index) => {
      return (
        <CustomLink
          key={index}
          label={product.name}
          to={`${url}/${product.slug}`}
        >
          <li key={index} className="list-group-item">
            {product.id} - {product.name} - {product.price}
          </li>
        </CustomLink>
      );
    });
  }
  return result;
};

const Products = (props) => {
  var { match, location } = props;
  console.log(location)
  return (
    <div className="container">
      <h1>Danh sach san pham</h1>
      <div className="row">
        <ul className="list-group">{itemProduct(products, match)}</ul>
      </div>

      <div className="row">
        <Route path="/products/:slug" component={Product} />
      </div>
    </div>
  );
};

export default Products;
