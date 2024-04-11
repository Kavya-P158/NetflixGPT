import { createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        trailerId: null,
        upcomingMovies: null,
        topratedMovies: null
    },
    reducers: {
        addnowplayingmovies: (state, action) => {
            state.nowPlayingMovies = (action.payload);
        },
        addpopularmovies: (state, action) => {
            state.popularMovies = (action.payload);
        },
        addMovieTrailerId: (state, action) => {
            state.trailerId = (action.payload);
        },
        addupcomingmovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addtopratedmovies: (state, action) => {
            state.topratedMovies = action.payload;
        }


    },

});

export const { addnowplayingmovies, addpopularmovies, addupcomingmovies, addtopratedmovies, addMovieTrailerId } = moviesSlice.actions;
export default moviesSlice.reducer;