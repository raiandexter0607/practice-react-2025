import { useState, useMemo } from "react"


function PracticingUseMemo () {

    const [ counter, setCounter ] = useState(0)
    const [ target, setTarget ] = useState(10)
    const numbers = [5,10,15,20,25,30]

    const sumAboveTarget = useMemo(() => {
            console.log('Data calculated')
            return numbers.filter(num => num > target).reduce((acc, sum) => acc + sum, 0)
        }, [target])

    return(
        <>
            <h1>The sum of the number grater than {target} : {sumAboveTarget}</h1>
            <button onClick={() => setTarget(target + 5)}>Click me</button>
            <h1>{counter}</h1>
            <button onClick={() => {setCounter(counter + 1)}}>Add counter</button>
        </>
    )
}
export default PracticingUseMemo