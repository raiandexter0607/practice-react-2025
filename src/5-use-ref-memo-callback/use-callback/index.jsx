import { useCallback, useState, memo } from 'react'
import data from './data/data.json'


const LogItem =  memo(({ item, handleClick }) => {
    console.log("renderizo componente hijo")
    return (<button onClick={() => handleClick(item)}>Log item</button>)
})

function PracticeUseCallback (){

    const [ counter, setCounter ] = useState(0)

    const incrementCounter = (e) => {
        e.preventDefault()
        setCounter((num) => num += 1)
    }

    const handleClick = useCallback((item) => {
        console.log("Cliked item", item)
    }, [])

    return(
        <>
            <h1>{counter}</h1>
            <button onClick={incrementCounter}>Add item</button>
            <ul>{ data.Search.map((item, index) => (
                <li key={index}>
                    <p>{item.Title}</p>
                    <LogItem item={item.Title} handleClick={handleClick}/>
                </li>
            ))}</ul>
        </>
    )
}

export default PracticeUseCallback