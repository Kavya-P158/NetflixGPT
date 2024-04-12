import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { API_Options, language } from '../utils/constant'
import { lang } from '../utils/language'
import openaiconfig from '../utils/openai'
import { useDispatch } from 'react-redux';
import { addGPTMovieResult } from '../utils/gptSlice'


import Loader from "./Loader"
const GPTSearchbar = () => {
    const languageselected = useSelector((store) => store.app?.language)
    const dispatch = useDispatch()
    const GPTSearchtext = useRef(null)
    const [loading, setLoading] = useState(false)



    const FetchMovies = async (movie) => {

        const moviefetch = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
            API_Options)



        const data = await moviefetch.json();



        return data.results;
    }

    const handleGPTSubmit = async () => {

        console.log(GPTSearchtext.current.value)
        const GPTQuery = 'Act as a movie recommendation system and suggest some movies for the query: ' + GPTSearchtext.current.value + ' Only give me names of five movies, comma separated like the example results given ahead. Example result: Gadar,Sholey,Don,Golmaal'
        const GPTResult = await openaiconfig.chat.completions.create({
            messages: [{ role: 'user', content: GPTQuery }],
            model: 'gpt-3.5-turbo',
        });


        const gptmovies = GPTResult?.choices?.[0]?.message.content.split(",")
        setLoading(true)


        const data = gptmovies.map((item) => FetchMovies(item));

        const tmdbResults = await Promise.all(data);

        setLoading(false)
        console.log(tmdbResults);



        dispatch(addGPTMovieResult({ movieNames: gptmovies, MovieResult: tmdbResults }))



    }



    return (
        <div className='pt-[35%] md:pt-[10%] flex justify-center'>
            <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={GPTSearchtext}
                    type='text'
                    className='p-4 m-4 col-span-9'
                    placeholder={lang[languageselected].Searchplaceholder}
                />
                <button
                    className='px-4 py-2 m-4 col-span-3 text-white bg-red-600'
                    onClick={handleGPTSubmit}
                >
                    {lang[languageselected].Search}
                </button>
            </form>

            {loading && <Loader loading={loading} />}

        </div>
    )
}

export default GPTSearchbar