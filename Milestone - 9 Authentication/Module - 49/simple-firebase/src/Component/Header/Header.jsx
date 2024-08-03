import {Link} from "react-router-dom";
import firebaseApp from "../../Firebase/firebase.init.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut  } from "firebase/auth";
import {useState} from "react";

const auth = getAuth(firebaseApp)

const Header = () => {
    const [userData, setUserData] = useState(null);
    const provider = new GoogleAuthProvider();

    const handleGooglePopUpSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUserData(loggedInUser);


            }).catch(error => {
                const errorMessage = error.message;
            console.log(errorMessage)
        })
    }

    const handleLogout = () => {
        signOut(auth).then(() => {
            setUserData(null)
        }).catch((error) => {
            console.log(error.message)
        });
    }
    return (
        <div>
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
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/*<Link to="/login" className="btn">Google Login</Link>*/}
                    {
                        userData ? <button onClick={handleLogout} className="btn">Logout</button>
                                 : <button onClick={handleGooglePopUpSignIn} className="btn">
                                       {userData ? `${userData.displayName}` : "Google Login"}
                                   </button>
                }
            </div>
            </div>
        </div>
    );
};

export default Header;