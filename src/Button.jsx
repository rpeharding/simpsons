import React, { Component } from "react";
class Button extends Component {
  state = {};
  render() {
    const { text, className } = this.props;
    return <button className={className}>{text}</button>;
  }
}

export default Button;
