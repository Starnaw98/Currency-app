import { createStore, combineReducers } from "redux";
import allCurrencies from './reducers/allCurrencies'
import choosedCurrency from './reducers/choosedCurrency'
import favoriteCurrencies from './reducers/favoriteCurrencies'

const rootReducer = combineReducers({
  currencies: allCurrencies,
  exact_currency: choosedCurrency,
  favorites: favoriteCurrencies
})

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

export default store;

