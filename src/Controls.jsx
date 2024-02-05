import React, { Component } from "react";

class Controls extends Component {
  state = {};
  render() {
    const liked = this.props;

    return (
      <>
        <p>liked: {liked}</p>
      </>
    );
  }
}

export default Controls;
