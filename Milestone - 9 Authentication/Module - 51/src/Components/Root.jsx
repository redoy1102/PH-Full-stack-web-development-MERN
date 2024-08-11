import {Outlet} from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";


const Root = () => {
    return (
        <div className="mx-5 md:mx-32">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;