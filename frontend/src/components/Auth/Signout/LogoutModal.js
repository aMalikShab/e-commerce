import React, { useState } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const LogoutModal = (props) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret className="btn btn-outline-info mr-1">
        {props.first_name}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Hi {props.first_name}</DropdownItem>
        <DropdownItem divider />
        <DropdownItem disabled>Your Profile(disabled)</DropdownItem>
        <DropdownItem>
          <button
            type="button"
            className="btn btn-outline-info mr-1"
            onClick={props.handleLogout}
          >
            Log out
          </button>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default LogoutModal;
