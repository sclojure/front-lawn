import React, { Component } from 'react';

import Header from './Components/Header/header'
import Home from './Components/Home/home'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
