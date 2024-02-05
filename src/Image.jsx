import React, { Component } from "react";
class Image extends Component {
  state = {};
  render() {
    const { src, className, onClick } = this.props;

    return <img className={className} src={src} onClick={onClick} />;
  }
}

export default Image;
