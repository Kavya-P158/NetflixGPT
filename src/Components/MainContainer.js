import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)

    if (!movies) return;
    const currmovie = movies[0];

    const { original_title, overview, id } = currmovie;


    return (
        <div className='pt-[20%] bg-black md:pt-0'>
            <VideoTitle title={original_title} description={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer