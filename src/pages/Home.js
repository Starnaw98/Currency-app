import React from 'react'
import {connect} from "react-redux";
import Currency from '../components/Currency';
import {get_exact_currency, set_as_favorite} from "../redux";

function Home(props) {

    const currencies_list =  props.currencies.map( item => <option>{ item.currency }</option>)

    return (
        <>  
            <div>
                <select onChange={ e => props.get_exact_currency(e.target.value)  } >
                    {currencies_list}
                </select>
            </div>
            <div>
                <Currency set_fav={ props.set_as_favorite } choosed_currency={props.exact_currency} ></Currency> 
            </div>
        </>
    )
}

export default connect((state) => ({ 
    currencies: state.currencies, 
    exact_currency: state.exact_currency 
}), {get_exact_currency, set_as_favorite})(Home)

