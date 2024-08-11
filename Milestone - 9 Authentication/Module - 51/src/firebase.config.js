// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAY5iOC0v75FKjR7xfA9jwuj0E3nLqaKaE",
    authDomain: "moha-milon-module-51.firebaseapp.com",
    projectId: "moha-milon-module-51",
    storageBucket: "moha-milon-module-51.appspot.com",
    messagingSenderId: "31729584624",
    appId: "1:31729584624:web:fb5c41cf2cd929e798f535"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;