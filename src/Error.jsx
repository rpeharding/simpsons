import React, { Component } from "react";
import flanders from "./images/flanders.png";
class Error extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <img
          className="error-img"
          src={flanders}
          alt="ned flanders screaming"
        />
        <div>
          <h2>Oh-diddly-no!</h2>
          <p>No characters found, try widening your search</p>
        </div>
      </div>
    );
  }
}

export default Error;
