import React, { Component } from "react";
import axios from "./axios/axios";
import classes from "./App.module.css";
import NavBar from "./components/UI/NavBar";
import SideBar from "./components/home/home_side_bars";
import PageSlider from "./components/home/page_slider";
import WomenInMarket from "./assets/women-village-market.jpg";
import { Route } from "react-router-dom";
import Products from "./components/Products/Products";
import AboutUs from "./components/About/AboutUs";
import Slides from "./components/UI/Slides/Slides";
class App extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get("/api/products/")
      .then((res) => this.setState({ products: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className={classes.App}>
        <NavBar />
        <div className={classes.Home}>
          <h1>Welcome to E-commerce</h1>
          <img src={WomenInMarket} alt="women-in-village-market" />
          <p>Best place to find dil wali sarkar.</p>
        </div>
        <Route path="/slides" component={Slides} />
        <Route path="/about-us" component={AboutUs}></Route>
        <div className="container border mt-5">
          <div className="row">
            <SideBar />
            <div className="col-sm-9 pl-3 border">
              <Route
                path="/products"
                component={() => <Products products={this.state.products} />}
              ></Route>
            </div>
          </div>
          <PageSlider />
        </div>

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; All rights reserved to GadiWala
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
