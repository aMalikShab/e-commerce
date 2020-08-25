import React, { Component } from "react";
import Product from "./components/Product";
import axiosProduct from "./axios/axiosProduct";
import classes from "./App.module.css";

class App extends Component {
  state = {
    productList: [],
  };

  componentDidMount() {
    axiosProduct
      .get("/api/protducts/")
      .then((res) => this.setState({ productList: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className={classes.App}>
        <h3 className={classes.Intro}>Welcome to E-commerce</h3>
        {this.state.productList.length === 0 ? (
          <div>
            Currently, There are no items available. Thanks for visiting.
          </div>
        ) : (
          <div>
            {this.state.productList.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        )}

        <div className={classes.Footer}>All rights reserved to aMalik</div>
      </div>
    );
  }
}
export default App;
