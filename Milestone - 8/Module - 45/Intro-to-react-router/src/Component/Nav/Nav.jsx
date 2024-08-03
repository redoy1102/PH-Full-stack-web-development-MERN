import {NavLink} from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/batches">Private Batch</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/students">Students</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </nav>
    );
};

export default Nav;