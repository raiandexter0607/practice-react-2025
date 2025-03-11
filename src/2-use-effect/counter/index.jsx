import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((count) => (count += 1));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <h1>{counter}</h1>
    </>
  );
};

export default Counter;
