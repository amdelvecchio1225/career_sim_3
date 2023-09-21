import { createSlice } from "@reduxjs/toolkit";
import slice from "../posts/slice";

const initialState = {
    user: null
};

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
});

export const { login, logout } = slice.actions;

export default slice.reducer;