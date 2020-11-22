export const getExactCurrency = (obj) => ({
    type: "GET_EXACT_CURRENCY",
    payload: {
        currency: obj.currency,
        currencies: obj.currencies
    }
});

export default function choosedCurrency(exact_currency = {}, action) {

    switch (action.type) {
        case "GET_EXACT_CURRENCY": {
            const exact_element = action.payload.currencies.filter(
                (el) => el.currency === action.payload.currency
            );
            return exact_element[0];
        }

        default:
            return exact_currency;
    }
}
