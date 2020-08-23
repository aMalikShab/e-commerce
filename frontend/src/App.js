import React, { Component } from "react";
import axios from "axios";
import Product from "./components/Product";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
    // this.refreshList = this.refreshList.bind(this);
  }

  refreshList = () => {
    axios
      .get("/api/protducts/")
      .then((res) => this.setState({ productList: res.data }))
      .catch((err) => console.log(err));
  };
  componentWillMount() {
    this.refreshList();
  }

  render() {
    return (
      <div>
        <div class="page-header">
          <h3>Welcome to E-commerce</h3>
        </div>
        <div class="row">
          {this.state.productList.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
        <div class="panel-footer">All rights served to aMalik</div>
      </div>
    );
  }
}
export default App;
