import React from 'react'
import {connect} from "react-redux";
import Currency from '../components/Currency';
import {get_exact_currency, set_as_favorite} from "../redux";

function Home(props) {

    const { get_exact_currency, set_as_favorite, exact_currency, currencies  } = props

    return (
        <>  
            <div>
                <select onChange={ e => get_exact_currency(e.target.value)  } >
                    { currencies.map( item => <option>{ item.currency }</option>) }
                </select>
            </div>
            <div>
                <Currency set_fav={ set_as_favorite } choosed_currency={exact_currency} ></Currency> 
            </div>
        </>
    )
}

export default connect((state) => ({ 
    currencies: state.currencies, 
    exact_currency: state.exact_currency 
}), 
{get_exact_currency, set_as_favorite})(Home)

