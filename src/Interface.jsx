import React, { Component } from "react";
import Character from "./Character";

class Interface extends Component {
  render() {
    const { simpsons } = this.props;
    console.log(simpsons);

    return (
      <div>
        {simpsons?.map((simpson) => {
          return (
            <Character simpson={simpson} />
            // <div className="character-container">
            //   <h3>{simpson.character}</h3>
            //   <p>{simpson.quote}</p>
            //   <img src={simpson.image} />
            //   {simpson.characterDirection}
            // </div>
          );
        })}
        ;
      </div>
    );
  }
}

export default Interface;
