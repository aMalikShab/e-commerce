import React from "react";

const Product = (props) => (
  <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#">
        <img
          class="card-img-top"
          src={props.item.item_image_url}
          alt={props.item.item_title}
        />
      </a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">{props.item.item_title}</a>
        </h4>
        <h5>Rs. {props.item.item_price}</h5>
        <p class="card-text">{props.item.item_desc}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">
          &#9733; &#9733; &#9733; &#9733; &#9734;
        </small>
      </div>
    </div>
  </div>
);

export default Product;
