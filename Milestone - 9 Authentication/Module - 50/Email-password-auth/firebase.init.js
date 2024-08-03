// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5PsLeVWnPX0Bx4NGcfoV1Smk0R3Hel-Q",
    authDomain: "signin-id-password.firebaseapp.com",
    projectId: "signin-id-password",
    storageBucket: "signin-id-password.appspot.com",
    messagingSenderId: "430877366339",
    appId: "1:430877366339:web:3cacc8ebcb9cff8dafdcf6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;