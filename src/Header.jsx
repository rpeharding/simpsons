import React, { Component } from "react";
import logo from "./images/logo.png";
import homer from "./images/homer.png";

class Header extends Component {
  state = {};

  render() {
    return (
      <div className="header">
        <img className="logo" alt="simpsons logo" src={logo} />
        <div className="header-content">
          <div className="header-copy">
            <h1>Quotes from your favourite characters</h1>{" "}
            <input
              type="input"
              name="search"
              placeholder="find a character"
              className="input"
            />
          </div>
        </div>
        <img className="hero-image" alt="homer with donut" src={homer} />
      </div>
    );
  }
}

export default Header;
