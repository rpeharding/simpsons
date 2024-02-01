import React, { Component } from "react";
class Character extends Component {
  state = {};
  render() {
    const { character, quote, image, characterDirection } = this.props.simpson;
    return (
      <>
        <div className="character-container">
          <h3>{character}</h3>
          <p>{quote}</p>
          <img src={image} />
          {characterDirection}
        </div>
      </>
    );
  }
}

export default Character;
