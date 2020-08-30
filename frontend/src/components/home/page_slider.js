import React from "react";
import { NavLink } from "react-router-dom";

const ImageSlider = () => {
  return (
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <NavLink className="page-link" to="/#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </NavLink>
      </li>
      <li className="page-item">
        <NavLink className="page-link" to="/#">
          1
        </NavLink>
      </li>
      <li className="page-item">
        <NavLink className="page-link" to="/#">
          2
        </NavLink>
      </li>
      <li className="page-item">
        <NavLink className="page-link" to="/#">
          3
        </NavLink>
      </li>
      <li className="page-item">
        <NavLink className="page-link" to="/#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Next</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default ImageSlider;
