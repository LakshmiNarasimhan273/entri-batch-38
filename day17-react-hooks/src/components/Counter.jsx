import React, { useState } from 'react'

function Counter() {
    // camelCase
    const[count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "500px"}}>
        <h1>{count}</h1>
        <button onClick={increment}>Increase count</button><br />
        <button onClick={decrement} disabled={count === 0}>Decrease count</button><br />
        <button onClick={reset}>Reset Count</button>
    </div>
  )
}

export default Counter;