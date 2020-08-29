import React, { useState } from "react";
import LoginModal from "./LoginModal";

const NavBar = () => {
  return (
    <div class="containernavcss">
      <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top ">
        <a class="navbar-brand" href="#">
          <img src="bird.jpg" alt="logo" />
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          id="homeNavbarCollapse"
          class="collapse navbar-collapse justify-content-start"
        >
          <div class=" navbar-nav">
            <a class="nav-item nav-link " href="/">
              <span>Home</span>
            </a>
            <a class="nav-item nav-link" href="/api/about_us">
              <span>About us</span>
            </a>
            <a class="nav-item nav-link" href="#">
              <span>Cart</span>
            </a>
          </div>
          <div class="navbar-nav ml-auto">
            <form class="navbar-form form-inline mr-3">
              <div class="input-group-search-box">
                <input
                  id="search"
                  class="form-control"
                  type="text"
                  placeholder="search"
                />
              </div>
            </form>

            <LoginModal />
            <button type="button" class="btn btn-outline-info ml-1">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
