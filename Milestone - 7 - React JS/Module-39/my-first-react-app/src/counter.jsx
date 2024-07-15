import { useState } from "react"

export default function Counter() {
    const [counter, setCount] = useState(0);
    return (
        <div>
            <h1>I am from counter</h1>
            <p>{counter}</p>
            <button onClick={() => setCount(counter+1)}>Count</button>
        </div>
    )
}