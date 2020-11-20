import React, { useEffect } from 'react'
import {connect} from "react-redux";
import FavCurrency from '../components/FavCurrency';
import { get_favorites } from '../redux'

function Favorites(props) {
    
    const { get_favorites, favorites, currencies  } = props

    useEffect( () => {
        get_favorites();
    },[currencies])

    return (
        <div>
            <table>
                <caption>Ulubione waluty</caption>
                <thead>
                    <tr>
                        <th> Kod </th>
                        <th> Waluta </th>
                        <th> Kurs kupna </th>
                        <th> Kurs sprzedaży </th>
                    </tr>
                </thead>
                <tbody>
                    { favorites.map( obj => <FavCurrency data={obj} ></FavCurrency> ) }
                </tbody>
            </table>
        </div>
    )
}

export default connect( (state) => ({ 
    favorites: state.filtered_currencies, 
    currencies: state.currencies 
}), 
{get_favorites})(Favorites)