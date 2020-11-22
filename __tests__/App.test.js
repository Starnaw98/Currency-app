import React from 'react'
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App'
import validNBP from '../__mocks__/validNBP.json'
import store from "../src/redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

global.fetch = jest.fn( () => Promise.resolve({ 
    json: () => Promise.resolve(validNBP)
}))


it( 'load data on mount', async () => {
    await act( async () => render( <Provider store={store} ><Router><App /></Router> </Provider> ) )
    expect(screen.getByText("Kantor")).toBeInTheDocument()
})

