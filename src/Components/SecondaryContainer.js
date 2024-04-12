import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
    return (

        <div className=' bg-black bg-cover text-white'>

            <div className='mt-0 md:-mt-52 relative  z-20 pl-4 md:m-2 md:p-14 md:pl-12 '>

                <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies} />


                <MovieList title={"Top Rated Movies"} movies={movies?.topratedMovies} />
                <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />

            </div>   </div>
    )
}

export default SecondaryContainer