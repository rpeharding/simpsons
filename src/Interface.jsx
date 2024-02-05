import React, { Component } from "react";
import Character from "./Character";
import Header from "./Header";

class Interface extends Component {
  render() {
    const { simpsons, onDeleteItem } = this.props;
    console.log(simpsons);

    return (
      <>
        <Header />
        <div className="characters">
          {simpsons?.map((simpson) => {
            return (
              <Character
                key={simpson.id}
                id={simpson.id}
                {...simpson}
                // pass down function received from above (use this.props) remember not index but
                onDeleteItem={onDeleteItem}
              />
            );
          })}
          ;
        </div>
      </>
    );
  }
}

export default Interface;
