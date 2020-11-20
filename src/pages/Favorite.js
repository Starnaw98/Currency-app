import React, { useEffect } from 'react'
import {connect} from "react-redux";
import { get_favorites } from '../redux'

function Favorites(props) {
    
    const { get_favorites, favorites, currencies  } = props

    useEffect( () => {
        get_favorites();
    },[currencies])

    return (
        <div>
            { favorites.length === 0 ? <h1> Loading ... </h1> : <p> Jest </p> }
        </div>
    )
}

export default connect( (state) => ({ 
    favorites: state.filtered_currencies, 
    currencies: state.currencies 
}), 
{get_favorites})(Favorites)