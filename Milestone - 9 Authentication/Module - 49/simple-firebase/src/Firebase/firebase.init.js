// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhqHCtL-aOtxBbBE2ngRVMGbHrFpwuWvw",
    authDomain: "simple-firebase-b9adc.firebaseapp.com",
    projectId: "simple-firebase-b9adc",
    storageBucket: "simple-firebase-b9adc.appspot.com",
    messagingSenderId: "825052783267",
    appId: "1:825052783267:web:6ffb47e328565ee1781516"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;