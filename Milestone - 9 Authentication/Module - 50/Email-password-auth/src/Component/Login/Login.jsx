import {IoEye, IoEyeOff} from "react-icons/io5";
import {BounceLoader} from "react-spinners";
import {useContext} from "react";
import {userContext} from "../../Context/UserContext.jsx";
import {signInWithEmailAndPassword , getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import firebaseApp from "../../../firebase.init.js";
import {Link} from "react-router-dom";

const Login = () => {
    const {setUser} = useContext(userContext);
    const {logInError, setLogInError} = useContext(userContext)
    const {loginSuccessMsg, setLoginSuccessMsg} = useContext(userContext);
    const {manualError, setManualError} = useContext(userContext);
    const {spinnerLoading, setSpinnerLoading} = useContext(userContext);
    const {showPassword, setShowPassword} = useContext(userContext);

    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();

    const handleGooglePopSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser)

            }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }


    const handleForm = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setLogInError('');
            setManualError("Please enter a valid email address.");
            return;
        }
        else if(password.length < 6){
            setLogInError('');
            setManualError("Password should be at least 6 characters.")
            return
        }
        else if(!/[A-Z]/.test(password)) {
            setLogInError('');
            setManualError("Password should be at least one uppercase letter.")
            return
        }
        else if(!/[a-z]/.test(password)) {
            setLogInError('');
            setManualError("Password should be at least one lowercase letter.")
            return
        }
        else if(!/[0-9]/.test(password)) {
            setLogInError('');
            setManualError("Password should be at least one digit.")
            return
        }

        // Resetting errors
        setLogInError('');
        setLoginSuccessMsg('')
        setManualError('')
        setSpinnerLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const loggedInUser = userCredential.user;
                setUser(loggedInUser)
                setLoginSuccessMsg(true)
                setSpinnerLoading(false);
                console.log(loggedInUser)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLogInError(true);
                setSpinnerLoading(false);
                console.log(errorMessage)
            });
    }

    return (
        <div className="mx-2 lg:mx-32">
            {/*register page*/}
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                        {/*Register form start */}
                        <form onSubmit={handleForm} className="card-body">

                            {/*Email field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered"
                                       required/>
                            </div>

                            {/*Password field*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>

                                </label>
                                <div className="grid grid-cols-12 gap-2 justify-between items-center">
                                    <input type={showPassword ? "text" : "password"}
                                           placeholder="password"
                                           name="password"
                                           className="input input-bordered col-span-11"
                                           required
                                    />
                                    <span className="col-span-1 cursor-pointer"
                                          onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <IoEyeOff className="text-xl"></IoEyeOff> :
                                                <IoEye className="text-xl"/>
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot
                                        password?</a>
                                </label>
                            </div>

                            {/*Buttons */}
                            <div className="form-control mt-6">
                                {/*<Link to={"/profile"}>*/}
                                <button className="btn btn-primary mb-4 w-full">Login</button>
                                {/*</Link>*/}
                            </div>

                            {/*Google popup signin buttons*/}
                            <button onClick={handleGooglePopSignIn} className="btn btn-primary">Login with Google
                            </button>

                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-3">
                                Not registered? <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                            </div>
                        </form>


                        {/*Error messages*/}
                        <div className="flex justify-center items-center mb-2">
                            {
                                spinnerLoading ? <BounceLoader color="#ff5100"/> : ''
                            }
                        </div>
                        {
                            loginSuccessMsg &&
                            <p className="text-center text-green-800 font-bold mb-2">Logged in successful!</p>
                        }
                        {
                            manualError && <p className="text-center text-red-700 font-bold mb-2">{manualError}</p>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;