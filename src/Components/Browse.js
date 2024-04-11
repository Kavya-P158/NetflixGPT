import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGPT = useSelector((store) => store.gpt?.toggleGPT)

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {
        showGPT ? <GPTSearch /> : (
          <>
            <MainContainer />
            <SecondaryContainer />

          </>
        )
      }



    </div>
  )
}

export default Browse