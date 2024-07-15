import { useState } from "react"

export default function Client1()
{
    const [count, setCount] = useState(5);
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        borderRadius: '10px',
        cursor: 'pointer',
        width: '50%'
    }

    const div = {
        border: '1px solid black',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={div}>
            <h2>Code with Redoy</h2>
            <p>Liked: </p>
            <p>{count}</p>
            <button style={buttonStyle} onClick={() => {setCount(count+1)}}>Like</button>
        </div>
    )
}