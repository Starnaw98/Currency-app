import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { connect } from "react-redux";
import Favorites from "./pages/Favorite";
import Menu from "./components/Menu";
import { saveCurrencies } from "./redux/reducers/allCurrencies";

function App(props) {

  const [isFetched, setisFetched] = useState(false)
  const [loadingInfo, setloadingInfo] = useState("Loading")

  useEffect(() => {

    fetch("http://api.nbp.pl/api/exchangerates/tables/c?format=json")
      .then((resp) => resp.json())
      .then((resp) => {
        props.saveCurrencies(resp[0].rates);
        setisFetched(true)
      })
      .catch(() => {
        setloadingInfo("Przepraszamy, serwis chwilowo nieczynny.");
        new Error('Błąd podczas pobierania danych')
      });

  }, []);

  return (
    isFetched ?
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
      :
      <h1> {loadingInfo} </h1>

  )
}
export default connect(() => ({}), { saveCurrencies })(App);
