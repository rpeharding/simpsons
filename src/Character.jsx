import React, { Component } from "react";
import like from "./images/like.svg";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Button from "./Button";

class Character extends Component {
  state = { liked: false };

  render() {
    const { simpson } = this.props;
    const { image, characterDirection } = this.props.simpson;
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
          <Name simpson={simpson} />
          <div className="quote-flex">
            <div>
              <Quote simpson={simpson} />
              <div className="flex">
                <Image
                  simpson={simpson}
                  className="icon"
                  src={like}
                  onClick={() => {
                    this.setState({ liked: !liked });
                  }}
                />
                <Button text="Delete" className="btn" />
              </div>
            </div>
            <Image
              simpson={simpson}
              className={characterPosition}
              src={image}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Character;
