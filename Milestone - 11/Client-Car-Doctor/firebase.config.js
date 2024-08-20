// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxwGr4Z07s61zcPmlAXLRSstAtKMwEsuQ",
    authDomain: "car-doctor-9ad64.firebaseapp.com",
    projectId: "car-doctor-9ad64",
    storageBucket: "car-doctor-9ad64.appspot.com",
    messagingSenderId: "1085749223058",
    appId: "1:1085749223058:web:b96d0b9574c70ec61c904b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;