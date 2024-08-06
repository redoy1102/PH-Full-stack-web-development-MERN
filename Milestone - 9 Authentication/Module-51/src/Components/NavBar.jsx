import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../Providers/AuthProvider.jsx";

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert('Logged out');
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
    return (
        <div className="navbar bg-base-100 mb-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost text-xl">CWR</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/orders">Orders</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span>{user.email}</span>
                        <a onClick={handleLogout} className="btn btn-sm ml-2">Logout</a>
                    </> : <NavLink to="/login">Login</NavLink>
                }

            </div>
        </div>
    );
};

export default NavBar;