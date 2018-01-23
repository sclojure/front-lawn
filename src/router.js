import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header/header'
import Condos from './Components/Condos/condos'
import Footer from './Components/Footer/footer'
import Home from './Components/Home/home'
import SearchCondos from './Components/SearchCondos/searchcondos'
import Room from './Components/Room/room'

export default (
  <Switch>
    <Route component={Condos} path="/" exact/>
    <Route component={SearchCondos} path="/search-condos"/>
    <Route component={Room} path="/room"/>
  </Switch>
)
