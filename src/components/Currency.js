import React from "react";

export default function Currency(props) {

  const {
    currency,
    ask,
    bid,
    code
  } = props.choosed_currency;

  return (
    <div>
      <h1>{currency}</h1>
      <p>Kurs kupna {ask}</p>
      <p>Kurs sprzedaży {bid}</p>
      <button onClick={() => props.set_fav(code)}>
        Zapisz jako ulubiona
      </button>
    </div>
  );
}
