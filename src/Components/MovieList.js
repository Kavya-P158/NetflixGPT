import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(movies)
    return (
        <div className='px-6'>
            <h1 className='py-4 text-white text-lg md:text-3xl'>{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar'>



                <div className='flex'>
                    {

                        movies?.map((movie) => <MovieCard key={movie.id} movietitle={movie.title} description={movie.overview} posterpath={movie.poster_path} />)
                    }

                </div>
            </div>
        </div>


    )
}

export default MovieList