import { configureStore } from "@reduxjs/toolkit";
import { reducer as userReducer } from "./slices/userSlice";
import { reducer as cartReducer } from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        userSlice: userReducer,
        cartSlice: cartReducer,
    },
});
