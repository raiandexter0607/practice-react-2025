import { useState } from "react"
import useSearch from './hooks/useSearch.js'

function Controlled () {

    const [ query, setQuery ] = useState('')
    const { search, error } = useSearch(query)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(search)
    }

    const handleEvent = (event) => {
        const newEvent = event.target.value
        setQuery(newEvent)
    }

    return(
        <>
            <header>
                <h1>Search of Movies</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={query} onChange={handleEvent}></input>
                    <button>Search</button>
                </form>
                { error && <p style={{ color: 'red'}}>{error}</p>}
            </header>
        </>
    )
}

export default Controlled