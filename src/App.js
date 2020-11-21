import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { connect } from "react-redux";
import Favorites from "./pages/Favorite";
import Menu from "./components/Menu";
import { saveCurrencies } from "./redux/reducers/allCurrencies";

//After app reloading, save all currencies in  redux.
function App(props) {

  useEffect(() => {
    fetch("http://api.nbp.pl/api/exchangerates/tables/c?format=json")
      .then((resp) => resp.json())
      .then((resp) => props.saveCurrencies(resp[0].rates));
  }, []);

  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </>
  );
}

export default connect(() => ({}), { saveCurrencies })(App);
