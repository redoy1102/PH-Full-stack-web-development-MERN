import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    // const tab = <>
    //     <li><NavLink to={'/addCoffee'}>Add Coffee</NavLink></li>
    //     <li><NavLink to='/updateCoffee'>Update Coffee</NavLink></li>
    // </>
    return (
        <div>
            <div
                className="p-3 flex justify-center items-center bg-[url('https://i.imgur.com/nbpPMXe.jpeg')] bg-cover bg-center bg-no-repeat w-full text-white ">
                <Link to={'/'}>
                    <img src="https://i.imgur.com/FncAPa3.png" className="w-16 h-20" alt=""/>
                </Link>
                <Link to={'/'}>
                    <h1 className="text-xl text-center">Espresso Emporium</h1>
                </Link>
            </div>


            {/*<div className="navbar bg-base-100">*/}
            {/*    <div className="navbar-start">*/}
            {/*        <div className="dropdown">*/}
            {/*            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">*/}
            {/*                <svg*/}
            {/*                    xmlns="http://www.w3.org/2000/svg"*/}
            {/*                    className="h-5 w-5"*/}
            {/*                    fill="none"*/}
            {/*                    viewBox="0 0 24 24"*/}
            {/*                    stroke="currentColor">*/}
            {/*                    <path*/}
            {/*                        strokeLinecap="round"*/}
            {/*                        strokeLinejoin="round"*/}
            {/*                        strokeWidth="2"*/}
            {/*                        d="M4 6h16M4 12h8m-8 6h16"/>*/}
            {/*                </svg>*/}
            {/*            </div>*/}
            {/*            <ul*/}
            {/*                tabIndex={0}*/}
            {/*                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">*/}
            {/*                {tab}*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*        <a className="btn btn-ghost text-xl">daisyUI</a>*/}
            {/*    </div>*/}
            {/*    <div className="navbar-center hidden lg:flex">*/}
            {/*        <ul className="menu menu-horizontal px-1">*/}
            {/*            {tab}*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*    <div className="navbar-end">*/}
            {/*        <a className="btn">Button</a>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default NavBar;