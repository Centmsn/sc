import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        age: 0,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        deleteUser: state => {
            state.user = null;
        },
        modifyUser: (state, action) => {
            state.user = action.payload;
        },
    },
    selectors: {
        getUser: state => state.user,
        getUserAge: state => state.age,
    },
});

export const reducer = userSlice.reducer;
export const actions = userSlice.actions;
export const selectors = userSlice.selectors;

// const userReducer = (state = {user: null}, action) => {
//     switch (action.type) {
//         case "user/setUser":
//             return { ...state, user: action.payload };
//         case "user/deleteUser":
//             return { ...state, user: null };
//         case "user/otherAction":
//             return state;
//         default:
//             return state;
//     }
// }

// const userActions = {
//     setUser: (user) => {
//         return {
//             type: "user/setUser",
//             payload: user,
//         };
//     },
// };
