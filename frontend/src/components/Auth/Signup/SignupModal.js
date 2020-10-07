import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  FormFeedback,
} from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import NestedSuccessModel from "./OnSuccess/NestedSuccessModal";
import axios from "../../../axios/axios";

class SignupModal extends Component {
  state = {
    modal: false,
    first_name: "",
    last_name: "",
    email: "",
    password: "",

    nestedModal: false,
    successAlert: false,

    isInvalidMail: false,
    emailErrorMessage: "",
  };

  toggleAll = () =>
    this.setState((preState) => ({
      nestedModal: !preState.nestedModal,
      successAlert: !preState.successAlert,
    }));

  alterToggle = () => {
    this.setState((preState) => ({
      modal: !preState.modal,
      nestedModal: !preState.nestedModal,
      successAlert: !preState.successAlert,
      isInvalidMail: false,
      emailErrorMessage: "",
    }));
  };

  handleErrorResponse = (error) => {
    const data = error.response.data;
    for (var key in data) {
      if (key == "username") {
        this.setState((preState) => ({
          emailErrorMessage: String(data[key]),
          isInvalidMail: true,
        }));
      }
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: this.state.email,
      email: this.state.email,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
    };

    axios
      .post("/api/signup/", data)
      .then(this.alterToggle)
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

  SignupForm = () => {
    return (
      <Container>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exmapleName">First Name</Label>
                <Input
                  type="text"
                  name="first_name"
                  id="ankush"
                  placeholder="ankush"
                  onChange={(event) =>
                    this.updateValueHandler(event, "first_name")
                  }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exmapleName">Last Name</Label>
                <Input
                  type="text"
                  name="last_name"
                  id="ankush"
                  placeholder="singh"
                  onChange={(event) =>
                    this.updateValueHandler(event, "last_name")
                  }
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup row>
            <Label for="exmapleEmail">Email</Label>
            <Input
              invalid={this.state.isInvalidMail}
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="something like abc@asgj.com"
              onChange={(event) => this.updateValueHandler(event, "email")}
            />
            <FormFeedback invalid>{this.state.emailErrorMessage}</FormFeedback>
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
      isInvalidMail: false,
      emailErrorMessage: "",
    }));

  render() {
    return (
      <div>
        <NestedSuccessModel
          nestedModal={this.state.nestedModal}
          successAlert={this.state.successAlert}
          toggleAll={this.toggleAll}
        />

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
