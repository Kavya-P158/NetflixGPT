import React from 'react'
import { image_url } from '../utils/constant'

const MovieCard = ({ movietitle, posterpath, description }) => {
    if (!posterpath)
        return null;
    return (


        <div class="flex min-h-screen items-center justify-center bg-neutral-800">

            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72 p-2 m-2">
                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={image_url + posterpath}
                        alt="movie" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="font-dmserif text-3xl font-bold text-white ">{movietitle}</h1>
                    <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 overflow-y-scroll no-scrollbar">{description}</p>

                </div>
            </div>


        </div>

    )
}

export default MovieCard

