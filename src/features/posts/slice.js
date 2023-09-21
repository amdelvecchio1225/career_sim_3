import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setLoading: (state) => {
            state.status = 'loading';
        },
        setError: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { setPosts, setLoading, setError } = slice.actions;

export default slice.reducer;