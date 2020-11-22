export const saveCurrencies = (currencies) => ({
    type: "SAVE_CURRENCIES",
    payload: currencies
});


export default function allCurrencies(currencies = [], action) {
    switch (action.type) {
        case "SAVE_CURRENCIES":
            return action.payload;

        default:
            return currencies;
    }
}
