import { useState } from 'react'
import data from './data/data.json'


function Movies() {
    const [ search, setSearch ] = useState('')
    console.log(data)
    const handleChange = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    
    return(
        <>
            <h1>Search of Movies</h1>
            <form>
                <input value={search} type="text" placeholder="movie" onChange={handleChange}/>
                <button>Search</button>
            </form>
            <main>
                <ul>{ data.Search.map((movie, index) => (
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