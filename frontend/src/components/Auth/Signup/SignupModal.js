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

class SignupModal extends Component {
  state = {
    modal: false,
    setModal: false,
    name: "",
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("/api/signup/", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  updateValueHandler = (event, inputIdentifier) => {
    this.setState({ [inputIdentifier]: event.target.value });
  };

  SignupForm = () => {
    return (
      <Container>
        <Form>
          <FormGroup row>
            <Label for="exmapleEmail">Name</Label>
            <Input
              type="text"
              name="name"
              id="ankush"
              placeholder="ankush kumar singh"
              onChange={(event) => this.updateValueHandler(event, "name")}
            />
          </FormGroup>
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
          Signup
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Signup</ModalHeader>
          <ModalBody>{this.SignupForm()}</ModalBody>
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

export default SignupModal;
