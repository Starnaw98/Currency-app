import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";
import validNBP from "../__mocks__/validNBP.json";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";


//Create fake store for Provider
const mockStore = configureStore([]);
let store;
beforeEach(() => {
    store = mockStore({
        currencies: [],
        exact_currency: {},
        favorites: {
            favorite_currencies: [],
            filtered_currencies: []
        }
    });
});

//Mock fetch function and add ability to change second Resolver value.
const mockFetch = (json) => {
    global.fetch = jest.fn(() => Promise.resolve(json));
};


it("fetch on mount succesfully", async () => {
    mockFetch({ json: () => Promise.resolve(validNBP) });
    await act(async () => render(<Provider store={store} > <App />  </Provider>));
    expect(screen.getByText("Kantor")).toBeInTheDocument();
});


it("error after fetching", async () => {
    mockFetch({
        json: () => Promise.reject()
    });
    await act(async () => render(<Provider store={store} > <App />  </Provider>));
    expect(screen.getByText("Przepraszamy, serwis chwilowo nieczynny.")).toBeInTheDocument();
});

