// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdwJwKCQRaebcX2i71X9d-q6MHZo92dC0",
  authDomain: "home-tutor-7ac73.firebaseapp.com",
  projectId: "home-tutor-7ac73",
  storageBucket: "home-tutor-7ac73.appspot.com",
  messagingSenderId: "48465152076",
  appId: "1:48465152076:web:cc565ae3efc45968904ce9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)