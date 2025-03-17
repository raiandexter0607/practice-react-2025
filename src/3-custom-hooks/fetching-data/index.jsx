
import { useEffect, useState } from "react"
const url = "https://jsonplaceholder.typicode.com/posts"
const FetchingData = () => {


    const usePost = () => {
        const { data, setData } = useState([])
        const { error, setError } = useState("")
        const { loading, isLoading } = useState(true)
    

        useEffect(() => {
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                isLoading(false)
            })
            .catch((e) => setError(e))
        }, [])

        return {
            data,
            error,
            loading
        }
    }

    const { loading, data, error} = usePost()
    return (
        <div>
            {loading === true ? <p>Loading</p> : <p>data</p>}
        </div>
    )
}

export default FetchingData