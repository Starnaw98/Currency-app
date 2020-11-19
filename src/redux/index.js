import {createStore} from 'redux'

export const save_currencies = (currencies) => ({ 
        type: "SAVE_CURRENCIES",
        payload: currencies 
    })

const initialState = { 
    currencies: []
 }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_CURRENCIES": 
            return {
                ...state,
                currencies: action.payload
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

