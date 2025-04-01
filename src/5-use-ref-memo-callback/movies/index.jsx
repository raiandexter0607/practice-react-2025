import { useState } from 'react'
import data from './data/data.json'
import  './index.css'
import useMovies from './hooks/useMovies'


function Movies() {
    const [ search, setSearch ] = useState('')
    const { movies } = useMovies(search)


    const handleChange = (e) => {
        setSearch(e.target.value)
    }



    
    return(
        <>
            <h1>Search of Movies</h1>
            <form>
                <input value={search} type="text" placeholder="movie" onChange={handleChange}/>
                <button onClick={handleChange}>Search</button>
            </form>
            <main>
                <ul class='movies'>{ movies.map((movie, index) => (
                    <li key={index}>
                        <p>{movie.Title}</p>
                        <p>{movie.Year}</p>
                        <img src={movie.Poster} width="200" height="300"/>
                    </li>
                ))}</ul>
            </main>
        </>
    )
}

export default Movies