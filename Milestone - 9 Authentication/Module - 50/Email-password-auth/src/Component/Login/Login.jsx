import { getAuth, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import firebaseApp from "../../../firebase.init.js";
import {useContext} from "react";
import {userContext} from "../../Context/UserContext.jsx";


// eslint-disable-next-line react/prop-types
const Login = () => {
    const {setUser} = useContext(userContext);
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

    return (
        <div className="mx-2 lg:mx-32">
            {/*login page*/}
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                       required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary mb-4">Login</button>
                            </div>
                            <button onClick={handleGooglePopSignIn} className="btn btn-primary">Login with Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;