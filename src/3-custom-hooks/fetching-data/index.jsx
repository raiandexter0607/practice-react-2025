
import { useEffect, useState } from "react"
const url = "https://jsonplaceholder.typicode.com/posts"

const usePost = (url) => {
    const [ data, setData ] = useState([])
    const [ error, setError ] = useState("")
    const [ loading, setLoading ] = useState(true)


    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
        .catch((e) => {
            setError(e.message)
            setLoading(false)
        })
    }, [url])

    return {
        data,
        error,
        loading
    }
}

const FetchingData = () => {
    const { loading, data, error} = usePost(url)
    console.log(data)

    if(error) return error

    return (
        <div>
            {loading ? (<p>Loading...</p>) : 
                <ul>{data.map((item, index) => <li key={index}>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                </li>)}</ul>
            }
        </div>
    )
}

export default FetchingData