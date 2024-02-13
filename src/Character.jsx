import React, { Component } from "react";
import like from "./images/like.svg";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Button from "./Button";

class Character extends Component {
  render() {
    const simpson = this.props;
    let { image, characterDirection, onDeleteItem, id, liked, onLike } =
      this.props;

    characterDirection = characterDirection.toLowerCase();
    return (
      <>
        <div className="character-container">
          <Name simpson={simpson} />
          <div className="quote-flex">
            <div>
              <Quote simpson={simpson} />
              <div className="flex">
                <Image
                  simpson={simpson}
                  className="icon"
                  src={like}
                  onClick={() => onLike(id)}
                />
                {liked && <p>liked!</p>}
                <button onClick={() => onDeleteItem(id)} className="btn">
                  Delete
                </button>
              </div>
            </div>
            <Image
              simpson={simpson}
              className={characterDirection}
              src={image}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Character;
