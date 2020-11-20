import React from 'react'

export default function FavCurrency(props) {
    
    const { code, currency, ask, bid } = props.data

    return (
        <tr>  
            <td> {code} </td>
            <td> {currency} </td>
            <td> {ask} </td>
            <td> {bid} </td>
            <td> <button> Usuń </button> </td>
        </tr> 
    )
}
