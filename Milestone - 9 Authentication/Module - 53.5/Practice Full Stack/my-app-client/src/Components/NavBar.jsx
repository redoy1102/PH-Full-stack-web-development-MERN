import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to={'/phones'}>Phones</Link>
        </div>
    );
};

export default NavBar;