import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import axios from "../../../axios/axios";

class LoginModal extends Component {
  state = {
    modal: false,

    email: "",
    password: "",
  };

  saveToken = (response) => {
    const data = response.data;
    for (var key in data) {
      if (key == "token") {
        alert("login success. Token genrated.");
        this.loginSuccess(data[key]);
      } else {
        alert("enter valid credential");
      }
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: this.state.email,
      password: this.state.password,
    };

    axios
      .post("/api/signin/", data)
      .then((response) => this.saveToken(response))
      .catch((error) => console.log("error", error));
  };

  updateValueHandler = (event, inputIdentifier) => {
    this.setState({ [inputIdentifier]: event.target.value });
  };

  LoginForm = () => {
    return (
      <Container>
        <Form>
          <FormGroup row>
            <Label for="exmapleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="something like abc@asgj.com"
              onChange={(event) => this.updateValueHandler(event, "email")}
            />
          </FormGroup>
          <FormGroup row>
            <Label for="exmaplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="time to ask something serious"
              onChange={(event) => this.updateValueHandler(event, "password")}
            />
          </FormGroup>
          <Button type="submit" color="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  };

  toggle = () =>
    this.setState((preState) => ({
      modal: !preState.modal,
    }));

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-outline-info mr-1"
          onClick={this.toggle}
        >
          Login
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>{this.LoginForm()}</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
