import React from 'react';

const User = ({user}) => {
    const {id, name, email} = user;
    return (
        <div>
            <p>ID: {id}</p>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
};

export default User;