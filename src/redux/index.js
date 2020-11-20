import { createStore } from 'redux'

const save_currencies = (currencies) => ({
    type: "SAVE_CURRENCIES",
    payload: currencies
})

const get_exact_currency = (currency) => ({
    type: "GET_EXACT_CURRENCY",
    payload: currency
})

const set_as_favorite = (favorite_currency) => ({
    type: "SET_FAVORITE",
    payload: favorite_currency
})

const get_favorites = () => ({
    type: "GET_FAVORITES"
})

const delete_favorite = (deleted) => ({
    type: "DELETE_FAVORITE",
    payload: deleted
})

const initialState = {
    currencies: [],
    exact_currency: {},
    favorite_currencies: localStorage.getItem('favorite') === null ? [] : localStorage.getItem('favorite').split(','),
    filtered_currencies: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_CURRENCIES":
            return {
                ...state,
                currencies: action.payload,
                exact_currency: action.payload[0]
            }

        case "GET_EXACT_CURRENCY": {
            const exact_element = state.currencies.filter(el => el.currency === action.payload)
            return {
                ...state,
                exact_currency: exact_element[0]
            }
        }

        case "SET_FAVORITE": {

            if (state.favorite_currencies.some(el => el === action.payload)) {
                return state
            } else {

                    let favorites = "";
                    [action.payload, ...state.favorite_currencies].forEach( el => favorites += `${el},` )
                    localStorage.setItem('favorite', favorites)

                    return {
                        ...state,
                        favorite_currencies: [...state.favorite_currencies, action.payload]
                    }
                }
        }

        case "GET_FAVORITES": {
            const favorites_filter = (el) => state.favorite_currencies.find( favorite => el === favorite )
            const fav_objects = state.currencies.filter( obj => obj.code === favorites_filter(obj.code) )
            return {
                ...state,
                filtered_currencies: fav_objects
            }
        }

        case "DELETE_FAVORITE": {
            const set_new_filtered = state.filtered_currencies.filter( obj => obj.code !== action.payload )
            const set_new_favorites = state.favorite_currencies.filter( el => el !== action.payload )
            
            const regex = new RegExp(`${action.payload},?`, "gi")
            const newLocalFav = localStorage.getItem('favorite').replaceAll(regex, '')
            localStorage.setItem('favorite', `${newLocalFav}`)
            
            return {
                ...state,
                favorite_currencies: set_new_favorites,
                filtered_currencies: set_new_filtered
            }
        }

        default:
            return state
    }
}

const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

export default store
export { save_currencies, get_exact_currency, set_as_favorite, get_favorites, delete_favorite }

