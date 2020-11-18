import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorite'
import Menu from './components/Menu'


export default function App(props) {

  return (
    <>
      <Menu/>
      <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route path="/favorites"> <Favorites/> </Route>
      </Switch>
    </>
  );
}
