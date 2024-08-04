import {Link} from "react-router-dom";
import {useContext} from "react";
import {userContext} from "../../Context/UserContext.jsx";
import {getAuth, signOut } from "firebase/auth";
import firebaseApp from "../../../firebase.init.js";

const Header = () => {
    const {user} = useContext(userContext);
    const {setUser} = useContext(userContext);
    const auth = getAuth(firebaseApp)

    const handleGoogleSignOut = () => {
        signOut(auth).then(() => {
            setUser(null);
            console.log("Signout successful");
        }).catch((error) => {
            console.log(error.message)
        });
    }
    return (
        <div className="md:mx-2 lg:mx-32 mb-8">
            <div className="navbar bg-base-100">
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
                            <li><a className="text-lg">Private Batches</a></li>
                            <li><a className="text-lg">Courses</a></li>
                            {
                                !user && <Link to={"/register"} className="btn">Register</Link>
                            }
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost text-lg md:text-xl">Code with Redoy</Link>
                </div>
                <div className="navbar-center font-bold hidden lg:flex">
                    <ul className="menu menu-horizontal text-xl px-1">
                        <li><a>Private Batches</a></li>
                        <li><a>Courses</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && (
                            <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                        <div className="indicator">
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
                                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                            </svg>
                                            <span className="badge badge-sm indicator-item">8</span>
                                        </div>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                        <div className="card-body">
                                            <span className="text-lg font-bold">8 Items</span>
                                            <span className="text-info">Subtotal: $999</span>
                                            <div className="card-actions">
                                                <button className="btn btn-primary btn-block">View cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <li>
                                            <Link to={"/profile"}>
                                                <a className="justify-between">
                                                    Profile
                                                    <span className="badge">New</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li><Link to="/settings"><a>Settings</a></Link></li>
                                        <li onClick={handleGoogleSignOut}>
                                            <Link to={"/login"}><a>Logout</a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )
                    }
                    {
                        (!user) &&
                        <div className="flex justify-center gap-1">
                            <Link to={"/login"} className="btn mr-1">Login</Link>
                            <div className="hidden md:block">
                                <Link to={"/register"} className="btn">Register</Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;