
import useFetch from "../../tools/custom-hooks/fetch"
import { useState } from "react"

const FetchingDataFlexible = () => {
    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts")
    const { data, loading, error } = useFetch(url)


    {error && <p>error</p>}
    return(
        <div>
            <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}>Search Users</button>
            <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/comments")}>Search Comments</button>
            <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}>Search Posts</button>
            {loading ? "Loading..." : (
                <ul>{data.map((item, index) => (
                    <li key={index}>{item.id}</li>
                ))}</ul>
            )}            
        </div>
    )
}

export default FetchingDataFlexible