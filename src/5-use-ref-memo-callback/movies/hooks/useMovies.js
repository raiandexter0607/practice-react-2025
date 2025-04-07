import { useEffect, useState } from "react";
import moviesData from '../data/data.json'

const url = "http://www.omdbapi.com/?apikey=4287ad07&s="

function useMovies(query) {
    const [ movies, setMovies] = useState([])
    const [ loading, setLoading ] = useState(false)

    console.log(loading)
    useEffect(() => {
        if(query == '') return
        setLoading(true)
        
        fetch(`${url}${query}`)
        .then((response) => response.json())
        .then((data) => {
            if(data.Response === 'False') {
                setMovies(moviesData.Search)
            }else{
                setMovies(data.Search)
            }
            setLoading(false)  
        })
    }, [query])

    return {
        movies,
        loading
    }
}

export default useMovies