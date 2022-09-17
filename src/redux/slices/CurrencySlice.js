import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    symbol: "$",
};

const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        switchCurrency: (state, action) => {
            state.symbol = action.payload;
        },
    },
});

const { actions, reducer } = currencySlice;

export const { switchCurrency } = actions;

export const selectCurrencySymbol = (state) => state.currency.symbol;

export default reducer;
