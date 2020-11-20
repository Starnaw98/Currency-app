import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import FavCurrency from '../components/FavCurrency';
import Popup from '../components/Popup';
import { get_favorites, delete_favorite } from '../redux'

function Favorites(props) {

    const { get_favorites, delete_favorite, favorites, currencies } = props

    const [popupOpen, setpopupOpen] = useState(false)
    const [deletedItem, setdeletedItem] = useState("")

    useEffect(() => {
        get_favorites();
    }, [currencies])

    return (
        <div>
            {popupOpen && <Popup turn_off_or_on={setpopupOpen} deleted_element={deletedItem} deleting_fun={delete_favorite} />}
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
                    {
                        favorites.map(obj =>
                            <FavCurrency data={obj} popup_fun={setpopupOpen} set_deleted={setdeletedItem} ></FavCurrency>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default connect((state) => ({
    favorites: state.filtered_currencies,
    currencies: state.currencies
}),
    { get_favorites, delete_favorite })(Favorites)