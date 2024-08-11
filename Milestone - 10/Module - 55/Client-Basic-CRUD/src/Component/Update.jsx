import React from 'react';
import {useLoaderData} from "react-router-dom";

const Update = () => {
    const user = useLoaderData();

    const {_id, name, email} = user;
    console.log(user)

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = {name, email};

        // console.log(updatedUser)

        fetch(`http://localhost:3000/users/${_id}`,{
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    alert('Updated successfully!!')
                }
                else{
                    alert("Update failed!");
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" placeholder="Your name" defaultValue={name} />
                <br/>
                <input type="email" name="email" placeholder="Your email" defaultValue={email} />
                <br/>
                <input type="submit" value="Update"/>
            </form>
        </div>
    );
};

export default Update;