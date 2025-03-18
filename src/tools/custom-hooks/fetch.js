import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
            try {
                const res = await fetch(url)
                const response = await res.json()
                setData(response)
            } catch (error) {
                setError(error.message)
            }
    
            setLoading(false)
        }
        fetchData()
    }, [url])

    return {
        data,
        loading,
        error
    }
}

export default useFetch
