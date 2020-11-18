import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorite'


export default function App(props) {

  return (
    <Switch>
      <Route exact path="/"> <Home/> </Route>
      <Route path="/favorites"> <Favorites/> </Route>
    </Switch>
  );
}
