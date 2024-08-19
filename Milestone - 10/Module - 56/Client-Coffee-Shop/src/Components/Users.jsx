import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BackButton from "./Utlities/BackButton";
import User from "./User";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    console.log(users);

    return (
        <div className="mx-4 md:mx-32">
            <BackButton />

            <h1 className="my-1 text-center text-4xl">{users.length > 1 ? `Admins: ${users.length}`: `Admin: ${users.length}`}</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {
                    users.map(user => <User
                        user={user}
                        key={user._id}
                        users={users}
                        setUsers={setUsers}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Users;