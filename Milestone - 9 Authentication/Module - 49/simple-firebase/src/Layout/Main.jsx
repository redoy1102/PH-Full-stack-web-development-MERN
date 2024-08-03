import {Outlet} from "react-router-dom";
import Header from "../Component/Header/Header.jsx";
import Footer from "../Component/Footer/Footer.jsx";

const Main = () => {
    return (
        <div className="md:mx-20">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;