import React, { Component } from "react";
import Image from "./Image";
import like from "./images/like.svg";

class Controls extends Component {
  state = {};

  render() {
    const { liked, className, value, options, handleChange, unselected } =
      this.props;
    console.log(value);

    return (
      <div className={className}>
        <div className="liked-summary flex">
          <Image className="icon" src={like} />
          <p>liked: {liked}</p>
        </div>
        <div className="sort-summary flex">
          <p>sort by:</p>
          <select className="sort" onChange={handleChange} value={value}>
            {options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          {unselected && <p>make a selection</p>}
        </div>
      </div>
    );
  }
}

export default Controls;
