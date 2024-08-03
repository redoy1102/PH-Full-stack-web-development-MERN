import {useLoaderData} from "react-router-dom";
import '../User/User.css'

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user)
    const {email, username, website, phone} = user;
    return (
        <div className="user_style">
            <h2>{username}</h2>
            <h3>{phone}</h3>
            <h4>{email}</h4>
            <a href={website}> Website</a> <br/> <br/>
        </div>
    );
};

export default UserDetails;