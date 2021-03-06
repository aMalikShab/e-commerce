import React from "react";
import LoginModal from "../Auth/Signin/LoginModal";
import SignupModal from "../Auth/Signup/SignupModal";
import LogoutModal from "../Auth/Signout/LogoutModal";
import Cart from "./Cart/Cart";
import { NavLink } from "react-router-dom";
import Prabhu from "../../assets/ShriRam.jpg";

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
        <NavLink className="navbar-brand" to="/">
          <img
            src={Prabhu}
            style={{
              width: 40,
              height: 40,
            }}
            alt="logo"
          />
        </NavLink>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="homeNavbarCollapse"
          className="collapse navbar-collapse justify-content-start"
        >
          <div className=" navbar-nav">
            <NavLink className="nav-item nav-link " to="/">
              <span>Home</span>
            </NavLink>

            <NavLink className="nav-item nav-link" to="/about-us">
              <span>About us</span>
            </NavLink>
            <NavLink className="nav-item nav-link" to="/slides">
              <span>Slides</span>
            </NavLink>
            <NavLink className="nav-item nav-link" to="/products">
              <span>Products</span>
            </NavLink>
          </div>
          <div className="navbar-nav ml-auto">
            <form className="navbar-form form-inline mr-3">
              <div className="input-group-search-box">
                <input
                  id="search"
                  className="form-control"
                  type="text"
                  placeholder="search"
                />
              </div>
            </form>

            <Cart cart_item={props.cart_item} />

            {props.log_status ? (
              <LogoutModal
                first_name={props.first_name}
                handleLogout={props.handleLogout}
              />
            ) : (
              <LoginModal handleLogin={props.handleLogin} />
            )}
            <SignupModal />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
