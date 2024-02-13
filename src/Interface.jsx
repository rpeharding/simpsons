import React, { Component } from "react";
import Character from "./Character";
import Header from "./Header";
import Error from "./Error";
import Controls from "./Controls";
import Joi from "joi";

class Interface extends Component {
  state = {
    userInput: {},
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
    errors: {},
  };

  schema = { search: Joi.string().min(3).max(100) };

  onInput = async (e) => {
    //make new state that just has user input and put user input under key of event id.
    const newState = { userInput: { [e.target.id]: e.target.value } };
    this.setState(newState);
    const _joiInstance = Joi.object(this.schema);

    try {
      await _joiInstance.validateAsync(newState.userInput);
      // clear errors
      this.setState({ errors: {} });
    } catch (e) {
      // convert errors into readable format
      const errorsMod = {};
      e.details.forEach((error) => {
        errorsMod[error.context.key] = error.message;
      });
      // send errors to the state.
      this.setState({ errors: errorsMod });
      console.log(e);
    }
  };

  handleChange = (selection) => {
    this.setState({ value: selection.target.value });
  };

  render() {
    console.log(this.state);
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
    if (this.state.userInput.search) {
      filtered = filtered.filter((simpson) => {
        return simpson.character
          .toLowerCase()
          .includes(this.state.userInput.search.toLowerCase());
      });
      console.log(filtered);
    }

    let count = 0;
    simpsons.forEach((simpson) => {
      if (simpson.liked) count++;
    });

    return (
      <>
        <Header
          errors={this.state.errors}
          onInput={this.onInput}
          userInput={this.state.userInput}
        />
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
