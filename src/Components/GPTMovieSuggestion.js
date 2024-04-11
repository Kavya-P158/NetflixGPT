import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestion = () => {

    const { movieNames, MovieResult } = useSelector(store => store.gpt);


    return (
        <div className='p-4 m-4 bg-black opacity-80 text-white bg-opacity-90'>
            <div>

                {
                    movieNames?.map((movieName, index) => <MovieList
                        key={movieName}
                        title={movieName} movies={MovieResult[index]} />)
                }

            </div>
        </div>
    )
}

export default GPTMovieSuggestion