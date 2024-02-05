import React, { Component } from "react";
import Character from "./Character";

class Interface extends Component {
  render() {
    const { simpsons } = this.props;
    console.log(simpsons);

    return (
      <div className="characters">
        {simpsons?.map((simpson) => {
          return (
            <Character key={simpsons.indexOf(simpson)} simpson={simpson} />
          );
        })}
        ;
      </div>
    );
  }
}

export default Interface;
