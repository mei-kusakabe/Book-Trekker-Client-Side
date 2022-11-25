// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

    // apiKey: "AIzaSyA_XrU3gCEV6X2x9hJ1VUFXhrt_xwB9lxw",
    // authDomain: "book-trekker.firebaseapp.com",
    // projectId: "book-trekker",
    // storageBucket: "book-trekker.appspot.com",
    // messagingSenderId: "731211648929",
    // appId: "1:731211648929:web:34e5d4754d5b9a7b6dc5e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;