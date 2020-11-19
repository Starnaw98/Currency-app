import React, { useEffect, useState } from 'react'
import {connect} from "react-redux";
import {get_currencies} from "../redux";

function Home() {


    const [currencies, setcurrencies] = useState([])

    useEffect( () => {

        fetch('http://api.nbp.pl/api/exchangerates/tables/c?format=json')
        .then(resp => resp.json())
        .then(resp => setcurrencies( resp[0].rates ) )

    }, [])

    console.log( currencies )

    return (
        <div>
            {  currencies.length === 0 ? <a>puste</a> : <a>tablica wypelniona</a> }
        </div>
    )
}

export default connect(() => ({}), {get_currencies})(Home)
