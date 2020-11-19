import {createStore} from 'redux'

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

// const get_favorites = (favorite_currency) => ({ 
//     type: "GET_FAVORITES",
//     payload: favorite_currency 
// })

const initialState = { 
    currencies: [],
    exact_currency: {},
    favorite_currencies: localStorage.getItem('favorite') === null ? [] :  localStorage.getItem('favorite').split(','),
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
            const exact_element = state.currencies.filter( el => el.currency === action.payload )
            return {
                ...state,
                exact_currency: exact_element[0]
            }
        }

        case "SET_FAVORITE": {
            localStorage.setItem('favorite', `${action.payload},${state.favorite_currencies}` )

            if( state.favorite_currencies.some( el => el === action.payload )) {
                return
            } else {
                return {
                    ...state,
                    favorite_currencies: [...state.favorite_currencies, action.payload] 
                } 
            }
        }


        default:
            return state
    }
}

const store = createStore(reducer)
store.subscribe( () => {
    console.log(store.getState())
})

export default store
export { save_currencies, get_exact_currency, set_as_favorite}

