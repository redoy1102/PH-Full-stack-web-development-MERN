import {useContext} from 'react';
import {AuthContext} from "../../Providers/AuthProvider.jsx";

const PrivateRoute = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>

        </div>
    );
};

export default PrivateRoute;