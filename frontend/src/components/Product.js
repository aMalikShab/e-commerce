import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="jumbotron col-sm-2">
        <img src={this.props.item.item_image}></img>
        <mark>{this.props.item.item_title}</mark>
        <div class="lead ">{this.props.item.item_desc}</div>
        <div class="text-primary">{this.props.item.item_price}</div>
      </div>
    );
  }
}
export default Product;
