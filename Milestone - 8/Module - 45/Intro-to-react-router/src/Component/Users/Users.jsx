import {useLoaderData} from "react-router-dom";
import User from "../User/User.jsx"
import './Users.css'

const Users = () => {

    const users = useLoaderData();
    // console.log(users)

    return (
        <div>
            <div className="users_container">
                {
                    users.map(user => <User user={user} key={user.id} />)
                }
            </div>
        </div>
    );
};

export default Users;