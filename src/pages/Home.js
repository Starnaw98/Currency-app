import React from "react";
import { connect } from "react-redux";
import Currency from "../components/Currency";
import { setAsFavorite } from "../redux/reducers/favoriteCurrencies";
import { getExactCurrency } from "../redux/reducers/choosedCurrency";

function Home(props) {
  const {
    getExactCurrency,
    setAsFavorite,
    exact_currency,
    currencies
  } = props;

  return (
    <>
      <div className="select" >
        <p>Wybierz walutę:</p>
        <select value={exact_currency.currency} onChange={(e) => getExactCurrency({ currency: e.target.value, currencies: currencies })}>
          {currencies.map((item) => <option key={item.code}> {item.currency} </option>)}
        </select>
      </div>

      <div className="choosed_currency" >
        {
          currencies.length !== 0 && <Currency
            set_fav={setAsFavorite}
            choosed_currency={exact_currency.code ? exact_currency : currencies[0]}
          ></Currency>
        }
      </div>
    </>
  );
}

export default connect(
  (state) => ({
    currencies: state.currencies,
    exact_currency: state.exact_currency,
  }),
  { getExactCurrency, setAsFavorite }
)(Home);
