import React from "react";

export default function Currency(props) {

  const {
    ask,
    bid,
    code
  } = props.choosed_currency;

  return (
    <>
      <div>
        <span>
          <p>Kurs kupna</p>
          <p>{ask} zł</p>
        </span>
        <span>
          <p>Kurs sprzedaży</p>
          <p>{bid} zł</p>
        </span>
      </div>
      <button onClick={() => props.set_fav(code)}>
        Zapisz jako ulubioną
      </button>
    </>
  );
}
