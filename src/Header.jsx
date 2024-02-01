import React, { Component } from "react";
import logo from "./images/logo.png";

class Header extends Component {
  state = {};

  render() {
    return (
      <div className="header">
        <img className="logo" alt="simpsons logo" src={logo} />
        <h1>Quote Engine</h1>
        <p>
          Find, save and sort quotes from your favourite simpsons characters
        </p>
        <input
          type="input"
          name="search"
          placeholder="find a character"
          className="input"
        />
      </div>
    );
  }
}

export default Header;
