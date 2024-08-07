import {useContext} from 'react';
import {AuthContext} from "../../Providers/AuthProvider.jsx";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner text-success"></span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to={"/login"}></Navigate>
};

export default PrivateRoute;