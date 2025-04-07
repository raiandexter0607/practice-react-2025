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


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }
    
    return(
        <>      
            <header>
            <h1>Search of Movies</h1>
            </header>
            <form onSubmit={handleSubmit}>
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