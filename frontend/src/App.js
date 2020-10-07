import React, { Component } from "react";
import axios from "./axios/axios";
import classes from "./App.module.css";
import NavBar from "./components/UI/NavBar";
import SideBar from "./components/home/home_side_bars";
import PageSlider from "./components/home/page_slider";
import WomenInMarket from "./assets/women-village-market.jpg";
import { Route, Switch } from "react-router-dom";
import Products from "./components/Products/Products";
import AboutUs from "./components/About/AboutUs";
import Slides from "./components/UI/Slides/Slides";

class App extends Component {
  state = {
    products: [],
    cart: [],

    logged_in: localStorage.getItem("token") ? true : false,
    first_name: "",
    token: "",
  };

  handleLogin = (first_name, token) => {
    if (first_name != "" && token != "") {
      this.setState((preState) => ({
        logged_in: true,
        first_name: first_name,
        token: token,
      }));
      localStorage.setItem("token", token);
    }
  };

  handleLogout = () => {
    this.setState((preState) => ({
      logged_in: false,
      first_name: "",
      token: "",
    }));
    localStorage.removeItem("token");
  };

  componentDidMount() {
    axios
      .get("/api/products/")
      .then((res) => this.setState({ products: res.data }))
      .catch((err) => console.log(err));

    if (this.state.logged_in) {
      const token = localStorage.getItem("token");
      axios
        .get("/api/current_user/", {
          headers: {
            // Authorization: `Token ${localStorage.getItem("token")}`,
            Authorization: `Token ${token}`,
          },
        })
        .then((res) => {
          const data = res.data;
          var first_name = "";
          for (var key in data) {
            if (key == "first_name") {
              first_name = String(data[key]);
            }
          }
          this.handleLogin(first_name, token);
        })
        .catch((error) => console.log(error));
    }
  }

  addCartItem = (item_id) => {
    this.setState((prevState) => ({
      arrayvar: [...prevState.arrayvar, item_id],
    }));
  };

  render() {
    return (
      <div className={classes.App}>
        <NavBar
          log_status={this.state.logged_in}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          first_name={this.state.first_name}
          cart_item={this.state.cart}
          addCartItem={this.addCartItem}
        />
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
