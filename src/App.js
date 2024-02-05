import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Interface from "./Interface";
import spinner from "./images/spinner.png";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    data.forEach((item) => {
      item.id = Math.random() + "" + Date.now();
      item.liked = false;
    });
    this.setState({ simpsons: data });
  };

  //create function for child to pull string on and pass down to next child with this.
  onDeleteItem = (id) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((item) => item.id === id);
    simpsons.splice(index, 1);
    this.setState({ simpsons });
  };

  onLike = (id) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((item) => item.id === id);
    simpsons[index].liked = !simpsons[index].liked;
    this.setState({ simpsons });
  };

  onSort = () => {
    const simpsons = [...this.state.simpsons];
  };

  render() {
    if (!this.state.simpsons) {
      return (
        <div className="spin-container">
          <img className="spinner" src={spinner} />
        </div>
      );
    }

    return (
      <>
        <Interface
          simpsons={this.state.simpsons}
          onDeleteItem={this.onDeleteItem}
          onLike={this.onLike}
        />
      </>
    );
  }
}

export default App;
