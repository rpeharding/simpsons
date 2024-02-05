import React, { Component } from "react";
import bin from "./images/bin.svg";
import like from "./images/like.svg";

class Character extends Component {
  state = { liked: false };

  render() {
    const { character, quote, image, characterDirection } = this.props.simpson;
    const { liked } = this.state;

    let characterPosition;

    if (characterDirection === "Right") {
      characterPosition = "right";
    } else {
      characterPosition = "left";
    }

    return (
      <>
        <div className="character-container">
          <h3>{character}</h3>
          <div className="quote-flex">
            <div>
              <p>{quote}</p>
              <div className="flex">
                <img
                  className="icon"
                  src={like}
                  onClick={() => {
                    this.setState({ liked: !liked });
                  }}
                />
                <button>Delete</button>
              </div>
            </div>
            <img className={characterPosition} src={image} />
          </div>
        </div>
      </>
    );
  }
}

export default Character;
