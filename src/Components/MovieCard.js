import React from 'react'
import { image_url } from '../utils/constant'

const MovieCard = ({ movietitle, posterpath, description }) => {
    if (!posterpath)
        return null;
    return (


        <div className='w-36 md:w-48 pr-4 '>
            <img
                src={image_url + posterpath}
                alt="movie"
            />

            <div className=''>
                <h2 className='text-xl font-medium text-white'>{movietitle}</h2>
                <p className='text-white-70'>{description}</p>
            </div>

        </div>


    )
}

export default MovieCard

