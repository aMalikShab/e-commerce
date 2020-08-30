import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="col-sm-3 pr-5  border">
      <h4 className="my-4">Select Category</h4>
      <div className="list-group">
        <NavLink to="/" className="list-group-item">
          Mal
        </NavLink>
        <NavLink to="/" className="list-group-item">
          Chor
        </NavLink>
        <NavLink to="/" className="list-group-item">
          Helicopter
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
