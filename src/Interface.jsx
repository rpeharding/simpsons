import React, { Component } from "react";
import Character from "./Character";
import Header from "./Header";
import Error from "./Error";

class Interface extends Component {
  state = {};

  onInput = (input) => {
    this.setState({ userInput: input.target.value });
  };

  render() {
    const { simpsons, onDeleteItem } = this.props;

    let filtered = [...simpsons];
    if (this.state.userInput) {
      console.log(this.state.userInput);
      filtered = filtered.filter((simpson) => {
        return simpson.character
          .toLowerCase()
          .includes(this.state.userInput.toLowerCase());
      });
      console.log(filtered);
    }

    return (
      <>
        <Header onInput={this.onInput} userInput={this.state.userInput} />
        {!filtered.length && <Error className="error" />}
        <div className="characters">
          {filtered?.map((simpson) => {
            return (
              <Character
                userInput={this.state.userInput}
                key={simpson.id}
                id={simpson.id}
                {...simpson}
                // pass down function received from above (use this.props) remember not index but
                onDeleteItem={onDeleteItem}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Interface;
