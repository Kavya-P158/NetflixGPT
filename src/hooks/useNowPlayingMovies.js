import { useEffect } from 'react'
import { url, API_Options } from '../utils/constant'
import { addnowplayingmovies } from '../utils/moviesSlice'
import { useDispatch, useSelector } from 'react-redux'

const useNowPlayingMovies = () => {

    const nowplayingMovies = useSelector(store => store.movies.nowPlayingMovies)
    const dispatch = useDispatch();
    const apirequest = async () => {

        try {
            const result = await fetch(url, API_Options);
            const data = await result.json();
            console.log(data.results)

            dispatch(addnowplayingmovies(data.results))
        }
        catch (err) {
            console.log(err);
            console.log("error occured")
        }

    }

    useEffect(() => {

        // if (!nowplayingMovies)
        apirequest()
    }, [])

}

export default useNowPlayingMovies;