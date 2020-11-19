import React, { useEffect } from 'react'
import {connect} from "react-redux";
import {save_currencies} from "../redux";

function Home(props) {

    useEffect( () => {

        fetch('http://api.nbp.pl/api/exchangerates/tables/c?format=json')
        .then(resp => resp.json())
        .then( resp => props.save_currencies(resp[0].rates)  )
    }, [])

    const currencies_list =  props.currencies.map( item => <option>{ item.currency }</option>)

    return (
        <>  
            <div>
                <select>
                    { props.currencies.length === 0 ? <a>tablica pusta</a> : currencies_list }
                </select>
            </div>
            <div>
                info odnosnie aktywnej waluty
            </div>
        </>
    )
}

export default connect((state) => ({ currencies: state.currencies }), {save_currencies})(Home)
