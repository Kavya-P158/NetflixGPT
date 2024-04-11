import { useEffect } from 'react'
import { upcomingmovie_url, API_Options } from '../utils/constant'
import { addupcomingmovies } from '../utils/moviesSlice'
import { useDispatch, useSelector } from 'react-redux'

const useUpcomingMovies = () => {
    const upcomingmovies = useSelector(store => store.movies.upcomingMovies)
    const dispatch = useDispatch();
    const apirequest = async () => {

        try {
            const result = await fetch(upcomingmovie_url, API_Options);
            const data = await result.json();
            console.log(data.results)

            dispatch(addupcomingmovies(data.results))
        }
        catch (err) {
            console.log(err);
            console.log("error occured")
        }

    }

    useEffect(() => {
        if (!upcomingmovies)
            apirequest()
    }, [])

}

export default useUpcomingMovies;