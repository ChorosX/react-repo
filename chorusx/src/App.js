import React, { Component } from 'react';
import satellite from './satellite';

const cors = require("cors")


class App extends Component {
  state = {
    satellite: []
  }
  render() {
    return (
      <satellite satellite={this.state.satellite} />

    );
  }
  componentDidMount() {
    fetch('https://api.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/2/&apiKey=2JREPQ-C7HENP-GBXCVV-4O50', { Access- Control - Allow - Origin: * })
      .then(res => res.json())
      .then((data) => {
      this.setState({ satalite: data })
    })
  .catch(console.log)
  }
}

export default App;
