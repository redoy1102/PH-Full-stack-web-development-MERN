import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseApp from "../../Firebase/firebase.init.js";


const Login = () => {
    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            }).catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
        })

    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-primary">Click to login</button>
        </div>
    );
};

export default Login;