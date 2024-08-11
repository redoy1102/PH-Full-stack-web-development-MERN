import React from 'react';
import {Link} from "react-router-dom";

const User = ({user, handleDelete}) => {
    const {_id, name, email} = user;

    return (
        <div>
            <p>
                <b>Id: ...{_id.slice(-4)}</b> - {name + "  "}
                <Link to={`/update/${_id}`}>
                    <button>Update</button>
                </Link>
                <button onClick={() => handleDelete(_id)}>X</button>
            </p>
        </div>
    );
};

export default User;