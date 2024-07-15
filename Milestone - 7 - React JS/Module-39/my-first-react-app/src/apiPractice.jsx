import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function ApiPractice() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    const divStyle = {
        border: '1px solid red',
        padding: '10px',
        margin: '10px'
    }

    return (
        <div style={divStyle}>
            {
                users.map(user => <Friend key={user.id} user={user}></Friend>)
            }
        </div>
    );
}