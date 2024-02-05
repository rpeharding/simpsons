import React, { Component } from "react";
import Character from "./Character";
import Header from "./Header";

class Interface extends Component {
  render() {
    const { simpsons } = this.props;
    console.log(simpsons);

    return (
      <>
        <Header />
        <div className="characters">
          {simpsons?.map((simpson) => {
            return (
              <Character key={simpsons.indexOf(simpson)} simpson={simpson} />
            );
          })}
          ;
        </div>
      </>
    );
  }
}

export default Interface;
