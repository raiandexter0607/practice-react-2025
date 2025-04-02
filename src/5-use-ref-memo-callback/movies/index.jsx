import { useCallback, useState } from 'react'
import  './index.css'
import useMovies from './hooks/useMovies'
import debounce from 'just-debounce-it'


function Movies() {
    const [ search, setSearch ] = useState('')
    const [ query, setQuery ] = useState('')
    const { movies } = useMovies(query)

    console.log('Render Component')
    const debounceSearch = useCallback(debounce((newSearch) => {
        setQuery(newSearch)
    }, 300), [])

    const handleChange = (e) => {
        setSearch(e.target.value)
        debounceSearch(e.target.value)
    }

    
    return(
        <>
            <h1>Search of Movies</h1>
            <p>Real-time input: {search}</p>
            <p>Debounced search: {query}</p>
            <form>
                <input value={search} type="text" placeholder="movie" onChange={handleChange}/>
                <button type="submit">Search</button>
            </form>
            <main>
                <ul className='movies'>{ movies.map((movie, index) => (
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