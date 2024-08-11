import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "./src/Components/NavBar.jsx";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;