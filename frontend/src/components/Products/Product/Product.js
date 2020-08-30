import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Product.module.css";

const Product = (props) => (
  <div className={classes.Product}>
    <div className="card h-100">
      <NavLink to="/">
        <img
          className="card-img-top"
          src={props.item.item_image_url}
          alt={props.item.item_title}
        />
      </NavLink>
      <div className="card-body">
        <h4 className="card-title">
          <NavLink to="/">{props.item.item_title}</NavLink>
        </h4>
        <h5>Rs. {props.item.item_price}</h5>
        <p className="card-text">{props.item.item_desc}</p>
      </div>
    </div>
  </div>
);

export default Product;
