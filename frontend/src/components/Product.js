import React from "react";
import classes from "./Product.module.css";

const Product = (props) => (
  <div className={classes.Product}>
    <img src={props.item.item_image_url} alt={props.item.item_title} />
    <table>
      <thead>
        <tr>
          <td>Item</td>
          <td>Description</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.item.item_title}</td>
          <td>{props.item.item_desc}</td>
          <td>{props.item.item_price}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Product;
