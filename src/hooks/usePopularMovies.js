import { useEffect } from 'react'
import { popularmovie_url, API_Options } from '../utils/constant'
import { addpopularmovies } from '../utils/moviesSlice'
import { useDispatch, useSelector } from 'react-redux'

const usePopularMovies = () => {


    const popularmovies = useSelector(store => store.movies.popularMovies)
    const dispatch = useDispatch();
    const apirequest = async () => {

        try {
            const result = await fetch(popularmovie_url, API_Options);
            const data = await result.json();
            console.log(data.results)

            dispatch(addpopularmovies(data.results))
        }
        catch (err) {
            console.log(err);
            console.log("error occured")
        }

    }

    useEffect(() => {
        if (!popularmovies)
            apirequest()
    }, [])

}

export default usePopularMovies;