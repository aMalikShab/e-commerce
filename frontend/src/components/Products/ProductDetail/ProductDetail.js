import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";

class ProductDetail extends Component {
  render() {
    alert("ProductDetial");
    return (
      <div>
        <h2>welcome to product details</h2>

        {/* <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            this.is body<h2>id= {params.id}</h2>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal> */}
      </div>
    );
  }
}

export default ProductDetail;
