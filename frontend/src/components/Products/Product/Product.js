import React from "react";
import { Link } from "react-router-dom";
import classes from "./Product.module.css";
import { Route } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";

const Product = (props) => (
  <div className={classes.Product}>
    <div className="card h-100">
      <Link to="productDetail">
        {/* <NavLink to={`/productDetail/${props.item.id}`}> */}
        <img
          className="card-img-top"
          src={props.item.item_image_url}
          alt={props.item.item_title}
        />
      </Link>
      <div className="card-body">
        <h4 className="card-title">
          <Link to="productDetail">{props.item.item_title}</Link>
        </h4>
        <h5>Rs. {props.item.item_price}</h5>
        <p className="card-text">{props.item.item_desc}</p>
      </div>
      <Route path="/productDetail" component={ProductDetail}></Route>
    </div>
  </div>
);

export default Product;
