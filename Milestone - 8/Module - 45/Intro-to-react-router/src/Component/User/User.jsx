import './User.css'
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div className="user_style">
            <h2>{name}</h2>
            <Link to={`/user/${id}`}>Show details</Link>
        </div>
    );
};

export default User;