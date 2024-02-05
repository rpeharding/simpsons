import React, { Component } from "react";
import Image from "./Image";
import like from "./images/like.svg";

class Controls extends Component {
  render() {
    const { liked, className } = this.props;
    return (
      <div className={className}>
        <div className="liked-summary">
          <Image className="icon" src={like} />
          <p>liked: {liked}</p>
        </div>

        <p>sort by:</p>
      </div>
    );
  }
}

export default Controls;
