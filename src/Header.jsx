import React, { Component } from "react";
import logo from "./images/logo.png";
import homer from "./images/homer.png";

class Header extends Component {
  state = {};

  onSearch = (e) => {
    e.preventDefault();
    if (!this.state.userInput) {
      return;
    }
  };

  render() {
    return (
      <div className="header">
        <img className="logo" alt="simpsons logo" src={logo} />
        <div className="header-content">
          <div className="header-copy">
            <h1>Quotes from your favourite characters</h1>
            <input
              onInput={this.props.onInput}
              type="text"
              name="search"
              id="search"
              placeholder="find a character"
              className="input"
            />
            <p>{this.props.errors.search}</p>
          </div>
        </div>
        <img className="hero-image" alt="homer with donut" src={homer} />
      </div>
    );
  }
}

export default Header;
