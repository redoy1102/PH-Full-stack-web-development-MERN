import { createContext, useState } from 'react';

export const userContext = createContext();

export const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [logInError, setLogInError] = useState(null);
    const [loginSuccessMsg, setLoginSuccessMsg] = useState(null);
    const [manualError, setManualError] = useState(null);
    const [spinnerLoading, setSpinnerLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false)

    return (
        <userContext.Provider value={
            {
                user, setUser,
                logInError, setLogInError,
                loginSuccessMsg, setLoginSuccessMsg,
                manualError, setManualError,
                spinnerLoading, setSpinnerLoading,
                showPassword, setShowPassword,
            }
        }>
            {children}
        </userContext.Provider>
    );
};

export default UserContext;

