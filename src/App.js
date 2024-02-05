import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Interface from "./Interface";

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
      item.id = Math.random() + Date.now();
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

  render() {
    if (!this.state.simpsons) {
      return <p>Loading</p>;
    }

    return (
      <>
        <Interface
          simpsons={this.state.simpsons}
          onDeleteItem={this.onDeleteItem}
        />
      </>
    );
  }
}

export default App;
