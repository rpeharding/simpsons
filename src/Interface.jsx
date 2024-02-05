import React, { Component } from "react";
import Character from "./Character";
import Header from "./Header";
import Error from "./Error";
import Controls from "./Controls";

class Interface extends Component {
  state = {
    options: [
      {
        name: "Select…",
        value: null,
      },

      {
        name: "Recently Liked",
        value: "likedDesc",
      },
      {
        name: "A-Z",
        value: "alphaAsc",
      },
      {
        name: "Z-A",
        value: "alphaDesc",
      },
    ],
  };

  onInput = (input) => {
    this.setState({ userInput: input.target.value });
  };

  handleChange = (selection) => {
    this.setState({ value: selection.target.value });
  };

  render() {
    const { simpsons, onDeleteItem, onLike } = this.props;
    const { options, value, name } = this.state;

    switch (value) {
      case "likedDesc":
        simpsons.sort((a) => {
          if (a.liked) {
            return -1;
          } else {
            return 1;
          }
        });
        break;

      case "alphaAsc":
        simpsons.sort((a, b) => {
          console.log(a);
          if (a.character < b.character) {
            return -1;
          }
          if (a.character > b.character) {
            return 1;
          }
        });

        break;

      case "alphaDesc":
        simpsons.sort((a, b) => {
          if (a.character < b.character) {
            return 1;
          }
          if (a.character > b.character) {
            return -1;
          }
        });

        break;

      default:
        console.log("no such case");
        break;
    }

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
        <Controls
          liked={count}
          className="controls"
          onSort={this.onSort}
          options={options}
          value={value}
          handleChange={this.handleChange}
          name={name}
        />
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
