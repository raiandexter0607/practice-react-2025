import { useState, useEffect } from "react";
import './index.css'

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {

    //callback to execute
    const intervalId = setInterval(() => {
      setCounter((count) => (count += 1));
    }, 1000);

    // cleaner function
    return () => {
      clearInterval(intervalId);
    };
  }, []); // dependencies

  
  return (
    <>
      <section>
        <h1>{counter}</h1>  
        <button onClick={() => setCounter(0)}>Reset</button> 
      </section>

    </>
  );
};

export default Counter;
