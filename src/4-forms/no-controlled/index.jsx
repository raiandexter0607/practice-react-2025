

function NoControlled () {

    const handleSubmit = (event) => {
        event.preventDefault()
        const fields = Object.fromEntries(new window.FormData(event.target))
        console.log(fields)
    }


    return(
        <> 
            <header>
            <h1>Buscador de Peliculas</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder="Name"/>
                <input type="text" name="search2" placeholder="Last Name"/>
                <input type="text" name="search3" placeholder="Age"/>
                <button type="submit">Buscar</button>
            </form>
            </header>
        </>
    )
}

export default NoControlled