import React from "react";
import { connect } from "react-redux";
import Currency from "../components/Currency";
import { getExactCurrency, setAsFavorite } from "../redux";

function Home(props) {
  const { getExactCurrency, setAsFavorite, exact_currency, currencies } = props;

  return (
    <>
      <div>
        <select onChange={(e) => getExactCurrency(e.target.value)}>
          {currencies.map((item) => (
            <option key={item.code}>{item.currency}</option>
          ))}
        </select>
      </div>

      <div>
        <Currency
          set_fav={setAsFavorite}
          choosed_currency={exact_currency}
        ></Currency>
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
