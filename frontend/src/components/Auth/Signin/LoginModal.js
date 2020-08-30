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

class LoginModal extends Component {
  state = {
    modal: false,
    setModal: false,
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
          <ModalBody>
            <LoginForm />
          </ModalBody>
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

const handleSubmit = () => {
  alert("form submit not implemented yat.");
};

const LoginForm = () => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="exmapleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="something like abc@asgj.com"
          />
        </FormGroup>
        <FormGroup row>
          <Label for="exmaplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="time to ask something serious"
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
