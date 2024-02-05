import React, { Component } from "react";

class Quote extends Component {
  state = {};
  render() {
    const { quote } = this.props.simpson;
    return <p>{quote}</p>;
  }
}

export default Quote;
