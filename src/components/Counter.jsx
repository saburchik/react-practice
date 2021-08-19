import React, { useState } from "react";

const Counter = function () {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement}>Decrement </button>
            <h1>{count}</h1>
        </div>
    )
}

export default Counter