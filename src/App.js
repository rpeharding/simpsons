import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Interface from "./Interface";
import Header from "./Header";

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
    // console.log(this.state.simpsons);
    // pass this state down to interface- see video
    return (
      <>
        <Header />
        <Interface simpsons={this.state.simpsons} />
      </>
    );
  }
}

export default App;
