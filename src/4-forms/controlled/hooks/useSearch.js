import { useState, useEffect } from "react"

function useSearch (search) {

    const [ error, setError ] = useState('')

    useEffect(() => {
        if(search.startsWith(' ')) return

        if(search === ''){
            setError('Can not do an empty search')
            return
        }

        if(search.length <= 3){
            setError('Search must has at least three characters')
            return
        }

        setError(null)
    }, [ search ])

    return {
        error,
        search
    }
}

export default useSearch
