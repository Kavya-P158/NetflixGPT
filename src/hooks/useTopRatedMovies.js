import { useEffect } from 'react'
import { upcomingmovie_url, API_Options, topratedmovie_url } from '../utils/constant'
import { addtopratedmovies } from '../utils/moviesSlice'
import { useDispatch, useSelector } from 'react-redux'

const useTopRatedMovies = () => {

    const topratedmovies = useSelector(store => store.movies.topratedMovies)
    const dispatch = useDispatch();
    const apirequest = async () => {

        try {
            const result = await fetch(topratedmovie_url, API_Options);
            const data = await result.json();
            console.log(data.results)

            dispatch(addtopratedmovies(data.results))
        }
        catch (err) {
            console.log(err);
            console.log("error occured")
        }

    }

    useEffect(() => {
        if (!topratedmovies)
            apirequest()
    }, [])

}

export default useTopRatedMovies;