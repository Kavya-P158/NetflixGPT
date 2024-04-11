import { useEffect } from 'react'

import { url, API_Options } from '../utils/constant'
import { addMovieTrailerId } from '../utils/moviesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch()
    const trailerid = useSelector((store) => store.movies.trailerId)

    const getVideo = async () => {

        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_Options);
            const json = await data.json();
            console.log(json.results);
            const movielist = json.results;
            const trailerlist = movielist.filter((movie) => movie.type == 'Trailer'); //there are 2 trailers for one movie. So taking any one trailer
            const trailer = trailerlist ? trailerlist[0] : movielist[0] // if trailer present use trailer else use anything like clip of the movie
            const trailerkey = trailer.key;

            dispatch(addMovieTrailerId(trailer))

            console.log(trailer)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (!trailerid)
            getVideo()
    }, [])
}

export default useMovieTrailer;