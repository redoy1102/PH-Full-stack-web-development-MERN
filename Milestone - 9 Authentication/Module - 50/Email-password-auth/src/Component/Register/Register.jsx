import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import firebaseApp from "../../../firebase.init.js";
import React, {useContext} from "react";
import {userContext} from "../../Context/UserContext.jsx";
import {BounceLoader} from "react-spinners";
import {IoEye, IoEyeOff} from "react-icons/io5";
import {Link} from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Register = () => {
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
        const name = e.target.name.value;
        const email = e.target.email.value
        const password = e.target.password.value
        const isChecked = e.target.terms.checked
        const isPrivacy = e.target.privacy.checked

        console.log(email, password, isChecked)

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
        else if(!isChecked){
            setLogInError('');
            setManualError("Please accept our terms and conditions.")
            return
        }
        else if(!isPrivacy){
            setLogInError('');
            setManualError("Please accept our privacy policy.")
            return
        }

        // Resetting errors
        setLogInError('');
        setLoginSuccessMsg('')
        setManualError('')
        setSpinnerLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const createdUser = userCredential.user;
                // setUser(createdUser)
                setSpinnerLoading(false);
                setLoginSuccessMsg(true);

                // Updating the profile after creating an user
                updateProfile(createdUser, {
                    displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                    alert("Profile updated.")
                }).catch((error) => {
                    console.log(error.message)
                });


                sendEmailVerification(createdUser)
                    .then(() => {
                        alert("Please check your mail and verify your email address.")
                    });
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
                        <h1 className="text-4xl md:text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                        {/*Register form start */}
                        <form onSubmit={handleForm} className="card-body">

                            <div className="form-control">
                                <label className="label"><span className="label-text">Your name</span></label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required/>
                            </div>

                            {/*Email field */}
                            <div className="form-control">
                                <label className="label"><span className="label-text">Email</span></label>
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
                            </div>

                            <div className="text-xs md:text-base flex justify-start items-center gap-2 mt-2">
                                <input type="checkbox" name="terms" id="terms"/>
                                <label htmlFor="terms">I accept the <Link to="/terms"
                                                                          className="ml-1 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">terms
                                    and condition.</Link>
                                </label>
                            </div>

                            <div className="text-xs md:text-base flex justify-start items-center gap-2 mt-2">
                                <input type="checkbox" name="privacy" id="privacy"/>
                                <label htmlFor="privacy">I accept the <Link to="/privacyPolicy" href="#"
                                                                            className="ml-1 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Privacy
                                    Policy</Link>
                                </label>
                            </div>

                            {/*Buttons */}
                            <div className="form-control mt-6">
                                {/*<Link to={loginSuccessMsg ? "/profile" : "/register"}>*/}
                                <button className="btn btn-primary mb-4 w-full">Register</button>
                                {/*</Link>*/}
                            </div>

                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Already registered? <Link to="/login"
                                                          className="text-blue-700 hover:underline dark:text-blue-500">Let's
                                login</Link>
                            </div>
                        </form>


                        {/*Error messages*/}

                        {
                            logInError &&
                            <p className="text-center text-red-700 font-bold mb-2">User is already exist</p>
                        }
                        <div className="flex justify-center items-center mb-2">
                            {
                                spinnerLoading ? <BounceLoader color="#ff5100" /> : ''
                            }
                        </div>
                        {
                            loginSuccessMsg && <p className="text-center text-green-800 font-bold mb-2">Registration successful!</p>
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

export default Register;