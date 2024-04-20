import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAMES } from "../names";

const cartSlice = createSlice({
    name: SLICE_NAMES.CART,
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
    },
    selectors: {
        getCart: state => state.cart,
    },
});

export const reducer = cartSlice.reducer;
export const actions = cartSlice.actions;
export const selectors = cartSlice.selectors;
