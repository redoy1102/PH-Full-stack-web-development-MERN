import {Outlet} from "react-router-dom";
import NavBar from "./Component/NavBar.jsx";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;