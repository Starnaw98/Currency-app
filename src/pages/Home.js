import React, { useEffect} from 'react'
import {connect} from "react-redux";
import {save_currencies, get_exact_currency} from "../redux";

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
                    { props.currencies.length === 0 ? <a>tablica pusta</a> : currencies_list }
                </select>
            </div>
            <div>
                {props.exact_currency.currency}
                {props.exact_currency.ask}
                {props.exact_currency.bid}
                <button> Zapisz jako ulubiona </button>
            </div>
        </>
    )
}

export default connect((state) => ({ currencies: state.currencies, exact_currency: state.exact_currency }), {save_currencies, get_exact_currency})(Home)
