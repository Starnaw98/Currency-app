import {createStore} from 'redux'

export const get_currencies = () => ({ type: "GET_CURRENCIES" })

const initialState = { 
    currencies: ['sdfsda']
 }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CURRENCIES": 

            return {
                ...state
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

