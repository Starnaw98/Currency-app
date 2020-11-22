import React from 'react'
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App'
import validNBP from '../__mocks__/validNBP.json'
import store from "../src/redux";
import { Provider } from "react-redux";



it( 'load data on mount', async () => {

    global.fetch = jest.fn( () => Promise.resolve({ 
        json: () => Promise.resolve(validNBP)
    }))

    await act( async () => render( <Provider store={store} > <App />  </Provider> ) )
    expect(screen.getByText("Kantor")).toBeInTheDocument()
})


it( 'error after fetching', async () => {

    global.fetch = jest.fn( () => Promise.resolve({ 
        json: () => Promise.reject({ error: "Cannot fetch data" })
    }))

    await act( async () => render( <Provider store={store} > <App />  </Provider> ) )
    expect(screen.getByText("Przepraszamy, serwis chwilowo nieczynny.")).toBeInTheDocument()
})

