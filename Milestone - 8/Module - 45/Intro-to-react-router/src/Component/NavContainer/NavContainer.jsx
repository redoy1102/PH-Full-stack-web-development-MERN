import Nav from "../Nav/Nav.jsx";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import { ColorRing } from 'react-loader-spinner';
import React from 'react';

const NavContainer = () => {
    // for the spinner
    const navigation = useNavigation();
    return (
        <div>
            <Nav></Nav>
            {
                navigation.state === "loading"
                    ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <ColorRing
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="color-ring-loading"
                                wrapperStyle={{}}
                                wrapperClass="color-ring-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />
                        </div>
                    )
                    : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default NavContainer;
