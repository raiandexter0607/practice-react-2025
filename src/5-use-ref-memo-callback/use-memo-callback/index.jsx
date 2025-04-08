import { useState, useCallback, memo } from "react";

// Child component
const SummatoryButton = memo(({ onSum }) => {
    console.log("🔁 Rendered <SummatoryButton />");

    return <button onClick={() => onSum(Math.floor(Math.random() * 10 + 1))}>Add Random Value</button>;
});

function UseMemoAndCallback() {
    const [counter, setCounter] = useState(0);
    const [summatory, setSummatory] = useState(0);

    const sumValues = useCallback((value) => {
        console.log("⚙️ Executing sumValues");
        setSummatory(value + (value - 1));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCounter((count) => count + 1);
    };

    return (
        <>
            <h1>Counter: {counter}</h1>
            <h1>Summatory: {summatory}</h1>
            <button onClick={handleSubmit}>Increment Counter</button>

            {/* Child only re-renders if onSum (sumValues) changes */}
            <SummatoryButton onSum={sumValues} />
        </>
    );
}

export default UseMemoAndCallback;
