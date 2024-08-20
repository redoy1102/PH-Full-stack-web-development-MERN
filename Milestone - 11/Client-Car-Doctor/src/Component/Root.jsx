
import {Outlet} from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

const Root = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;