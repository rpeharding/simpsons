import React, { Component } from "react";
class Image extends Component {
  state = {};
  render() {
    const { simpson, src, className, onClick } = this.props;
    const { characterDirection } = simpson;

    return <img className={className} src={src} onClick={onClick} />;
  }
}

export default Image;
