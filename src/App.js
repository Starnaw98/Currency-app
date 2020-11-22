import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { connect } from "react-redux";
import Favorites from "./pages/Favorite";
import Menu from "./components/Menu";
import { saveCurrencies } from "./redux/reducers/allCurrencies";
import './styles/style.scss'

function App(props) {

  const [isFetched, setisFetched] = useState(false)
  const [loadingInfo, setloadingInfo] = useState("loading")

  useEffect(() => {

    fetch("http://api.nbp.pl/api/exchangerates/tables/c?format=json")
      .then((resp) => resp.json())
      .then((resp) => {
        props.saveCurrencies(resp[0].rates);
        setloadingInfo("Kantor");
        setisFetched(true)
      })
      .catch(() => {
        setloadingInfo("Przepraszamy, serwis chwilowo nieczynny.");
        new Error('Błąd podczas pobierania danych')
      });

  }, []);

  return (
    <>
      <h1 className="intro_header" > {loadingInfo} </h1>
      {
        isFetched ?
          <>
            <BrowserRouter>
                <Menu />
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/favorites">
                    <Favorites />
                  </Route>
                </Switch>
            </BrowserRouter>
          </>
          :
          null
      }
    </>
  )
}
export default connect(() => ({}), { saveCurrencies })(App);
