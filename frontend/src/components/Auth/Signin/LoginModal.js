import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import axios from "../../../axios/axios";

class LoginModal extends Component {
  state = {
    modal: false,

    email: "",
    password: "",

    first_name: "",
    token: "",

    is_invalid: false,
    invalid_message: "",
  };

  saveToken = (response) => {
    const data = response.data;
    for (var key in data) {
      if (key == "first_name") {
        this.setState({ [key]: data[key] });
      } else if (key == "token") {
        this.setState({ [key]: data[key] });
      }
    }
    this.toggle();
  };

  handleErrorResponse = (error) => {
    const data = error.response.data;
    for (var key in data) {
      if (key == "non_field_errors") {
        this.setState((preState) => ({
          invalid_message: String(data[key]),
          is_invalid: true,
        }));
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
      .catch((error) => {
        if (error.response) {
          this.handleErrorResponse(error);
        } else {
          console.log(error);
        }
      });
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
              invalid={this.state.is_invalid}
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="something like abc@asgj.com"
              onChange={(event) => this.updateValueHandler(event, "email")}
            />
            <FormFeedback invalid>{this.state.invalid_message}</FormFeedback>
          </FormGroup>
          <FormGroup row>
            <Label for="exmaplePassword">Password</Label>
            <Input
              invalid={this.state.is_invalid}
              type="password"
              name="password"
              id="examplePassword"
              placeholder="time to ask something serious"
              onChange={(event) => this.updateValueHandler(event, "password")}
            />
            <FormFeedback invalid>{this.state.invalid_message}</FormFeedback>
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
      email: "",
      password: "",
      is_invalid: false,
      invalid_message: "",
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
        {this.props.handleLogin(this.state.first_name, this.state.token)}
      </div>
    );
  }
}

export default LoginModal;
