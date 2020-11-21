import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import FavCurrency from "../components/FavCurrency";
import Popup from "../components/Popup";
import { getFavorites, deleteFavorite, deleteAllFav } from "../redux";

function Favorites(props) {
  const {
    getFavorites,
    deleteFavorite,
    deleteAllFav,
    favorites,
    currencies,
  } = props;

  const [popupOpen, setpopupOpen] = useState(false);
  const [delete_item, setdeletedItem] = useState("");
  const [deleteAllOrOne, setdeleteAllOrOne] = useState("");

  useEffect(() => {
    getFavorites();
  }, [currencies]);

  return (
    <div>
      {popupOpen && (
        <Popup
          turn_off_or_on={setpopupOpen}
          deleted_element={delete_item}
          deleting_fun={
            deleteAllOrOne === "all" ? deleteAllFav : deleteFavorite
          }
        />
      )}
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
          {favorites.map((obj) => (
            <FavCurrency
              key={obj.code}
              data={obj}
              popup_fun={setpopupOpen}
              set_deleted={setdeletedItem}
            ></FavCurrency>
          ))}
        </tbody>
      </table>
      <div>
        <button
          disabled={favorites.length !== 0 ? false : true}
          onClick={() => {
            setdeleteAllOrOne("all");
            setpopupOpen((prev) => !prev);
          }}
        >
          {" "}
          Usuń całą listę
        </button>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    favorites: state.filtered_currencies,
    currencies: state.currencies,
  }),
  { getFavorites, deleteFavorite, deleteAllFav }
)(Favorites);
