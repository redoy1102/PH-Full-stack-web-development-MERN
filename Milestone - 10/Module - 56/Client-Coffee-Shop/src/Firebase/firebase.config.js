// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNxg_flXChsjtGwwoFdkrdaQ2V1gh7w3g",
    authDomain: "coffee-shop-3af46.firebaseapp.com",
    projectId: "coffee-shop-3af46",
    storageBucket: "coffee-shop-3af46.appspot.com",
    messagingSenderId: "513715374515",
    appId: "1:513715374515:web:720b1004d246cb947fa3c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;