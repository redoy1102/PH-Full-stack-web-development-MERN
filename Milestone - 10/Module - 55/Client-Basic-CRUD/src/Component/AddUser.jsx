import React from 'react';

const AddUser = ({handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your name"/>
                <br/>
                <input type="email" name="email" placeholder="Your email"/>
                <br/>
                <input type="submit" value="Add User"/>
            </form>
        </div>
    );
};

export default AddUser;