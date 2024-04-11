// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqlt3glPTlWMtamhvEGqffVfL_l50owyg",
    authDomain: "netflixgpt-9a99a.firebaseapp.com",
    projectId: "netflixgpt-9a99a",
    storageBucket: "netflixgpt-9a99a.appspot.com",
    messagingSenderId: "749442335213",
    appId: "1:749442335213:web:23629b3726303cb828a7e4",
    measurementId: "G-NLKDBXYKN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();