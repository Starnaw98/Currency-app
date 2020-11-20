import React, { useEffect, useState } from 'react'
import {connect} from "react-redux";
import { get_favorites } from '../redux'

function Favorites(props) {
    
    const { get_favorites, favorites, exact_currency  } = props

    useEffect( () => {
        get_favorites();
    },[exact_currency])

    return (
        <div>
            { favorites.length === 0 ? <h1> Loading ... </h1> : <p> Jest </p> }
        </div>
    )
}

export default connect((state) => ({ favorites: state.filtered_currencies, exact_currency: state.exact_currency }), {get_favorites})(Favorites)