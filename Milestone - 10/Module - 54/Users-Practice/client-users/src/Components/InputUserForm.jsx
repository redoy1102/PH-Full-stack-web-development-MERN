import React from 'react';

const InputUserForm = ({handleAddUser}) => {
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder="Username" />
                <input type="email" name="email" placeholder="Email" />
                <input type="submit" value="Add User"/>
            </form>
        </div>
    );
};

export default InputUserForm;