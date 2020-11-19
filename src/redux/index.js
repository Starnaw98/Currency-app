import {createStore} from 'redux'

export const save_currencies = (currencies) => ({ 
        type: "SAVE_CURRENCIES",
        payload: currencies 
    })

export const get_exact_currency = (currency) => ({ 
        type: "GET_EXACT_CURRENCY",
        payload: currency 
    })

const initialState = { 
    currencies: [],
    exact_currency: {}
 }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_CURRENCIES": 
            return {
                ...state,
                currencies: action.payload
            }
        
        case "GET_EXACT_CURRENCY": 
        
            const exact_element = state.currencies.filter( el => el.currency === action.payload )

            return {
                ...state,
                exact_currency: exact_element[0]
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

