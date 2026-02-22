import { useState } from "react"

const CounterApp = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h4>Counter: {counter}</h4>
            <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
            <button onClick={() => setCounter(prev => prev - 1)}>Decrement</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </>
    )
}

export default CounterApp;