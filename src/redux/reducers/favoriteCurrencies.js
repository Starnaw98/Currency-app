const setAsFavorite = (favorite_currency) => ({
    type: "SET_FAVORITE",
    payload: favorite_currency,
});

const getFavorites = (currencies) => ({
    type: "GET_FAVORITES",
    payload: currencies
});

const deleteFavorite = (deleted) => ({
    type: "DELETE_FAVORITE",
    payload: deleted,
});

const deleteAllFav = () => ({
    type: "DELETE_ALL_FAVORITE",
});


const saved = localStorage.getItem("favorite");

function returnSavedFavorites() {
    const saved_minus_last = saved.substring(0, saved.length - 1);
    return saved_minus_last.split(",");
}

const setFavorites = saved === null || saved.length === 0 ? [] : returnSavedFavorites();

const initialState = {
    favorite_currencies: setFavorites,
    filtered_currencies: []
};

export default function favoriteCurrenciesLogic(state = initialState, action) {

    switch (action.type) {

        case "SET_FAVORITE": {
            if (state.favorite_currencies.some((el) => el === action.payload)) {
                return state;
            } else {
                let favorites = "";
                [action.payload, ...state.favorite_currencies].forEach(
                    (el) => (favorites += `${el},`)
                );
                localStorage.setItem("favorite", favorites);

                return {
                    ...state,
                    favorite_currencies: [...state.favorite_currencies, action.payload],
                };
            }
        }

        case "GET_FAVORITES": {
            const favoritesFilter = (el) =>
                state.favorite_currencies.find((favorite) => el === favorite);
            const fav_objects = action.payload.filter(
                (obj) => obj.code === favoritesFilter(obj.code)
            );
            return {
                ...state,
                filtered_currencies: fav_objects,
            };
        }

        case "DELETE_FAVORITE": {
            const set_new_filtered = state.filtered_currencies.filter(
                (obj) => obj.code !== action.payload
            );
            const set_new_favorites = state.favorite_currencies.filter(
                (el) => el !== action.payload
            );

            const regex = new RegExp(`${action.payload},?`, "gi");
            const newLocalFav = localStorage
                .getItem("favorite")
                .replaceAll(regex, "");
            localStorage.setItem("favorite", `${newLocalFav}`);

            return {
                ...state,
                favorite_currencies: set_new_favorites,
                filtered_currencies: set_new_filtered,
            };
        }

        case "DELETE_ALL_FAVORITE": {
            localStorage.setItem("favorite", "");
            return {
                ...state,
                favorite_currencies: [],
                filtered_currencies: [],
            };
        }

        default:
            return state;
    }
}

export {
    setAsFavorite,
    getFavorites,
    deleteFavorite,
    deleteAllFav
};