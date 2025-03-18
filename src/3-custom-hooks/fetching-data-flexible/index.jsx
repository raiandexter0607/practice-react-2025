
import { useEffect, useState } from "react"

const FetchingDataFlexible = () => {
    const [ data, setData ] = useState([])

    const getData = async (url, options) => {
        const res = await fetch(url)
        return await res.json()
    }

    useEffect(() => {
        const fetchData = async() => {
            const response = await getData("https://jsonplaceholder.typicode.com/posts")
            setData(response)
        }
        fetchData()
    },[])


    return(
        <div>
            <ul>{data.map((item) => (
                <li>{item.id}</li>
            ))}</ul>
        </div>
    )
}

export default FetchingDataFlexible