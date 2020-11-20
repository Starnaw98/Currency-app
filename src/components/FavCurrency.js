import React from 'react'

export default function FavCurrency(props) {
    
    const { code, currency, ask, bid } = props.data

    return (
        <tr>  
            <td> {code} </td>
            <td> {currency} </td>
            <td> {ask} </td>
            <td> {bid} </td>
            <td> <button onClick={ () => props.delete_fun(currency) } > Usuń </button> </td>
        </tr> 
    )
}
