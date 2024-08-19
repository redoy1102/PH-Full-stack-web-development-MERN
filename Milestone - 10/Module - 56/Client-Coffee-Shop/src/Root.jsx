import './App.css'
import {Outlet} from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";

function Root() {

  return (
    <>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default Root
