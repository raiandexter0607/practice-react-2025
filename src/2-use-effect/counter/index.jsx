import { useState, useEffect } from "react";

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
      <h1>{counter}</h1>
    </>
  );
};

export default Counter;
