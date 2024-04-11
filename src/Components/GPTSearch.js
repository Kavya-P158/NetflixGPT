import React from 'react'
import GPTSearchbar from './GPTSearchbar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { bgimage } from '../utils/constant'

const GPTSearch = () => {
    return (
        <div>


            <div className='fixed -z-10'>
                <img className='object-cover h-screen md:h-full w-full'
                    src={bgimage}
                    alt='logo'
                />
            </div>
            <div className=' '>
                <GPTSearchbar />
                <GPTMovieSuggestion />
            </div>


        </div>
    )
}

export default GPTSearch