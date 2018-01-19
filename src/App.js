import React, { Component } from 'react';

import Header from './Components/Header/header'
import Home from './Components/Home/home'
import Condos from './Components/Condos/condos'
import Footer from './Components/Footer/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Condos />
        <Footer />
      </div>
    );
  }
}

export default App;
