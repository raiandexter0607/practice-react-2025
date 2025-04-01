import { useEffect, useState } from "react";
const url = "http://www.omdbapi.com/?apikey=4287ad07&s="

function useMovies(query) {
    const [ movies, setMovies] = useState([])

    useEffect(() => {
        
        if(query == '') return
        
        fetch(`${url}${query}`)
        .then((response) => response.json())
        .then((data) => setMovies(data.Search))
    }, [query])

    return {
        movies
    }
}

export default useMovies