import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "all",
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        switchCategory: (state, action) => {
            state.name = action.payload;
        },
    },
});

const { actions, reducer } = categorySlice;

export const { switchCategory } = actions;

export const selectCategoryName = (state) => state.category.name;

export default reducer;
