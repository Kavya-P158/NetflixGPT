import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        toggleGPT: false,
        movies: null,
        movieNames: null,
        MovieResult: null

    },
    reducers: {
        toggleGPTSearch: (state) => {
            state.toggleGPT = !(state.toggleGPT);
        },
        addGPTMovieResult: (state, action) => {
            const { movieNames, MovieResult } = action.payload;
            state.movieNames = movieNames
            state.MovieResult = MovieResult

        }
    }
})

export const { toggleGPTSearch, addGPTMovieResult } = gptSlice.actions;

export default gptSlice.reducer;