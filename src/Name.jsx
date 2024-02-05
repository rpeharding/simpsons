import React, { Component } from "react";
class Name extends Component {
  render() {
    const { character } = this.props.simpson;
    return <h3>{character}</h3>;
  }
}

export default Name;
