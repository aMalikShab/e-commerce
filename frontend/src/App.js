import React, { Component } from "react";
import Product from "./home_components/product_list";
import axiosProduct from "./axios/axiosProduct";
import "./css_files/App.css";
import NavBar from "./home_components/NavBar";
import SideBar from "./home_components/home_side_bars";
import ImageSlide from "./home_components/home_image_carousel";
import PageSlider from "./home_components/page_slider";

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
      <div>
        <header class="bg-primary text-white">
          <div class="container text-center">
            <h1>Welcome to E-commerce</h1>
            <img src="components/women-village-market.jpg" alt="img" />
            <p>Best place to find dil wali sarkar.</p>
          </div>
        </header>

        <NavBar />
        <ImageSlide />

        <div class="container border mt-5">
          <div class="row">
            <SideBar />
            <div class="col-sm-9 pl-3 border">
              {this.state.productList.length === 0 ? (
                <div>
                  Currently, There are no items available. Thanks for visiting.
                </div>
              ) : (
                <div class="row">
                  {this.state.productList.map((item) => (
                    <Product key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <PageSlider />
        </div>

        <footer class="py-5 bg-dark">
          <div class="container">
            <p class="m-0 text-center text-white">
              Copyright &copy; All rights reserved to GadiWala
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
