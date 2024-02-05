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
    this.setState({ simpsons: data });
  };

  render() {
    if (!this.state.simpsons) {
      return <p>Loading</p>;
    }

    return (
      <>
        <Interface simpsons={this.state.simpsons} />
      </>
    );
  }
}

export default App;
