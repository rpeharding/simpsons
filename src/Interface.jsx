import React, { Component } from "react";
import Character from "./Character";
import Header from "./Header";
import Error from "./Error";
import Controls from "./Controls";

class Interface extends Component {
  state = {};

  onInput = (input) => {
    this.setState({ userInput: input.target.value });
  };

  render() {
    const { simpsons, onDeleteItem, onLike } = this.props;

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

    let count = 0;
    simpsons.forEach((simpson) => {
      if (simpson.liked) count++;
    });

    return (
      <>
        <Header onInput={this.onInput} userInput={this.state.userInput} />
        <Controls liked={count} className="controls" />
        {!filtered.length && <Error className="error" />}
        <div className="characters">
          {filtered?.map((simpson) => {
            return (
              <Character
                userInput={this.state.userInput}
                key={simpson.id}
                id={simpson.id}
                liked={simpson.liked}
                {...simpson}
                // pass down function received from above (use this.props) remember not index but
                onDeleteItem={onDeleteItem}
                onLike={onLike}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Interface;
