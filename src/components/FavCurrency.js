import React from "react";

export default function FavCurrency(props) {

    const { code, currency, ask, bid } = props.data;

    return (
        <tr>
            <td> {code} </td>
            <td> {currency} </td>
            <td> {ask} </td>
            <td> {bid} </td>
            <td>
                <button onClick={() => { props.popup_fun(prev => !prev); props.set_deleted(code); }} >
                    Usuń
                </button>
            </td>
        </tr>
    );
}
