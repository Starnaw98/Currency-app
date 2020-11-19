import React, { useEffect} from 'react'
import {connect} from "react-redux";
import Currency from '../components/Currency';
import {save_currencies, get_exact_currency, set_as_favorite} from "../redux";

function Home(props) {

    //Fetch all currencies and push it into redux state
    useEffect( () => {
        fetch('http://api.nbp.pl/api/exchangerates/tables/c?format=json')
        .then(resp => resp.json())
        .then( resp => props.save_currencies(resp[0].rates)  )
    }, [])

    //map all currency and save each as a <option> element
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

//connect redux with that component
export default connect((state) => ({ 
    currencies: state.currencies, 
    exact_currency: state.exact_currency 
}), {save_currencies, get_exact_currency, set_as_favorite})(Home)

