import React, {useState} from 'react';
import {useLoaderData} from "react-router-dom";
import User from "./User.jsx";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = (id) => {
        console.log("Deleted id from client:", id)

        // Fetch is required for passing the user id from client to server.
        fetch(`http://localhost:3000/users/${id}`,{
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    // alert('User deleted successfully.');
                    const remaining = users.filter(user => user._id !== id);
                    console.log(remaining);
                    setUsers(remaining);
                }
                else{
                    console.log('Delete failed!')
                }
            })
    }
    return (
        <div>
            {
                users.map(user => <User key={user._id} user={user} handleDelete={handleDelete} />)
            }
        </div>
    );
};

export default Users;