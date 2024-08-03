import Header from "../src/Component/Header/Header.jsx";
import Footer from "../src/Component/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";
import {UserContext} from "../src/Context/UserContext.jsx";

const Root = () => {
    return (
        <UserContext>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </UserContext>
    );
};

export default Root;