import React, { Component } from "react";
import { Modal, Alert } from "reactstrap";

const NestedSuccessModal = (props) => {
  return (
    <Modal isOpen={props.nestedModal}>
      <Alert
        color="success"
        isOpen={props.successAlert}
        toggle={props.toggleAll}
      >
        Account created successfully.
      </Alert>
    </Modal>
  );
};

export default NestedSuccessModal;
