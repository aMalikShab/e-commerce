import React, { Component } from "react";
import cartLogo from "../../../assets/cart/cartLogo.png";
import { Button } from "reactstrap";
const Cart = (props) => {
  return (
    <div>
      {props.cart_item.length > 0 ? (
        <Button
          type="button"
          className="btn btn-outline-info mr-1"
          color="warning"
          // onClick={}
        >
          <img
            src={cartLogo}
            style={{
              width: 20,
              height: 20,
            }}
            alt="cart"
          />
          {props.cart_item.length}
        </Button>
      ) : (
        <button type="button" className="btn btn-outline-info mr-1">
          <img
            src={cartLogo}
            style={{
              width: 20,
              height: 20,
            }}
            alt="cart"
          />
        </button>
      )}
    </div>
  );
};

export default Cart;
