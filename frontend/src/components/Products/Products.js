import React from "react";
import Product from "./Product/Product";
import classes from "./Products.module.css";

const Products = (props) => (
  <div className={classes.Products}>
    {props.products.map((item) => (
      <Product key={item.id} item={item} />
    ))}
  </div>
);

export default Products;
